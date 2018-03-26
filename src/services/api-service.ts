import { HttpClient } from 'aurelia-http-client';
import { ITree, IMember, IConcept } from '../models/apiModel';

export class ApiService {
  public http: HttpClient;

  constructor(
    base: string,
    http?: any
  ) {
    this.http = http || new HttpClient();
    this.http.configure(x => {
      x.withBaseUrl(`${base.replace(/\/?$/, '/')}conceptschemes/`);
      x.withHeader('Accept', 'application/json');
      x.withInterceptor({
        responseError(res) {
          console.debug(res.response);
          return res;
        }
      });
    });
  }

  public getConcepts(type: string, params?: any) {
    return this.http.createRequest(`${type}/c`)
      .asGet()
      .withParams(params)
      .send()
      .then(response => {
        if (response.isSuccess) {
          return response.content as IMember[];
        } else {
          return;
        }
      });
  }

  public getConceptById(type: string, id: number) {
    return this.http.createRequest(`${type}/c/${id}`)
      .asGet()
      .send()
      .then(response => {
        if (response.isSuccess) {
          return response.content as IConcept;
        } else {
          return;
        }
      });
  }

  public getTree(type: string) {
    return this.http.get(`${type}/tree`).then(response => {
      if (response.isSuccess) {
        return response.content as ITree;
      } else {
        return;
      }
    });
  }
}
