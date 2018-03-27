import { TaskQueue } from 'aurelia-framework';
import { Tree, TreeChild } from './models/tree';
import { Member } from './models/member';
import { ITreeChild } from './models/apiModel';
import { ApiService } from './services/api-service';
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
    standalone: boolean;
    service: ApiService;
    constructor(taskQueue: TaskQueue, element: Element);
    attached(): void;
    parseNode(node: ITreeChild): TreeChild;
    toggleTree(): void;
    calcPosition(): void;
    updateValue(id: number): void;
}
