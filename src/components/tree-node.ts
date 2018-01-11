import { bindable } from 'aurelia-framework';
import { TreeChild } from '../models/tree';

export class TreeNode {
  @bindable public current: TreeChild = null;
}
