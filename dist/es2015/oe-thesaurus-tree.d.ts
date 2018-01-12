import { Tree, TreeChild } from './models/tree';
import { ITreeChild } from './models/apiModel';
export declare class OeThesaurusTree {
    nodes: Tree;
    type: string;
    baseUrl: string;
    value: any;
    treeVisible: boolean;
    element: Element;
    private service;
    constructor(element: Element);
    parseNode(node: ITreeChild): TreeChild;
    toggleTree(): void;
    attached(): void;
    valueChanged(nv: any, ov: any): void;
}
