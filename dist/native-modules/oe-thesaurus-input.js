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
import { inject, bindable, bindingMode, observable } from 'aurelia-framework';
import { Member } from './models/member';
import { ApiService } from './services/api-service';
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
            this.service = new ApiService(this.config.baseUrl);
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
                suggestions = suggestions.map(function (s) { return new Member(s.id, s.label, s.type, s.uri); });
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
        bindable,
        __metadata("design:type", Object)
    ], OeThesaurusInput.prototype, "config", void 0);
    __decorate([
        observable,
        __metadata("design:type", String)
    ], OeThesaurusInput.prototype, "inputValue", void 0);
    __decorate([
        bindable({ defaultBindingMode: bindingMode.twoWay }),
        __metadata("design:type", Member)
    ], OeThesaurusInput.prototype, "value", void 0);
    __decorate([
        bindable,
        __metadata("design:type", Number)
    ], OeThesaurusInput.prototype, "delay", void 0);
    __decorate([
        bindable,
        __metadata("design:type", Boolean)
    ], OeThesaurusInput.prototype, "disabled", void 0);
    __decorate([
        bindable,
        __metadata("design:type", ApiService)
    ], OeThesaurusInput.prototype, "service", void 0);
    OeThesaurusInput = __decorate([
        inject(Element),
        __metadata("design:paramtypes", [Element])
    ], OeThesaurusInput);
    return OeThesaurusInput;
}());
export { OeThesaurusInput };

//# sourceMappingURL=oe-thesaurus-input.js.map
