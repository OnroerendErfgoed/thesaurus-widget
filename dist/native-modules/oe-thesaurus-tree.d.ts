import { TaskQueue } from 'aurelia-framework';
import { Tree, TreeChild } from './models/tree';
import { Member } from './models/member';
import { ITreeChild, IThesaurusConfig } from './models/apiModel';
import { ApiService } from './services/api-service';
export declare class OeThesaurusTree {
    private taskQueue;
    private element;
    config: IThesaurusConfig;
    nodes: Tree;
    value: Member;
    treeVisible: boolean;
    context: any;
    position: string;
    service: ApiService;
    disabled: boolean;
    constructor(taskQueue: TaskQueue, element: Element);
    bind(): void;
    parseNode(node: ITreeChild): TreeChild;
    toggleTree(): void;
    calcPosition(): void;
    updateValue(id: number): void;
    private setConfigDefaults;
}
