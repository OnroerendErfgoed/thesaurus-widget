var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { inject, bindable, bindingMode } from 'aurelia-framework';
import { Tree, TreeChild } from './models/tree';
import { ApiService } from './services/api-service';
let OeThesaurusTree = class OeThesaurusTree {
    constructor(element) {
        this.nodes = [];
        this.baseUrl = '';
        this.treeVisible = false;
        this.element = null;
        this.context = this;
        this.element = element;
    }
    attached() {
        if (!this.service) {
            this.service = new ApiService(this.baseUrl);
        }
    }
    parseNode(node) {
        let children = [];
        if (node.children.length > 0) {
            children = node.children.map(n => {
                return this.parseNode(n);
            });
        }
        return new TreeChild(children, node.concept_id, node.id, node.label, node.type);
    }
    toggleTree() {
        if (this.nodes.length === 0) {
            this.service.getTree(this.type).then((data) => {
                if (data) {
                    this.nodes = data.map(d => {
                        return this.parseNode(d);
                    });
                    this.calcPosition();
                }
            });
        }
        else {
            this.calcPosition();
        }
        this.treeVisible = !this.treeVisible;
    }
    calcPosition() {
        const popupHeight = this.element.querySelector('.popup').offsetHeight;
        const buttonBounds = this.element.querySelector('button').getBoundingClientRect();
        if (buttonBounds.top >= popupHeight) {
            this.position = `top: ${buttonBounds.height}px`;
        }
        else {
            this.position = `bottom: ${buttonBounds.height}px`;
        }
    }
    updateValue(value) {
        this.value = value;
    }
};
__decorate([
    bindable,
    __metadata("design:type", Tree)
], OeThesaurusTree.prototype, "nodes", void 0);
__decorate([
    bindable,
    __metadata("design:type", String)
], OeThesaurusTree.prototype, "type", void 0);
__decorate([
    bindable,
    __metadata("design:type", String)
], OeThesaurusTree.prototype, "baseUrl", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.twoWay }),
    __metadata("design:type", Object)
], OeThesaurusTree.prototype, "value", void 0);
OeThesaurusTree = __decorate([
    inject(Element),
    __metadata("design:paramtypes", [Element])
], OeThesaurusTree);
export { OeThesaurusTree };
