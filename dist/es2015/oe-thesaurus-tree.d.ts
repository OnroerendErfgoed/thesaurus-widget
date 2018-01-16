import { Tree, TreeChild } from './models/tree';
import { ITreeChild } from './models/apiModel';
export declare class OeThesaurusTree {
    nodes: Tree;
    type: string;
    baseUrl: string;
    value: any;
    treeVisible: boolean;
    element: Element;
    context: any;
    position: string;
    private service;
    constructor(element: Element);
    attached(): void;
    parseNode(node: ITreeChild): TreeChild;
    toggleTree(): void;
    calcPosition(): void;
    updateValue(value: any): void;
}
