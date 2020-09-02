interface IThesaurusConfig {
  placeholder: string;
  type: string;
  baseUrl: string;
  minlength: number;
  language?: string;
  standalone?: boolean;
}

declare module "thesaurus-widget" {
  export interface IThesaurusConfig {
    placeholder: string;
    type: string;
    baseUrl: string;
    minlength: number;
    language?: string;
    standalone?: boolean;
  }
}
