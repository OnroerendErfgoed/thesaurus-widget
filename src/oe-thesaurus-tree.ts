import { TaskQueue, inject, bindable, bindingMode } from 'aurelia-framework';
import { Tree, TreeChild } from './models/tree';
import { Member } from './models/member';
import { ITreeChild } from './models/apiModel';
import { ApiService } from './services/api-service';

@inject(TaskQueue, Element)
export class OeThesaurusTree {
  @bindable public nodes: Tree = [];
  @bindable public type: string;
  @bindable public baseUrl: string = '';
  @bindable({ defaultBindingMode: bindingMode.twoWay }) public value: Member;
  public treeVisible: boolean = false;
  public context: any = this;
  public position: string;
  @bindable public standalone: boolean = true;
  @bindable public service: ApiService;
  @bindable public disabled: boolean;

  constructor(private taskQueue: TaskQueue, private element: Element) {
    this.element = element;
    this.taskQueue = taskQueue;
  }

  public attached() {
    if (this.standalone) {
      this.service = new ApiService(this.baseUrl);
    }
  }

  public parseNode(node: ITreeChild) {
    let children: TreeChild[] = [];
    if (node.children.length > 0) {
      children = node.children.map(n => {
        return this.parseNode(n);
      });
    }
    return new TreeChild(
      children,
      node.concept_id,
      node.id,
      node.label,
      node.type
    );
  }

  public toggleTree() {
    if (this.nodes.length === 0) {
      this.service.getTree(this.type).then((data) => {
        if (data) {
          this.nodes = data.map(d => {
            return this.parseNode(d);
          });
        }
      });
    }
    if (!this.treeVisible) {
      this.calcPosition();
    }
    this.treeVisible = !this.treeVisible;
    if (this.treeVisible) {
      this.taskQueue.queueMicroTask(() => {
        (this.element.querySelector('.popup') as HTMLElement).focus();
      });
    }
  }

  public calcPosition() {
    const elBounds = (this.element as HTMLElement).getBoundingClientRect();
    const buttonBounds = (this.element.querySelector('button') as HTMLElement).getBoundingClientRect();
    if (buttonBounds.top >= 300) {
      this.position = `bottom: ${elBounds.height}px;`;
    } else {
      this.position = `top: ${buttonBounds.height}px;`;
    }
    if ((window.innerWidth - buttonBounds.right) < 200) {
      this.position += ` right: 0;`;
    }
  }

  public updateValue(id: number) {
    this.service.getConceptById(this.type, id).then((data) => {
      if (data) {
        this.value = new Member(data.id, data.label, data.type, data.uri);
      }
    });
    this.treeVisible = false;
  }
}
