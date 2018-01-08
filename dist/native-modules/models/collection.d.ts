import { ICollection, INote, IConceptScheme, ILabel, IMember } from './apiModel';
export declare class Collection {
    id: number;
    labels: ILabel[];
    members: IMember[];
    memberOf: IMember[];
    conceptScheme: IConceptScheme;
    uri: string;
    label: string;
    type: string;
    sources: any[];
    notes: INote[];
    superordinates: any[];
    constructor(apiCollection: ICollection);
}
