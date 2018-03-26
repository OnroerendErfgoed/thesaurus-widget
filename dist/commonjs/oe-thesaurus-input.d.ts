import { Member } from './models/member';
import { ApiService } from './services/api-service';
export declare class OeThesaurusInput {
    private element;
    inputValue: string;
    placeholder: string;
    type: string;
    minlength: number;
    baseUrl: string;
    value: Member;
    delay: number;
    disabled: boolean;
    id: number;
    expanded: boolean;
    updatingInput: boolean;
    suggestions: Member[];
    index: number;
    suggestionsUL: any;
    userInput: string;
    standalone: boolean;
    service: ApiService;
    constructor(element: Element);
    attached(): void;
    display(name: string): void;
    getName(suggestion: any): any;
    collapse(): void;
    select(suggestion: any): void;
    valueChanged(): void;
    inputValueChanged(value: string): void;
    scroll(): void;
    keydown(key: number): boolean;
    blur(): void;
    suggestionClicked(suggestion: any): void;
    focus(): void;
    private disabledChanged(newValue, oldValue);
}
