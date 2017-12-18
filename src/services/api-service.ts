import { HttpClient } from 'aurelia-http-client';

export class ApiService {
  private http: HttpClient;
  private base: string = 'https://dev-thesaurus.onroerenderfgoed.be';
  private type: string = 'MATERIALEN';

  constructor() {
    this.http = new HttpClient();
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

  public getConcepts() {
    return this.http.get('/c').then(response => {
      if (response.isSuccess) {
        // handle response
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
        // handle response
      }
    }).catch(error => {
      console.debug(error);
      return new Promise<void>(reject => {
        reject();
      });
    });
  }
}
