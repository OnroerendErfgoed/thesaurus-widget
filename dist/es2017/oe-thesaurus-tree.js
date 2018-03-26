var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { TaskQueue, inject, bindable, bindingMode } from 'aurelia-framework';
import { Tree, TreeChild } from './models/tree';
import { Member } from './models/member';
import { ApiService } from './services/api-service';
let OeThesaurusTree = class OeThesaurusTree {
    constructor(taskQueue, element) {
        this.taskQueue = taskQueue;
        this.element = element;
        this.nodes = [];
        this.baseUrl = '';
        this.treeVisible = false;
        this.context = this;
        this.standalone = true;
        this.element = element;
        this.taskQueue = taskQueue;
    }
    attached() {
        if (this.standalone) {
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
                }
            });
        }
        if (!this.treeVisible) {
            this.calcPosition();
        }
        this.treeVisible = !this.treeVisible;
        if (this.treeVisible) {
            this.taskQueue.queueMicroTask(() => {
                this.element.querySelector('.popup').focus();
            });
        }
    }
    calcPosition() {
        const elBounds = this.element.getBoundingClientRect();
        const buttonBounds = this.element.querySelector('button').getBoundingClientRect();
        if (buttonBounds.top >= 300) {
            this.position = `bottom: ${elBounds.height}px;`;
        }
        else {
            this.position = `top: ${buttonBounds.height}px;`;
        }
        if ((window.innerWidth - buttonBounds.right) < 200) {
            this.position += ` right: 0;`;
        }
    }
    updateValue(id) {
        this.service.getConceptById(this.type, id).then((data) => {
            if (data) {
                this.value = new Member(data.id, data.label, data.type, data.uri);
            }
        });
        this.treeVisible = false;
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
    __metadata("design:type", Member)
], OeThesaurusTree.prototype, "value", void 0);
__decorate([
    bindable,
    __metadata("design:type", Boolean)
], OeThesaurusTree.prototype, "standalone", void 0);
__decorate([
    bindable,
    __metadata("design:type", ApiService)
], OeThesaurusTree.prototype, "service", void 0);
OeThesaurusTree = __decorate([
    inject(TaskQueue, Element),
    __metadata("design:paramtypes", [TaskQueue, Element])
], OeThesaurusTree);
export { OeThesaurusTree };
