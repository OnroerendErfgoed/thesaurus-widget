import { HttpClient } from 'aurelia-http-client';
import { ITree, IMember } from '../models/apiModel';
export declare class ApiService {
    http: HttpClient;
    constructor(base: string, http?: any);
    getConcepts(type: string, params?: any): Promise<void | IMember[]>;
    getTree(type: string): Promise<void | ITree>;
}
