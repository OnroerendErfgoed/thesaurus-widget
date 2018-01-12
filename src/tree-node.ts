import { bindable } from 'aurelia-framework';
import { TreeChild } from './models/tree';

export class TreeNode {
  @bindable public current: TreeChild = null;
  @bindable public value: any;

  public valueChanged(nv, ov) {
    alert(nv + ', ' + ov + ' node');
  }
}
