System.register(["./oe-thesaurus-input", "./oe-thesaurus-tree", "./tree-node", "aurelia-framework"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function configure(config) {
        config.globalResources([
            aurelia_framework_1.PLATFORM.moduleName('./oe-thesaurus-input'),
            aurelia_framework_1.PLATFORM.moduleName('./oe-thesaurus-tree')
        ]);
    }
    exports_1("configure", configure);
    var aurelia_framework_1;
    return {
        setters: [
            function (oe_thesaurus_input_1_1) {
                exports_1({
                    "OeThesaurusInput": oe_thesaurus_input_1_1["OeThesaurusInput"]
                });
            },
            function (oe_thesaurus_tree_1_1) {
                exports_1({
                    "OeThesaurusTree": oe_thesaurus_tree_1_1["OeThesaurusTree"]
                });
            },
            function (tree_node_1_1) {
                exports_1({
                    "TreeNode": tree_node_1_1["TreeNode"]
                });
            },
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            }
        ],
        execute: function () {
        }
    };
});
