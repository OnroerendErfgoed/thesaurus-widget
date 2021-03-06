"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiService = void 0;
var aurelia_http_client_1 = require("aurelia-http-client");
var ApiService = (function () {
    function ApiService(base, http) {
        this.http = http || new aurelia_http_client_1.HttpClient();
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
        });
    };
    ApiService.prototype.getTree = function (type, language) {
        return this.http.get(type + "/tree" + (language ? '?language=' + language : '')).then(function (response) {
            if (response.isSuccess) {
                return response.content;
            }
            else {
                return;
            }
        });
    };
    return ApiService;
}());
exports.ApiService = ApiService;

//# sourceMappingURL=api-service.js.map
