export { OeThesaurusComponent } from './oe-thesaurus-component';
export { OeThesaurusInput } from './oe-thesaurus-input';
export { OeThesaurusTree } from './oe-thesaurus-tree';
export { TreeNode } from './tree-node';
import { PLATFORM } from 'aurelia-framework';
export function configure(config) {
    config.globalResources([
        PLATFORM.moduleName('./oe-thesaurus-component'),
        PLATFORM.moduleName('./oe-thesaurus-input'),
        PLATFORM.moduleName('./oe-thesaurus-tree')
    ]);
}

//# sourceMappingURL=index.js.map
