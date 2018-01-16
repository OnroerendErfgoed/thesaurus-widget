import { inject, bindable, bindingMode } from 'aurelia-framework';
import { Tree, TreeChild } from './models/tree';
import { ITreeChild } from './models/apiModel';
import { ApiService } from './services/api-service';

@inject(Element)
export class OeThesaurusTree {
  @bindable public nodes: Tree = [];
  @bindable public type: string;
  @bindable public baseUrl: string = '';
  @bindable({ defaultBindingMode: bindingMode.twoWay }) public value: any;
  public treeVisible: boolean = false;
  public element: Element = null;
  public context: any = this;
  public position: string;
  private service: ApiService;

  constructor(element: Element) {
    this.element = element;
  }

  public attached() {
    if (!this.service) {
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
    this.calcPosition();
    this.treeVisible = !this.treeVisible;
  }

  public calcPosition() {
    const buttonBounds = (this.element.querySelector('button') as HTMLElement).getBoundingClientRect();
    if (buttonBounds.top >= 300) {
      this.position = `bottom: ${buttonBounds.height}px`;
    } else {
      this.position = `top: ${buttonBounds.height}px`;
    }
  }

  public updateValue(value) {
    this.value = value;
  }
}
