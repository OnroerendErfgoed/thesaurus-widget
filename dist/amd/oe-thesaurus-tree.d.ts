import { TaskQueue } from 'aurelia-framework';
import { Tree, TreeChild } from './models/tree';
import { ITreeChild } from './models/apiModel';
export declare class OeThesaurusTree {
    private taskQueue;
    private element;
    nodes: Tree;
    type: string;
    baseUrl: string;
    value: any;
    treeVisible: boolean;
    context: any;
    position: string;
    private service;
    constructor(taskQueue: TaskQueue, element: Element);
    attached(): void;
    parseNode(node: ITreeChild): TreeChild;
    toggleTree(): void;
    calcPosition(): void;
    updateValue(id: number): void;
}
