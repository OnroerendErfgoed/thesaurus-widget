import { inject, bindable } from 'aurelia-framework';
import { Tree, TreeChild } from './models/tree';
import { ITreeChild } from './models/apiModel';
import { ApiService } from './services/api-service';

@inject(Element)
export class OeThesaurusTree {
  @bindable public nodes: Tree = [];
  @bindable public type: string;
  @bindable public baseUrl: string = '';
  private service: ApiService;

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

  public attached() {
    if (!this.service) {
      this.service = new ApiService(this.baseUrl);
    }

    this.service.getTree(this.type).then((data) => {
      if (data) {
        this.nodes = data.map(d => {
          return this.parseNode(d);
        });
      }
    });
  }
}
