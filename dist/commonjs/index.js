"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.configure = void 0;
var aurelia_framework_1 = require("aurelia-framework");
__exportStar(require("./exports"), exports);
function configure(config) {
    config.globalResources([
        aurelia_framework_1.PLATFORM.moduleName('./oe-thesaurus-component'),
        aurelia_framework_1.PLATFORM.moduleName('./oe-thesaurus-input'),
        aurelia_framework_1.PLATFORM.moduleName('./oe-thesaurus-tree')
    ]);
}
exports.configure = configure;

//# sourceMappingURL=index.js.map
