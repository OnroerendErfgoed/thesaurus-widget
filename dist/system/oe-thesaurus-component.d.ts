import { IThesaurusConfig } from './models/apiModel';
import { ApiService } from './services/api-service';
export declare class OeThesaurusComponent {
    private element;
    config: IThesaurusConfig;
    value: any;
    disabled: boolean;
    service: ApiService;
    constructor(element: Element);
    bind(): void;
}
