import { Concept } from './models/concept';
export declare class OeThesaurusInput {
    inputValue: string;
    type: string;
    minlength: number;
    baseUrl: string;
    value: Concept;
    placeholder: string;
    delay: number;
    disabled: boolean;
    id: number;
    expanded: boolean;
    updatingInput: boolean;
    suggestions: string[];
    index: number;
    suggestionsUL: any;
    userInput: string;
    element: Element;
    private service;
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
