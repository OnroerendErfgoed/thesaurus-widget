export class TreeChild {
  public children: TreeChild[];
  public conceptId: number;
  public id: string;
  public label: string;
  public type: string;

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
  }
}

export class Tree extends Array<TreeChild> {}
