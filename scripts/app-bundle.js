define('text!__dot_dot__/src/assets/styles/oe-thesaurus-component.css',[],function(){return "oe-thesaurus-input {\n  display: inline-block;\n  width: 100%; }\n  oe-thesaurus-input .suggestions {\n    list-style-type: none;\n    cursor: default;\n    padding: 0;\n    margin: 0;\n    border: 1px solid #ccc;\n    background: #fff;\n    box-shadow: -1px 1px 3px rgba(0, 0, 0, 0.1);\n    position: absolute;\n    z-index: 9999;\n    max-height: 15rem;\n    overflow: hidden;\n    overflow-y: auto;\n    box-sizing: border-box; }\n  oe-thesaurus-input .suggestion {\n    padding: 0 .3rem;\n    line-height: 1.5rem;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    color: #333; }\n  oe-thesaurus-input .suggestion:hover,\n  oe-thesaurus-input .suggestion.selected {\n    background: #2da3ce;\n    color: #FFF; }\n\noe-thesaurus-tree {\n  display: inline-block;\n  position: relative;\n  width: 100%; }\n  oe-thesaurus-tree button {\n    margin: 0;\n    padding: 0;\n    background: transparent;\n    border: none !important; }\n    oe-thesaurus-tree button:hover, oe-thesaurus-tree button:focus {\n      background: transparent;\n      outline: none; }\n    oe-thesaurus-tree button .fa.fa-bars {\n      color: #4d4d4d; }\n    oe-thesaurus-tree button .fa.fa-caret-down {\n      color: #753f7f; }\n  oe-thesaurus-tree .popup {\n    position: absolute;\n    z-index: 10;\n    background: white;\n    border: 1px solid #bfd6eb;\n    outline: none;\n    padding: 10px;\n    white-space: nowrap;\n    max-height: 300px;\n    min-width: 100%;\n    overflow-y: auto; }\n    oe-thesaurus-tree .popup tree-node {\n      display: inline-flex; }\n    oe-thesaurus-tree .popup .fa-plus-square,\n    oe-thesaurus-tree .popup .fa-minus-square {\n      font-size: 12px; }\n    oe-thesaurus-tree .popup .option {\n      cursor: pointer;\n      display: inline-block;\n      vertical-align: middle; }\n    oe-thesaurus-tree .popup ul {\n      margin: 0;\n      list-style-type: none; }\n      oe-thesaurus-tree .popup ul ul li {\n        padding-left: 7px;\n        border-left: 1px dotted #BBB; }\n        oe-thesaurus-tree .popup ul ul li:before {\n          position: relative;\n          top: -0.3em;\n          height: 1em;\n          width: 12px;\n          color: white;\n          border-bottom: 1px dotted #BBB;\n          content: \"\";\n          display: inline-block;\n          left: -7px; }\n        oe-thesaurus-tree .popup ul ul li:last-child {\n          border-left: none; }\n          oe-thesaurus-tree .popup ul ul li:last-child:before {\n            border-left: 1px dotted #BBB; }\n\noe-thesaurus-component oe-thesaurus-input {\n  padding-right: 0.9375rem !important; }\n\n.placeholder-container oe-thesaurus-component {\n  width: 100%; }\n  .placeholder-container oe-thesaurus-component .placeholder-container {\n    margin: 0;\n    border: none; }\n  .placeholder-container oe-thesaurus-component oe-thesaurus-input {\n    padding-right: 0 !important; }\n  .placeholder-container oe-thesaurus-component oe-thesaurus-tree {\n    border-left: 1px solid #d5d5d5; }\n";});;
define('text!__dot_dot__/src/assets/styles/oe-thesaurus-input.css',[],function(){return "oe-thesaurus-input {\n  display: inline-block;\n  width: 100%; }\n  oe-thesaurus-input .suggestions {\n    list-style-type: none;\n    cursor: default;\n    padding: 0;\n    margin: 0;\n    border: 1px solid #ccc;\n    background: #fff;\n    box-shadow: -1px 1px 3px rgba(0, 0, 0, 0.1);\n    position: absolute;\n    z-index: 9999;\n    max-height: 15rem;\n    overflow: hidden;\n    overflow-y: auto;\n    box-sizing: border-box; }\n  oe-thesaurus-input .suggestion {\n    padding: 0 .3rem;\n    line-height: 1.5rem;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    color: #333; }\n  oe-thesaurus-input .suggestion:hover,\n  oe-thesaurus-input .suggestion.selected {\n    background: #2da3ce;\n    color: #FFF; }\n";});;
define('text!__dot_dot__/src/assets/styles/oe-thesaurus-tree.css',[],function(){return "oe-thesaurus-tree {\n  display: inline-block;\n  position: relative;\n  width: 100%; }\n  oe-thesaurus-tree button {\n    margin: 0;\n    padding: 0;\n    background: transparent;\n    border: none !important; }\n    oe-thesaurus-tree button:hover, oe-thesaurus-tree button:focus {\n      background: transparent;\n      outline: none; }\n    oe-thesaurus-tree button .fa.fa-bars {\n      color: #4d4d4d; }\n    oe-thesaurus-tree button .fa.fa-caret-down {\n      color: #753f7f; }\n  oe-thesaurus-tree .popup {\n    position: absolute;\n    z-index: 10;\n    background: white;\n    border: 1px solid #bfd6eb;\n    outline: none;\n    padding: 10px;\n    white-space: nowrap;\n    max-height: 300px;\n    min-width: 100%;\n    overflow-y: auto; }\n    oe-thesaurus-tree .popup tree-node {\n      display: inline-flex; }\n    oe-thesaurus-tree .popup .fa-plus-square,\n    oe-thesaurus-tree .popup .fa-minus-square {\n      font-size: 12px; }\n    oe-thesaurus-tree .popup .option {\n      cursor: pointer;\n      display: inline-block;\n      vertical-align: middle; }\n    oe-thesaurus-tree .popup ul {\n      margin: 0;\n      list-style-type: none; }\n      oe-thesaurus-tree .popup ul ul li {\n        padding-left: 7px;\n        border-left: 1px dotted #BBB; }\n        oe-thesaurus-tree .popup ul ul li:before {\n          position: relative;\n          top: -0.3em;\n          height: 1em;\n          width: 12px;\n          color: white;\n          border-bottom: 1px dotted #BBB;\n          content: \"\";\n          display: inline-block;\n          left: -7px; }\n        oe-thesaurus-tree .popup ul ul li:last-child {\n          border-left: none; }\n          oe-thesaurus-tree .popup ul ul li:last-child:before {\n            border-left: 1px dotted #BBB; }\n";});;
define('__dot_dot__/src/exports',["require", "exports", "./oe-thesaurus-component", "./oe-thesaurus-input", "./oe-thesaurus-tree", "./tree-node"], function (require, exports, oe_thesaurus_component_1, oe_thesaurus_input_1, oe_thesaurus_tree_1, tree_node_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Object.defineProperty(exports, "OeThesaurusComponent", { enumerable: true, get: function () { return oe_thesaurus_component_1.OeThesaurusComponent; } });
    Object.defineProperty(exports, "OeThesaurusInput", { enumerable: true, get: function () { return oe_thesaurus_input_1.OeThesaurusInput; } });
    Object.defineProperty(exports, "OeThesaurusTree", { enumerable: true, get: function () { return oe_thesaurus_tree_1.OeThesaurusTree; } });
    Object.defineProperty(exports, "TreeNode", { enumerable: true, get: function () { return tree_node_1.TreeNode; } });
});
;
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
define('__dot_dot__/src/index',["require", "exports", "aurelia-framework", "./exports"], function (require, exports, aurelia_framework_1, exports_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.configure = void 0;
    __exportStar(exports_1, exports);
    function configure(config) {
        config.globalResources([
            aurelia_framework_1.PLATFORM.moduleName('./oe-thesaurus-component'),
            aurelia_framework_1.PLATFORM.moduleName('./oe-thesaurus-input'),
            aurelia_framework_1.PLATFORM.moduleName('./oe-thesaurus-tree')
        ]);
    }
    exports.configure = configure;
});
;
define('__dot_dot__/src/models/apiModel',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
;
define('__dot_dot__/src/models/collection',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Collection = void 0;
    var Collection = (function () {
        function Collection(apiCollection) {
            this.id = apiCollection.id;
            this.labels = apiCollection.labels;
            this.members = apiCollection.members;
            this.memberOf = apiCollection.member_of;
            this.conceptScheme = apiCollection.concept_scheme;
            this.uri = apiCollection.uri;
            this.label = apiCollection.label;
            this.type = apiCollection.type;
            this.sources = apiCollection.sources;
            this.notes = apiCollection.notes;
            this.superordinates = apiCollection.superordinates;
        }
        return Collection;
    }());
    exports.Collection = Collection;
});
;
define('__dot_dot__/src/models/concept',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Concept = void 0;
    var Concept = (function () {
        function Concept(apiConcept) {
            this.id = apiConcept.id;
            this.labels = apiConcept.labels;
            this.memberOf = apiConcept.member_of;
            this.conceptScheme = apiConcept.concept_scheme;
            this.uri = apiConcept.uri;
            this.label = apiConcept.label;
            this.type = apiConcept.type;
            this.notes = apiConcept.notes;
            this.subordinateArrays = apiConcept.subordinate_arrays;
            this.matches = apiConcept.matches;
            this.narrower = apiConcept.narrower;
            this.related = apiConcept.related;
            this.broader = apiConcept.broader;
            this.sources = apiConcept.sources;
        }
        return Concept;
    }());
    exports.Concept = Concept;
});
;
define('__dot_dot__/src/models/member',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Member = void 0;
    var Member = (function () {
        function Member(id, label, type, uri) {
            this.id = id;
            this.label = label;
            this.type = type;
            this.uri = uri;
        }
        return Member;
    }());
    exports.Member = Member;
});
;
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
define('__dot_dot__/src/models/tree',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Tree = exports.TreeChild = void 0;
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
;
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('__dot_dot__/src/oe-thesaurus-component',["require", "exports", "aurelia-framework", "./services/api-service"], function (require, exports, aurelia_framework_1, api_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OeThesaurusComponent = void 0;
    var OeThesaurusComponent = (function () {
        function OeThesaurusComponent(element) {
            this.element = element;
            this.element = element;
        }
        OeThesaurusComponent.prototype.bind = function () {
            if (!this.service) {
                this.service = new api_service_1.ApiService(this.config.baseUrl);
            }
        };
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], OeThesaurusComponent.prototype, "config", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], OeThesaurusComponent.prototype, "value", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Boolean)
        ], OeThesaurusComponent.prototype, "disabled", void 0);
        OeThesaurusComponent = __decorate([
            aurelia_framework_1.inject(Element),
            __metadata("design:paramtypes", [Element])
        ], OeThesaurusComponent);
        return OeThesaurusComponent;
    }());
    exports.OeThesaurusComponent = OeThesaurusComponent;
});
;
define('text!__dot_dot__/src/oe-thesaurus-component.html',[],function(){return "<template>\n  <require from=\"./oe-thesaurus-input\"></require>\n  <require from=\"./oe-thesaurus-tree\"></require>\n  \n  <div class=\"row collapse\">\n      <oe-thesaurus-input class=\"small-10 columns\" value.bind=\"value\" config.bind=\"config\" service.bind=\"service\" disabled.bind=\"disabled\">\n        <template replace-part=\"suggestion\">${suggestion.label}</template>\n      </oe-thesaurus-input>\n      <oe-thesaurus-tree class=\"small-2 columns\" value.bind=\"value\" config.bind=\"config\" service.bind=\"service\" disabled.bind=\"disabled\"></oe-thesaurus-tree>\n    </div>\n</template>\n";});;
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
define('__dot_dot__/src/oe-thesaurus-input',["require", "exports", "aurelia-framework", "./models/member", "./services/api-service"], function (require, exports, aurelia_framework_1, member_1, api_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OeThesaurusInput = void 0;
    var OeThesaurusInput = (function () {
        function OeThesaurusInput(element) {
            this.element = element;
            this.inputValue = '';
            this.delay = 300;
            this.expanded = false;
            this.updatingInput = false;
            this.suggestions = [];
            this.index = -1;
            this.suggestionsUL = null;
            this.userInput = '';
            this.element = element;
        }
        OeThesaurusInput.prototype.bind = function () {
            this.setConfigDefaults();
            if (this.config.standalone) {
                this.service = new api_service_1.ApiService(this.config.baseUrl);
            }
        };
        OeThesaurusInput.prototype.display = function (name) {
            this.updatingInput = true;
            this.inputValue = name;
            this.updatingInput = false;
        };
        OeThesaurusInput.prototype.getName = function (suggestion) {
            if (suggestion == null) {
                return '';
            }
            return suggestion['label'];
        };
        OeThesaurusInput.prototype.collapse = function () {
            this.expanded = false;
            this.index = -1;
        };
        OeThesaurusInput.prototype.select = function (suggestion) {
            this.value = suggestion;
            var name = this.getName(this.value);
            this.userInput = name;
            this.display(name);
            this.collapse();
        };
        OeThesaurusInput.prototype.valueChanged = function (value) {
            this.select(value);
        };
        OeThesaurusInput.prototype.inputValueChanged = function (value) {
            var _this = this;
            if (this.updatingInput) {
                return;
            }
            this.userInput = value;
            if (value === '') {
                this.value = null;
                this.collapse();
                return;
            }
            if (this.config.minlength > value.length) {
                return;
            }
            this.service.getConcepts(this.config.type, { language: this.config.language || '', ctype: 'concept', label: value })
                .then(function (suggestions) {
                var _a;
                if (suggestions) {
                    _this.index = -1;
                    suggestions = suggestions.map(function (s) { return new member_1.Member(s.id, s.label, s.type, s.uri); });
                    (_a = _this.suggestions).splice.apply(_a, __spreadArrays([0, _this.suggestions.length], suggestions));
                    if (suggestions.length === 0) {
                        _this.collapse();
                    }
                    else {
                        _this.expanded = true;
                    }
                }
            });
        };
        OeThesaurusInput.prototype.scroll = function () {
            var ul = this.suggestionsUL;
            var li = ul.children.item(this.index === -1 ? 0 : this.index);
            if (li.offsetTop + li.offsetHeight > ul.offsetHeight) {
                ul.scrollTop += li.offsetHeight;
            }
            else if (li.offsetTop < ul.scrollTop) {
                ul.scrollTop = li.offsetTop;
            }
        };
        OeThesaurusInput.prototype.keydown = function (key) {
            if (!this.expanded) {
                return true;
            }
            if (key === 40) {
                if (this.index < this.suggestions.length - 1) {
                    this.index++;
                    this.display(this.getName(this.suggestions[this.index]));
                }
                else {
                    this.index = -1;
                    this.display(this.userInput);
                }
                this.scroll();
                return;
            }
            if (key === 38) {
                if (this.index === -1) {
                    this.index = this.suggestions.length - 1;
                    this.display(this.getName(this.suggestions[this.index]));
                }
                else if (this.index > 0) {
                    this.index--;
                    this.display(this.getName(this.suggestions[this.index]));
                }
                else {
                    this.index = -1;
                    this.display(this.userInput);
                }
                this.scroll();
                return;
            }
            if (key === 27) {
                this.display(this.userInput);
                this.collapse();
                return;
            }
            if (key === 13) {
                if (this.index >= 0) {
                    this.select(this.suggestions[this.index]);
                }
                return;
            }
            return true;
        };
        OeThesaurusInput.prototype.blur = function () {
            this.select(this.value);
            var event = new CustomEvent('blur');
            this.element.dispatchEvent(event);
        };
        OeThesaurusInput.prototype.suggestionClicked = function (suggestion) {
            this.select(suggestion);
        };
        OeThesaurusInput.prototype.focus = function () {
            this.element.firstElementChild.focus();
        };
        OeThesaurusInput.prototype.disabledChanged = function (newValue, oldValue) {
            this.inputValue = '';
        };
        OeThesaurusInput.prototype.setConfigDefaults = function () {
            this.config.standalone = typeof this.config.standalone === 'undefined' ? true : this.config.standalone;
        };
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], OeThesaurusInput.prototype, "config", void 0);
        __decorate([
            aurelia_framework_1.observable,
            __metadata("design:type", String)
        ], OeThesaurusInput.prototype, "inputValue", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", member_1.Member)
        ], OeThesaurusInput.prototype, "value", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Number)
        ], OeThesaurusInput.prototype, "delay", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Boolean)
        ], OeThesaurusInput.prototype, "disabled", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", api_service_1.ApiService)
        ], OeThesaurusInput.prototype, "service", void 0);
        OeThesaurusInput = __decorate([
            aurelia_framework_1.inject(Element),
            __metadata("design:paramtypes", [Element])
        ], OeThesaurusInput);
        return OeThesaurusInput;
    }());
    exports.OeThesaurusInput = OeThesaurusInput;
});
;
define('text!__dot_dot__/src/oe-thesaurus-input.html',[],function(){return "<template>\n  <div class=\"placeholder-container ${disabled ? 'placeholder-disabled' : ''}\">\n    <input type=\"text\" autocomplete=\"off\"\n         aria-autocomplete=\"list\"\n         aria-expanded.bind=\"expanded\"\n         placeholder.bind=\"config.placeholder\"\n         value.bind=\"inputValue & debounce:delay\"\n         keydown.delegate=\"keydown($event.which)\"\n         blur.trigger=\"blur()\"\n         disabled.bind=\"disabled\"\n         >\n    <ul class=\"suggestions\" role=\"listbox\"\n        if.bind=\"expanded\"\n        ref=\"suggestionsUL\">\n      <li repeat.for=\"suggestion of suggestions\"\n          role=\"option\"\n          class-name.bind=\"($index === index ? 'selected' : '') + ' suggestion'\"\n          mousedown.delegate=\"suggestionClicked(suggestion)\">\n        <template replaceable part=\"suggestion\">\n          ${suggestion}\n        </template>\n      </li>\n    </ul>\n  </div>\n</template>\n";});;
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('__dot_dot__/src/oe-thesaurus-tree',["require", "exports", "aurelia-framework", "./models/tree", "./models/member", "./services/api-service"], function (require, exports, aurelia_framework_1, tree_1, member_1, api_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OeThesaurusTree = void 0;
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
                    var label = null;
                    if (_this.config.language) {
                        label = data.labels.filter(function (label) { return label.language === 'la'; });
                    }
                    else {
                        label = data.label;
                    }
                    _this.value = new member_1.Member(data.id, label, data.type, data.uri);
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
});
;
define('text!__dot_dot__/src/oe-thesaurus-tree.html',[],function(){return "<template>\n  <require from=\"./tree-node\"></require>\n  \n  <div class=\"placeholder-container ${disabled ? 'placeholder-disabled' : ''}\">\n    <button type=\"button\" class=\"postfix\" click.delegate=\"!disabled ? toggleTree() : null\">\n      <span class=\"fa fa-bars\"></span>&nbsp;<span class=\"fa fa-caret-down\"></span>\n    </button>\n  </div>\n  <div class=\"popup\" tabindex=\"0\" show.bind=\"treeVisible\" blur.trigger=\"treeVisible=false\" css=\"${position}\">\n    <span if.bind=\"nodes.length === 0\" class=\"fa fa-spinner fa-pulse\"></span>\n    <ul if.bind=\"nodes.length > 0\">\n      <li repeat.for=\"node of nodes\">\n        <tree-node parent.bind=\"context\" current.bind=\"node\"></tree-node>\n      </li>\n    </ul>\n  </div>\n</template>";});;
define('__dot_dot__/src/services/api-service',["require", "exports", "aurelia-http-client"], function (require, exports, aurelia_http_client_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ApiService = void 0;
    var ApiService = (function () {
        function ApiService(base, http) {
            this.http = http || new aurelia_http_client_1.HttpClient();
            this.http.configure(function (x) {
                x.withBaseUrl(base.replace(/\/?$/, '/') + "conceptschemes/");
                x.withHeader('Accept', 'application/json');
                x.withInterceptor({
                    responseError: function (res) {
                        console.debug(res.response);
                        return res;
                    }
                });
            });
        }
        ApiService.prototype.getConcepts = function (type, params) {
            return this.http.createRequest(type + "/c")
                .asGet()
                .withParams(params)
                .send()
                .then(function (response) {
                if (response.isSuccess) {
                    return response.content;
                }
                else {
                    return;
                }
            });
        };
        ApiService.prototype.getConceptById = function (type, id) {
            return this.http.createRequest(type + "/c/" + id)
                .asGet()
                .send()
                .then(function (response) {
                if (response.isSuccess) {
                    return response.content;
                }
                else {
                    return;
                }
            });
        };
        ApiService.prototype.getTree = function (type, language) {
            return this.http.get(type + "/tree" + (language ? '?language=' + language : '')).then(function (response) {
                if (response.isSuccess) {
                    return response.content;
                }
                else {
                    return;
                }
            });
        };
        return ApiService;
    }());
    exports.ApiService = ApiService;
});
;
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('__dot_dot__/src/tree-node',["require", "exports", "aurelia-framework", "./models/tree"], function (require, exports, aurelia_framework_1, tree_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TreeNode = void 0;
    var TreeNode = (function () {
        function TreeNode() {
            this.current = null;
        }
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", tree_1.TreeChild)
        ], TreeNode.prototype, "current", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], TreeNode.prototype, "parent", void 0);
        return TreeNode;
    }());
    exports.TreeNode = TreeNode;
});
;
define('text!__dot_dot__/src/tree-node.html',[],function(){return "<template>\n  <div show.bind=\"current.visible\">\n    <span if.bind=\"current.hasChildren()\" click.trigger=\"current.toggleNode()\" class=\"fa ${current.expanded ? 'fa-minus-square' : 'fa-plus-square'}\"></span>\n    <div class=\"option\" click.delegate=\"parent.updateValue(current.conceptId)\">\n      <span if.bind=\"!current.hasChildren()\" class=\"fa fa-file-text-o\"></span>\n      <span if.bind=\"current.hasChildren()\" class=\"fa ${current.expanded ? 'fa-folder-open-o' : 'fa-folder-o'}\"></span>\n      ${current.label}\n    </div>\n\n    <ul show.bind=\"current.expanded\">\n      <li repeat.for=\"node of current.children\">\n        <tree-node parent.bind=\"parent\" current.bind=\"node\"></tree-node>\n      </li>\n    </ul>\n  </div>\n</template>";});;
define('app',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.App = void 0;
    var App = (function () {
        function App() {
            this.message = 'from Aurelia!';
        }
        App.prototype.clicked = function () {
            alert('A primary button click or a touch');
        };
        return App;
    }());
    exports.App = App;
});
;
define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});
;
define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.configure = void 0;
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        aurelia.use.developmentLogging(environment_1.default.debug ? 'debug' : 'warn');
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=app-bundle.js.map