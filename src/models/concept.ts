import { IConcept, INote, IConceptScheme, ILabel, IMember, IMatches } from './apiModel';

export class Concept {
  public id: number;
  public labels: ILabel[];
  public memberOf: IMember[];
  public conceptScheme: IConceptScheme;
  public uri: string;
  public label: string;
  public type: string;
  public notes: INote[];
  public subordinateArrays: any[];
  public matches: IMatches;
  public narrower: any[];
  public related: any[];
  public broader: any[];
  public sources: any[];

  constructor(apiConcept: IConcept) {
    this.id = apiConcept.id;
    this.labels = apiConcept.labels;
    this.memberOf = apiConcept.member_of;
    this.conceptScheme = apiConcept.concept_scheme;
    this.uri = apiConcept.uri;
    this.label = apiConcept.label;
    this.type = apiConcept.type;
    this.notes = apiConcept.notes;
    this.subordinateArrays = apiConcept.subordinate_arrays;
    this.matches = apiConcept.matches;
    this.narrower = apiConcept.narrower;
    this.related = apiConcept.related;
    this.broader = apiConcept.broader;
    this.sources = apiConcept.sources;
  }
}
