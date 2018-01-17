import { HttpClient } from 'aurelia-http-client';
var ApiService = (function () {
    function ApiService(base, http) {
        this.http = http || new HttpClient();
        this.http.configure(function (x) {
            x.withBaseUrl(base.replace(/\/?$/, '/') + "conceptschemes/");
            x.withHeader('Accept', 'application/json');
            x.withInterceptor({
                responseError: function (res) {
                    console.debug(res.response);
                    return res;
                }
            });
        });
    }
    ApiService.prototype.getConcepts = function (type, params) {
        return this.http.createRequest(type + "/c")
            .asGet()
            .withParams(params)
            .send()
            .then(function (response) {
            if (response.isSuccess) {
                return response.content;
            }
            else {
                return;
            }
        }).catch(function (error) {
            console.debug(error);
            return new Promise(function (reject) {
                reject();
            });
        });
    };
    ApiService.prototype.getConceptById = function (type, id) {
        return this.http.createRequest(type + "/c/" + id)
            .asGet()
            .send()
            .then(function (response) {
            if (response.isSuccess) {
                return response.content;
            }
            else {
                return;
            }
        }).catch(function (error) {
            console.debug(error);
            return new Promise(function (reject) {
                reject();
            });
        });
    };
    ApiService.prototype.getTree = function (type) {
        return this.http.get(type + "/tree").then(function (response) {
            if (response.isSuccess) {
                return response.content;
            }
            else {
                return;
            }
        }).catch(function (error) {
            console.debug(error);
            return new Promise(function (reject) {
                reject();
            });
        });
    };
    return ApiService;
}());
export { ApiService };
