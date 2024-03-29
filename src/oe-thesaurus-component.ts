import { inject, bindable, bindingMode } from 'aurelia-framework';
import { ApiService } from './services/api-service';

@inject(Element)
export class OeThesaurusComponent {
  @bindable public config: IThesaurusConfig;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) public value: any;
  @bindable public disabled: boolean;
  @bindable public collectiesZoeken: boolean = false;
  public service: ApiService;

  constructor(private element: Element) {
    this.element = element;
  }

  public bind() {
    if (!this.service) {
      this.service = new ApiService(this.config.baseUrl);
    }
  }
}
