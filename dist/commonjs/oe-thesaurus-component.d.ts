import { ApiService } from './services/api-service';
export declare class OeThesaurusComponent {
    private element;
    type: string;
    baseUrl: string;
    minlength: number;
    value: any;
    service: ApiService;
    constructor(element: Element);
    attached(): void;
}
