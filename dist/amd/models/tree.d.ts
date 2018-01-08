export declare class TreeChild {
    children: TreeChild[];
    conceptId: number;
    id: string;
    label: string;
    type: string;
    constructor(children: TreeChild[], conceptId: number, id: string, label: string, type: string);
}
export declare class Tree extends Array<TreeChild> {
}
