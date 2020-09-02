import { PLATFORM } from 'aurelia-framework';
export * from './exports';
export function configure(config) {
    config.globalResources([
        PLATFORM.moduleName('./oe-thesaurus-component'),
        PLATFORM.moduleName('./oe-thesaurus-input'),
        PLATFORM.moduleName('./oe-thesaurus-tree')
    ]);
}

//# sourceMappingURL=index.js.map
