export { OeThesaurusInput } from './oe-thesaurus-input';
export { OeThesaurusTree } from './oe-thesaurus-tree';

import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./oe-thesaurus-input'),
    PLATFORM.moduleName('./oe-thesaurus-tree')
  ]);
}
