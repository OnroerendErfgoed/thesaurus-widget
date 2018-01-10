var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "./models/tree", "./services/api-service"], function (require, exports, aurelia_framework_1, tree_1, api_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var OeThesaurusTree = (function () {
        function OeThesaurusTree() {
            this.nodes = [];
            this.baseUrl = '';
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
        OeThesaurusTree.prototype.attached = function () {
            var _this = this;
            if (!this.service) {
                this.service = new api_service_1.ApiService(this.baseUrl);
            }
            this.service.getTree(this.type).then(function (data) {
                if (data) {
                    _this.nodes = data.map(function (d) {
                        return _this.parseNode(d);
                    });
                }
            });
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
        OeThesaurusTree = __decorate([
            aurelia_framework_1.inject(Element)
        ], OeThesaurusTree);
        return OeThesaurusTree;
    }());
    exports.OeThesaurusTree = OeThesaurusTree;
});
