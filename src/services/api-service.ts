import { HttpClient } from 'aurelia-http-client';
import { ITree, IMember } from '../models/apiModel';

export class ApiService {
  public http: HttpClient;
  private base: string = 'https://dev-thesaurus.onroerenderfgoed.be';
  private type: string = 'MATERIALEN';

  constructor(
    http?: any
  ) {
    this.http = http || new HttpClient();
    this.http.configure(x => {
      x.withBaseUrl(`${this.base}/conceptschemes/${this.type}`);
      x.withHeader('Accept', 'application/json');
      x.withInterceptor({
        responseError(res) {
          console.debug(res.response);
          return res;
        }
      });
    });
  }

  public getConcepts(params?: any) {
    return this.http.createRequest('/c')
      .asGet()
      .withParams(params)
      .send()
      .then(response => {
        if (response.isSuccess) {
          return response.content as IMember[];
        } else {
          return;
        }
      }).catch(error => {
        console.debug(error);
        return new Promise<void>(reject => {
          reject();
        });
      });
  }

  public getTree() {
    return this.http.get('/tree').then(response => {
      if (response.isSuccess) {
        return response.content as ITree;
      } else {
        return;
      }
    }).catch(error => {
      console.debug(error);
      return new Promise<void>(reject => {
        reject();
      });
    });
  }
}
