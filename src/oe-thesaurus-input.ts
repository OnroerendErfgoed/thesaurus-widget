/*
original source: https://gist.github.com/jdanyow/abe2b8c1587f1853106079dc74701aeb
* */
import { inject, bindable, bindingMode, observable } from 'aurelia-framework';
import { Member } from './models/member';
import { ApiService } from './services/api-service';

@inject(Element)
export class OeThesaurusInput {
  @bindable public config: IThesaurusConfig;
  @observable public inputValue: string = '';
  @bindable({ defaultBindingMode: bindingMode.twoWay }) public value: Member;
  @bindable public delay: number = 300;
  @bindable public disabled: boolean;
  @bindable public collectiesZoeken: boolean = false;
  public expanded: boolean = false;
  public updatingInput: boolean = false;
  public suggestions: Member[] = [];
  public index: number = -1;
  public suggestionsUL = null;
  public userInput: string = '';
  @bindable public service: ApiService;

  constructor(private element: Element) {
    this.element = element;
  }

  public bind() {
    this.setConfigDefaults();
    if (this.config.standalone) {
      this.service = new ApiService(this.config.baseUrl);
    }
  }

  public display(name: string) {
    this.updatingInput = true;
    this.inputValue = name;
    this.updatingInput = false;
  }

  public getName(suggestion: any) {
    if (suggestion == null) {
      return '';
    }
    return suggestion['label'];
  }

  public collapse() {
    this.expanded = false;
    this.index = -1;
  }

  public select(suggestion) {
    this.value = suggestion;
    const name = this.getName(this.value);
    this.userInput = name;
    this.display(name);
    this.collapse();
  }

  public valueChanged(value: any) {
    this.select(value);
  }

  public inputValueChanged(value: string) {
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
    this.service.getConcepts(this.config.type, {
      language: this.config.language || '',
      label: value,
      ...(!this.collectiesZoeken && {type : 'concept'})
    })
    .then((suggestions) => {
      if (suggestions) {
        this.index = -1;
        suggestions = suggestions.map(s => new Member(s.id, s.label, s.type, s.uri));
        this.suggestions.splice(0, this.suggestions.length, ...suggestions);
        if (suggestions.length === 0) {
          this.collapse();
        } else {
          this.expanded = true;
        }
      }
    });
  }

  public scroll() {
    const ul = this.suggestionsUL;
    const li = ul.children.item(this.index === -1 ? 0 : this.index);
    if (li.offsetTop + li.offsetHeight > ul.offsetHeight) {
      ul.scrollTop += li.offsetHeight;
    } else if (li.offsetTop < ul.scrollTop) {
      ul.scrollTop = li.offsetTop;
    }
  }

  public keydown(key: number) {
    if (!this.expanded) {
      return true;
    }

    // down
    if (key === 40) {
      if (this.index < this.suggestions.length - 1) {
        this.index++;
        this.display(this.getName(this.suggestions[this.index]));
      } else {
        this.index = -1;
        this.display(this.userInput);
      }
      this.scroll();
      return;
    }

    // up
    if (key === 38) {
      if (this.index === -1) {
        this.index = this.suggestions.length - 1;
        this.display(this.getName(this.suggestions[this.index]));
      } else if (this.index > 0) {
        this.index--;
        this.display(this.getName(this.suggestions[this.index]));
      } else {
        this.index = -1;
        this.display(this.userInput);
      }
      this.scroll();
      return;
    }

    // escape
    if (key === 27) {
      this.display(this.userInput);
      this.collapse();
      return;
    }

    // enter
    if (key === 13) {
      if (this.index >= 0) {
        this.select(this.suggestions[this.index]);
      }
      return;
    }

    return true;
  }

  public blur() {
    this.select(this.value);
    const event = new CustomEvent('blur');
    this.element.dispatchEvent(event);
  }

  public suggestionClicked(suggestion: any) {
    this.select(suggestion);
  }

  public focus() {
    (this.element.firstElementChild as HTMLElement).focus();
  }

  // tslint:disable:no-unused-variable
  // Function gets called automatically every time the input disabled gets changed
  private disabledChanged(newValue: string, oldValue: string) {
    // tslint:enable:no-unused-variable
    this.inputValue = '';
  }

  private setConfigDefaults() {
    this.config.standalone = typeof this.config.standalone === 'undefined' ? true : this.config.standalone;
  }
}
