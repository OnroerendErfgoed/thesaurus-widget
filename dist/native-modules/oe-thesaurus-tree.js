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
import { ApiService } from './services/api-service';
var OeThesaurusTree = (function () {
    function OeThesaurusTree(taskQueue, element) {
        this.taskQueue = taskQueue;
        this.element = element;
        this.nodes = [];
        this.baseUrl = '';
        this.treeVisible = false;
        this.context = this;
        this.element = element;
    }
    OeThesaurusTree.prototype.attached = function () {
        if (!this.service) {
            this.service = new ApiService(this.baseUrl);
        }
    };
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
        if (!this.treeVisible) {
            this.calcPosition();
        }
        this.treeVisible = !this.treeVisible;
        this.taskQueue.queueMicroTask(function () {
            _this.element.querySelector('.popup').focus();
        });
    };
    OeThesaurusTree.prototype.calcPosition = function () {
        var buttonBounds = this.element.querySelector('button').getBoundingClientRect();
        if (buttonBounds.top >= 300) {
            this.position = "bottom: " + buttonBounds.height + "px";
        }
        else {
            this.position = "top: " + buttonBounds.height + "px";
        }
    };
    OeThesaurusTree.prototype.updateValue = function (value) {
        this.value = value;
        this.treeVisible = false;
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
        inject(TaskQueue, Element),
        __metadata("design:paramtypes", [TaskQueue, Element])
    ], OeThesaurusTree);
    return OeThesaurusTree;
}());
export { OeThesaurusTree };
