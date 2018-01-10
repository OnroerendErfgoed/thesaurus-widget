var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TreeChild = (function () {
        function TreeChild(children, conceptId, id, label, type) {
            this.visible = false;
            this.expanded = false;
            this.children = children;
            this.conceptId = conceptId;
            this.id = id;
            this.label = label;
            this.type = type;
            this.visible = true;
            if (this.hasChildren()) {
                this.icon = 'fa fa-chevron-down';
                this.expanded = true;
            }
        }
        TreeChild.prototype.hasChildren = function () {
            return this.children.length > 0;
        };
        TreeChild.prototype.toggleNode = function () {
            for (var i = 0; i < this.children.length; i++) {
                this.children[i].visible = !this.children[i].visible;
            }
            this.expanded = !this.expanded;
            if (this.expanded === true) {
                this.icon = 'fa fa-chevron-down';
            }
            else {
                this.icon = 'fa fa-chevron-right';
            }
        };
        return TreeChild;
    }());
    exports.TreeChild = TreeChild;
    var Tree = (function (_super) {
        __extends(Tree, _super);
        function Tree() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Tree;
    }(Array));
    exports.Tree = Tree;
});
