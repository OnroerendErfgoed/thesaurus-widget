export declare class OeThesaurusInput {
    inputValue: string;
    type: string;
    minlength: number;
    value: string;
    placeholder: string;
    delay: number;
    label: string;
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
    display(name: string): void;
    getName(suggestion: any): any;
    collapse(): void;
    select(suggestion: any): void;
    valueChanged(): void;
    inputValueChanged(value: any): void;
    scroll(): void;
    keydown(key: number): boolean;
    blur(): void;
    suggestionClicked(suggestion: any): void;
    focus(): void;
    private disabledChanged(newValue, oldValue);
}
