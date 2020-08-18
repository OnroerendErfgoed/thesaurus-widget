var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TreeChild = (function () {
    function TreeChild(children, conceptId, id, label, type) {
        this.visible = true;
        this.expanded = true;
        this.children = children;
        this.conceptId = conceptId;
        this.id = id;
        this.label = label;
        this.type = type;
        if (this.hasChildren()) {
            this.toggleNode();
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
    };
    return TreeChild;
}());
export { TreeChild };
var Tree = (function (_super) {
    __extends(Tree, _super);
    function Tree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Tree;
}(Array));
export { Tree };

//# sourceMappingURL=tree.js.map
