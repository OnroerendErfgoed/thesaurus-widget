import { HttpClient } from 'aurelia-http-client';
export class ApiService {
    constructor(base, http) {
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
    getConcepts(type, params) {
        return this.http.createRequest(`${type}/c`)
            .asGet()
            .withParams(params)
            .send()
            .then(response => {
            if (response.isSuccess) {
                return response.content;
            }
            else {
                return;
            }
        });
    }
    getConceptById(type, id) {
        return this.http.createRequest(`${type}/c/${id}`)
            .asGet()
            .send()
            .then(response => {
            if (response.isSuccess) {
                return response.content;
            }
            else {
                return;
            }
        });
    }
    getTree(type, language) {
        return this.http.get(`${type}/tree${language ? '&language=' + language : ''}`).then(response => {
            if (response.isSuccess) {
                return response.content;
            }
            else {
                return;
            }
        });
    }
}
