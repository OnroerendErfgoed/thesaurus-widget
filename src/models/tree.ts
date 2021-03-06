export class TreeChild {
  public children: TreeChild[];
  public conceptId: number;
  public id: string;
  public label: string;
  public type: string;
  public visible: boolean = true;
  public expanded: boolean = true;

  constructor(
    children: TreeChild[],
    conceptId: number,
    id: string,
    label: string,
    type: string
  ) {
    this.children = children;
    this.conceptId = conceptId;
    this.id = id;
    this.label = label;
    this.type = type;

    if (this.hasChildren()) {
      this.toggleNode();
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
  }
}

export class Tree extends Array<TreeChild> {}
