var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { inject, bindable } from 'aurelia-framework';
import { TreeChild } from './models/tree';
import { ApiService } from './services/api-service';
var OeThesaurusTree = /** @class */ (function () {
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
        return new TreeChild(children, node.concept_id, node.id, node.label, node.type);
    };
    OeThesaurusTree.prototype.attached = function () {
        var _this = this;
        if (!this.service) {
            this.service = new ApiService(this.baseUrl);
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
        bindable
    ], OeThesaurusTree.prototype, "nodes", void 0);
    __decorate([
        bindable
    ], OeThesaurusTree.prototype, "type", void 0);
    __decorate([
        bindable
    ], OeThesaurusTree.prototype, "baseUrl", void 0);
    OeThesaurusTree = __decorate([
        inject(Element)
    ], OeThesaurusTree);
    return OeThesaurusTree;
}());
export { OeThesaurusTree };
