export interface ITree extends Array<ITreeChild> {
}
export interface ITreeChild {
    children: ITreeChild[];
    concept_id: number;
    id: string;
    label: string;
    type: string;
}
export interface ICollection {
    id: number;
    labels: ILabel[];
    members: IMember[];
    member_of: IMember[];
    concept_scheme: IConceptScheme;
    uri: string;
    label: string;
    type: string;
    sources: any[];
    notes: INote[];
    superordinates: any[];
}
export interface IConcept {
    id: number;
    labels: ILabel[];
    member_of: IMember[];
    concept_scheme: IConceptScheme;
    uri: string;
    label: string;
    type: string;
    notes: INote[];
    subordinate_arrays: any[];
    matches: IMatches;
    narrower: any[];
    related: any[];
    broader: any[];
    sources: any[];
}
export interface ILabel {
    type: string;
    language: string;
    label: string;
}
export interface INote {
    type: string;
    language: string;
    note: string;
}
export interface IMember {
    label: string;
    type: string;
    id: number;
    uri: string;
}
export interface IConceptScheme {
    labels: ILabel[];
    uri: string;
}
export interface IMatches {
    close: any[];
    narrow: any[];
    exact: any[];
    related: any[];
    broad: any[];
}
