import { Tree, TreeChild } from './models/tree';
import { ITreeChild } from './models/apiModel';
export declare class OeThesaurusTree {
    nodes: Tree;
    type: string;
    baseUrl: string;
    private service;
    parseNode(node: ITreeChild): TreeChild;
    attached(): void;
}
