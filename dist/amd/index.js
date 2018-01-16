define(["require", "exports", "./oe-thesaurus-component", "./oe-thesaurus-input", "./oe-thesaurus-tree", "./tree-node", "aurelia-framework"], function (require, exports, oe_thesaurus_component_1, oe_thesaurus_input_1, oe_thesaurus_tree_1, tree_node_1, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OeThesaurusComponent = oe_thesaurus_component_1.OeThesaurusComponent;
    exports.OeThesaurusInput = oe_thesaurus_input_1.OeThesaurusInput;
    exports.OeThesaurusTree = oe_thesaurus_tree_1.OeThesaurusTree;
    exports.TreeNode = tree_node_1.TreeNode;
    function configure(config) {
        config.globalResources([
            aurelia_framework_1.PLATFORM.moduleName('./oe-thesaurus-component'),
            aurelia_framework_1.PLATFORM.moduleName('./oe-thesaurus-input'),
            aurelia_framework_1.PLATFORM.moduleName('./oe-thesaurus-tree')
        ]);
    }
    exports.configure = configure;
});
