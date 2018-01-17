export { OeThesaurusComponent } from './oe-thesaurus-component';
export { OeThesaurusInput } from './oe-thesaurus-input';
export { OeThesaurusTree } from './oe-thesaurus-tree';
export { TreeNode } from './tree-node';

import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./oe-thesaurus-component'),
    PLATFORM.moduleName('./oe-thesaurus-input'),
    PLATFORM.moduleName('./oe-thesaurus-tree')
  ]);
}
