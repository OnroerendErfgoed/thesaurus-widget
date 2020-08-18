System.register(["aurelia-http-client"], function (exports_1, context_1) {
    "use strict";
    var aurelia_http_client_1, ApiService;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (aurelia_http_client_1_1) {
                aurelia_http_client_1 = aurelia_http_client_1_1;
            }
        ],
        execute: function () {
            ApiService = (function () {
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
                    return this.http.get(type + "/tree" + (language ? '&language=' + language : null)).then(function (response) {
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
            exports_1("ApiService", ApiService);
        }
    };
});
