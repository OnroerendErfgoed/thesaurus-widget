System.register(["aurelia-framework", "./models/tree", "./services/api-service"], function (exports_1, context_1) {
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
    var aurelia_framework_1, tree_1, api_service_1, OeThesaurusTree;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (tree_1_1) {
                tree_1 = tree_1_1;
            },
            function (api_service_1_1) {
                api_service_1 = api_service_1_1;
            }
        ],
        execute: function () {
            OeThesaurusTree = (function () {
                function OeThesaurusTree(element) {
                    this.nodes = [];
                    this.baseUrl = '';
                    this.treeVisible = false;
                    this.element = null;
                    this.context = this;
                    this.element = element;
                }
                OeThesaurusTree.prototype.parseNode = function (node) {
                    var _this = this;
                    var children = [];
                    if (node.children.length > 0) {
                        children = node.children.map(function (n) {
                            return _this.parseNode(n);
                        });
                    }
                    return new tree_1.TreeChild(children, node.concept_id, node.id, node.label, node.type);
                };
                OeThesaurusTree.prototype.toggleTree = function () {
                    var _this = this;
                    if (this.nodes.length === 0) {
                        this.service.getTree(this.type).then(function (data) {
                            if (data) {
                                _this.nodes = data.map(function (d) {
                                    return _this.parseNode(d);
                                });
                            }
                        });
                    }
                    this.treeVisible = !this.treeVisible;
                };
                OeThesaurusTree.prototype.attached = function () {
                    if (!this.service) {
                        this.service = new api_service_1.ApiService(this.baseUrl);
                    }
                };
                OeThesaurusTree.prototype.updateValue = function (value) {
                    this.value = value;
                };
                __decorate([
                    aurelia_framework_1.bindable,
                    __metadata("design:type", tree_1.Tree)
                ], OeThesaurusTree.prototype, "nodes", void 0);
                __decorate([
                    aurelia_framework_1.bindable,
                    __metadata("design:type", String)
                ], OeThesaurusTree.prototype, "type", void 0);
                __decorate([
                    aurelia_framework_1.bindable,
                    __metadata("design:type", String)
                ], OeThesaurusTree.prototype, "baseUrl", void 0);
                __decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
                    __metadata("design:type", Object)
                ], OeThesaurusTree.prototype, "value", void 0);
                OeThesaurusTree = __decorate([
                    aurelia_framework_1.inject(Element),
                    __metadata("design:paramtypes", [Element])
                ], OeThesaurusTree);
                return OeThesaurusTree;
            }());
            exports_1("OeThesaurusTree", OeThesaurusTree);
        }
    };
});
