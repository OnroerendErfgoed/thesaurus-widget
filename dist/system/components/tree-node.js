System.register(["aurelia-framework", "../models/tree"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_framework_1, tree_1, TreeNode;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (tree_1_1) {
                tree_1 = tree_1_1;
            }
        ],
        execute: function () {
            TreeNode = (function () {
                function TreeNode() {
                    this.current = null;
                }
                __decorate([
                    aurelia_framework_1.bindable,
                    __metadata("design:type", tree_1.TreeChild)
                ], TreeNode.prototype, "current", void 0);
                return TreeNode;
            }());
            exports_1("TreeNode", TreeNode);
        }
    };
});
