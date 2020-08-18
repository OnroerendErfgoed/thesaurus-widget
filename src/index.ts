export * from './exports';

import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./oe-thesaurus-component'),
    PLATFORM.moduleName('./oe-thesaurus-input'),
    PLATFORM.moduleName('./oe-thesaurus-tree')
  ]);
}
