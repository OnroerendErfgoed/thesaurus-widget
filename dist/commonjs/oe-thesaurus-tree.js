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
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var tree_1 = require("./models/tree");
var member_1 = require("./models/member");
var api_service_1 = require("./services/api-service");
var OeThesaurusTree = (function () {
    function OeThesaurusTree(taskQueue, element) {
        this.taskQueue = taskQueue;
        this.element = element;
        this.nodes = [];
        this.treeVisible = false;
        this.context = this;
        this.element = element;
        this.taskQueue = taskQueue;
    }
    OeThesaurusTree.prototype.bind = function () {
        this.setConfigDefaults();
        if (this.config.standalone) {
            this.service = new api_service_1.ApiService(this.config.baseUrl);
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
        return new tree_1.TreeChild(children, node.concept_id, node.id, node.label, node.type);
    };
    OeThesaurusTree.prototype.toggleTree = function () {
        var _this = this;
        if (this.nodes.length === 0) {
            this.service.getTree(this.config.type, this.config.language).then(function (data) {
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
        if (this.treeVisible) {
            this.taskQueue.queueMicroTask(function () {
                _this.element.querySelector('.popup').focus();
            });
        }
    };
    OeThesaurusTree.prototype.calcPosition = function () {
        var elBounds = this.element.getBoundingClientRect();
        var buttonBounds = this.element.querySelector('button').getBoundingClientRect();
        if (buttonBounds.top >= 300) {
            this.position = "bottom: " + elBounds.height + "px;";
        }
        else {
            this.position = "top: " + buttonBounds.height + "px;";
        }
        if ((window.innerWidth - buttonBounds.right) < 200) {
            this.position += " right: 0;";
        }
    };
    OeThesaurusTree.prototype.updateValue = function (id) {
        var _this = this;
        this.service.getConceptById(this.config.type, id).then(function (data) {
            if (data) {
                _this.value = new member_1.Member(data.id, data.label, data.type, data.uri);
            }
        });
        this.treeVisible = false;
    };
    OeThesaurusTree.prototype.setConfigDefaults = function () {
        this.config.standalone = typeof this.config.standalone === 'undefined' ? true : this.config.standalone;
    };
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], OeThesaurusTree.prototype, "config", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", tree_1.Tree)
    ], OeThesaurusTree.prototype, "nodes", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", member_1.Member)
    ], OeThesaurusTree.prototype, "value", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", api_service_1.ApiService)
    ], OeThesaurusTree.prototype, "service", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Boolean)
    ], OeThesaurusTree.prototype, "disabled", void 0);
    OeThesaurusTree = __decorate([
        aurelia_framework_1.inject(aurelia_framework_1.TaskQueue, Element),
        __metadata("design:paramtypes", [aurelia_framework_1.TaskQueue, Element])
    ], OeThesaurusTree);
    return OeThesaurusTree;
}());
exports.OeThesaurusTree = OeThesaurusTree;

//# sourceMappingURL=oe-thesaurus-tree.js.map
