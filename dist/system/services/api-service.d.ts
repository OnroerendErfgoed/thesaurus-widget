import { HttpClient } from 'aurelia-http-client';
import { ITree, IMember, IConcept } from '../models/apiModel';
export declare class ApiService {
    http: HttpClient;
    constructor(base: string, http?: any);
    getConcepts(type: string, params?: any): Promise<IMember[]>;
    getConceptById(type: string, id: number): Promise<IConcept>;
    getTree(type: string, language?: string): Promise<ITree>;
}
