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
var api_service_1 = require("./services/api-service");
var nextID = 0;
var OeThesaurusInput = (function () {
    function OeThesaurusInput(element) {
        this.inputValue = '';
        this.minlength = null;
        this.baseUrl = '';
        this.placeholder = '';
        this.delay = 300;
        this.label = 'name';
        this.expanded = false;
        this.updatingInput = false;
        this.suggestions = [];
        this.index = -1;
        this.suggestionsUL = null;
        this.userInput = '';
        this.element = null;
        this.element = element;
        this.id = nextID++;
    }
    OeThesaurusInput.prototype.attached = function () {
        if (!this.service) {
            this.service = new api_service_1.ApiService(this.baseUrl);
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
        return suggestion[this.label];
    };
    OeThesaurusInput.prototype.collapse = function () {
        this.expanded = false;
        this.index = -1;
    };
    OeThesaurusInput.prototype.select = function (suggestion) {
        if (suggestion) {
            this.value = suggestion;
            var name_1 = this.getName(this.value);
            this.userInput = name_1;
            this.display(name_1);
            this.collapse();
        }
    };
    OeThesaurusInput.prototype.valueChanged = function () {
        this.select(this.value);
    };
    OeThesaurusInput.prototype.inputValueChanged = function (value) {
        var _this = this;
        if (this.updatingInput || (this.minlength > value.length)) {
            return;
        }
        this.userInput = value;
        if (value === '') {
            this.value = null;
            this.collapse();
            return;
        }
        this.service.getConcepts(this.type, { label: value })
            .then(function (suggestions) {
            _this.index = -1;
            (_a = _this.suggestions).splice.apply(_a, [0, _this.suggestions.length].concat(suggestions));
            if (suggestions.length === 1) {
                _this.select(suggestions[0]);
            }
            else if (suggestions.length === 0) {
                _this.collapse();
            }
            else {
                _this.expanded = true;
            }
            var _a;
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
    __decorate([
        aurelia_framework_1.observable,
        __metadata("design:type", String)
    ], OeThesaurusInput.prototype, "inputValue", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], OeThesaurusInput.prototype, "type", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Number)
    ], OeThesaurusInput.prototype, "minlength", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], OeThesaurusInput.prototype, "baseUrl", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", String)
    ], OeThesaurusInput.prototype, "value", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], OeThesaurusInput.prototype, "placeholder", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Number)
    ], OeThesaurusInput.prototype, "delay", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], OeThesaurusInput.prototype, "label", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Boolean)
    ], OeThesaurusInput.prototype, "disabled", void 0);
    OeThesaurusInput = __decorate([
        aurelia_framework_1.inject(Element),
        __metadata("design:paramtypes", [Element])
    ], OeThesaurusInput);
    return OeThesaurusInput;
}());
exports.OeThesaurusInput = OeThesaurusInput;
