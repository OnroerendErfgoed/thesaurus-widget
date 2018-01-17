import { HttpClient } from 'aurelia-http-client';
import { ITree, IMember, IConcept } from '../models/apiModel';
export declare class ApiService {
    http: HttpClient;
    constructor(base: string, http?: any);
    getConcepts(type: string, params?: any): Promise<void | IMember[]>;
    getConceptById(type: string, id: number): Promise<void | IConcept>;
    getTree(type: string): Promise<void | ITree>;
}
