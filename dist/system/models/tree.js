System.register([], function (exports_1, context_1) {
    "use strict";
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
    var __moduleName = context_1 && context_1.id;
    var TreeChild, Tree;
    return {
        setters: [],
        execute: function () {
            TreeChild = /** @class */ (function () {
                function TreeChild(children, conceptId, id, label, type) {
                    this.children = children;
                    this.conceptId = conceptId;
                    this.id = id;
                    this.label = label;
                    this.type = type;
                }
                return TreeChild;
            }());
            exports_1("TreeChild", TreeChild);
            Tree = /** @class */ (function (_super) {
                __extends(Tree, _super);
                function Tree() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return Tree;
            }(Array));
            exports_1("Tree", Tree);
        }
    };
});
