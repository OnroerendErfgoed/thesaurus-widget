/*https://github.com/thelgevold/aurelia-treeview*/

export class NodeModel {
  public name: string;
  public children: NodeModel[];
  public visible: boolean = false;
  public expanded: boolean = false;
  public icon: string;

  constructor(name: string, children: NodeModel[]) {
    this.name = name;
    this.children = children || [];
    this.visible = true;

    if (this.hasChildren()) {
      this.icon = 'fa fa-chevron-down';
      this.expanded = true;
    }
  }

  public hasChildren() {
    return this.children.length > 0;
  }

  public toggleNode() {
    for (let i = 0; i < this.children.length; i++) {
      this.children[i].visible = !this.children[i].visible;
    }

    this.expanded = !this.expanded;

    if (this.expanded === true) {
      this.icon = 'fa fa-chevron-down';
    } else {
      this.icon = 'fa fa-chevron-right';
    }

  }

}
