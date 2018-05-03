import { ApiService } from './services/api-service';
export declare class OeThesaurusComponent {
    private element;
    placeholder: string;
    type: string;
    baseUrl: string;
    minlength: number;
    value: any;
    disabled: boolean;
    service: ApiService;
    constructor(element: Element);
    attached(): void;
}
