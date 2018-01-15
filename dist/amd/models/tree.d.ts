export declare class TreeChild {
    children: TreeChild[];
    conceptId: number;
    id: string;
    label: string;
    type: string;
    visible: boolean;
    expanded: boolean;
    constructor(children: TreeChild[], conceptId: number, id: string, label: string, type: string);
    hasChildren(): boolean;
    toggleNode(): void;
}
export declare class Tree extends Array<TreeChild> {
}
