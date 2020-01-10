"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var oe_thesaurus_component_1 = require("./oe-thesaurus-component");
exports.OeThesaurusComponent = oe_thesaurus_component_1.OeThesaurusComponent;
var oe_thesaurus_input_1 = require("./oe-thesaurus-input");
exports.OeThesaurusInput = oe_thesaurus_input_1.OeThesaurusInput;
var oe_thesaurus_tree_1 = require("./oe-thesaurus-tree");
exports.OeThesaurusTree = oe_thesaurus_tree_1.OeThesaurusTree;
var tree_node_1 = require("./tree-node");
exports.TreeNode = tree_node_1.TreeNode;
var aurelia_framework_1 = require("aurelia-framework");
function configure(config) {
    config.globalResources([
        aurelia_framework_1.PLATFORM.moduleName('./oe-thesaurus-component'),
        aurelia_framework_1.PLATFORM.moduleName('./oe-thesaurus-input'),
        aurelia_framework_1.PLATFORM.moduleName('./oe-thesaurus-tree')
    ]);
}
exports.configure = configure;

//# sourceMappingURL=index.js.map
