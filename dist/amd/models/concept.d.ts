import { IConcept, INote, IConceptScheme, ILabel, IMember, IMatches } from './apiModel';
export declare class Concept {
    id: number;
    labels: ILabel[];
    memberOf: IMember[];
    conceptScheme: IConceptScheme;
    uri: string;
    label: string;
    type: string;
    notes: INote[];
    subordinateArrays: any[];
    matches: IMatches;
    narrower: any[];
    related: any[];
    broader: any[];
    sources: any[];
    constructor(apiConcept: IConcept);
}
