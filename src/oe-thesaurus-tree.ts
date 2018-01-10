import { bindable } from 'aurelia-framework';
import { NodeModel } from './components/node-model';

export class OeThesaurusTree {
  @bindable public nodes: NodeModel[];

  constructor() {
    
  }
}
