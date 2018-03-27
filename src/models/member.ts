export class Member {
  public id: number;
  public label: string;
  public type: string;
  public uri: string;

  constructor(
    id: number,
    label: string,
    type: string,
    uri: string
  ) {
    this.id = id;
    this.label = label;
    this.type = type;
    this.uri = uri;
  }
}
