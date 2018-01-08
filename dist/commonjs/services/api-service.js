"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.ApiService = ApiService;
