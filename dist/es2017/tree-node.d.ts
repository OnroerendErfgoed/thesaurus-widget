import { TreeChild } from './models/tree';
export declare class TreeNode {
    current: TreeChild;
    value: any;
    valueChanged(nv: any, ov: any): void;
}
