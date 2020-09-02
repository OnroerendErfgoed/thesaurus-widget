var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { inject, bindable, bindingMode } from 'aurelia-framework';
import { ApiService } from './services/api-service';
var OeThesaurusComponent = (function () {
    function OeThesaurusComponent(element) {
        this.element = element;
        this.element = element;
    }
    OeThesaurusComponent.prototype.bind = function () {
        if (!this.service) {
            this.service = new ApiService(this.config.baseUrl);
        }
    };
    __decorate([
        bindable,
        __metadata("design:type", Object)
    ], OeThesaurusComponent.prototype, "config", void 0);
    __decorate([
        bindable({ defaultBindingMode: bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], OeThesaurusComponent.prototype, "value", void 0);
    __decorate([
        bindable,
        __metadata("design:type", Boolean)
    ], OeThesaurusComponent.prototype, "disabled", void 0);
    OeThesaurusComponent = __decorate([
        inject(Element),
        __metadata("design:paramtypes", [Element])
    ], OeThesaurusComponent);
    return OeThesaurusComponent;
}());
export { OeThesaurusComponent };

//# sourceMappingURL=oe-thesaurus-component.js.map
