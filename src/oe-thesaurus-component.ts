import { inject, bindable, bindingMode } from 'aurelia-framework';
import { ApiService } from './services/api-service';

@inject(Element)
export class OeThesaurusComponent {
  @bindable public placeholder: string = '';
  @bindable public type: string;
  @bindable public baseUrl: string = '';
  @bindable public minlength: number = null;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) public value: any;
  @bindable public disabled: boolean;
  public service: ApiService;

  constructor(private element: Element) {
    this.element = element;
  }

  public attached() {
    if (!this.service) {
      this.service = new ApiService(this.baseUrl);
    }
  }
}
