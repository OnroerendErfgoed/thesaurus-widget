var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { inject, bindable, bindingMode, observable } from 'aurelia-framework';
import { Member } from './models/member';
import { ApiService } from './services/api-service';
let nextID = 0;
let OeThesaurusInput = class OeThesaurusInput {
    constructor(element) {
        this.element = element;
        this.inputValue = '';
        this.minlength = null;
        this.baseUrl = '';
        this.placeholder = '';
        this.delay = 300;
        this.expanded = false;
        this.updatingInput = false;
        this.suggestions = [];
        this.index = -1;
        this.suggestionsUL = null;
        this.userInput = '';
        this.standalone = true;
        this.element = element;
        this.id = nextID++;
    }
    attached() {
        if (this.standalone) {
            this.service = new ApiService(this.baseUrl);
        }
    }
    display(name) {
        this.updatingInput = true;
        this.inputValue = name;
        this.updatingInput = false;
    }
    getName(suggestion) {
        if (suggestion == null) {
            return '';
        }
        return suggestion['label'];
    }
    collapse() {
        this.expanded = false;
        this.index = -1;
    }
    select(suggestion) {
        if (suggestion) {
            this.value = suggestion;
            const name = this.getName(this.value);
            this.userInput = name;
            this.display(name);
            this.collapse();
        }
    }
    valueChanged() {
        this.select(this.value);
    }
    inputValueChanged(value) {
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
            .then((suggestions) => {
            if (suggestions) {
                this.index = -1;
                suggestions = suggestions.map(s => new Member(s.id, s.label, s.type, s.uri));
                this.suggestions.splice(0, this.suggestions.length, ...suggestions);
                if (suggestions.length === 1) {
                    this.select(suggestions[0]);
                }
                else if (suggestions.length === 0) {
                    this.collapse();
                }
                else {
                    this.expanded = true;
                }
            }
        });
    }
    scroll() {
        const ul = this.suggestionsUL;
        const li = ul.children.item(this.index === -1 ? 0 : this.index);
        if (li.offsetTop + li.offsetHeight > ul.offsetHeight) {
            ul.scrollTop += li.offsetHeight;
        }
        else if (li.offsetTop < ul.scrollTop) {
            ul.scrollTop = li.offsetTop;
        }
    }
    keydown(key) {
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
    }
    blur() {
        this.select(this.value);
        const event = new CustomEvent('blur');
        this.element.dispatchEvent(event);
    }
    suggestionClicked(suggestion) {
        this.select(suggestion);
    }
    focus() {
        this.element.firstElementChild.focus();
    }
    disabledChanged(newValue, oldValue) {
        this.inputValue = '';
    }
};
__decorate([
    observable,
    __metadata("design:type", String)
], OeThesaurusInput.prototype, "inputValue", void 0);
__decorate([
    bindable,
    __metadata("design:type", String)
], OeThesaurusInput.prototype, "type", void 0);
__decorate([
    bindable,
    __metadata("design:type", Number)
], OeThesaurusInput.prototype, "minlength", void 0);
__decorate([
    bindable,
    __metadata("design:type", String)
], OeThesaurusInput.prototype, "baseUrl", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.twoWay }),
    __metadata("design:type", Member)
], OeThesaurusInput.prototype, "value", void 0);
__decorate([
    bindable,
    __metadata("design:type", String)
], OeThesaurusInput.prototype, "placeholder", void 0);
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
    __metadata("design:type", Boolean)
], OeThesaurusInput.prototype, "standalone", void 0);
__decorate([
    bindable,
    __metadata("design:type", ApiService)
], OeThesaurusInput.prototype, "service", void 0);
OeThesaurusInput = __decorate([
    inject(Element),
    __metadata("design:paramtypes", [Element])
], OeThesaurusInput);
export { OeThesaurusInput };
