import { ICollection, INote, IConceptScheme, ILabel, IMember } from './apiModel';

export class Collection {
  public id: number;
  public labels: ILabel[];
  public members: IMember[];
  public memberOf: IMember[];
  public conceptScheme: IConceptScheme;
  public uri: string;
  public label: string;
  public type: string;
  public sources: any[];
  public notes: INote[];
  public superordinates: any[];

  constructor(apiCollection: ICollection) {
    this.id = apiCollection.id;
    this.labels = apiCollection.labels;
    this.members = apiCollection.members;
    this.memberOf = apiCollection.member_of;
    this.conceptScheme = apiCollection.concept_scheme;
    this.uri = apiCollection.uri;
    this.label = apiCollection.label;
    this.type = apiCollection.type;
    this.sources = apiCollection.sources;
    this.notes = apiCollection.notes;
    this.superordinates = apiCollection.superordinates;
  }
}
