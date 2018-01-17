import { TaskQueue } from 'aurelia-framework';
import { Tree, TreeChild } from './models/tree';
import { Member } from './models/member';
import { ITreeChild } from './models/apiModel';
export declare class OeThesaurusTree {
    private taskQueue;
    private element;
    nodes: Tree;
    type: string;
    baseUrl: string;
    value: Member;
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
