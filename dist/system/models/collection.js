System.register([], function (exports_1, context_1) {
    "use strict";
    var Collection;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Collection = (function () {
                function Collection(apiCollection) {
                    this.id = apiCollection.id;
                    this.labels = apiCollection.labels;
                    this.members = apiCollection.members;
                    this.memberOf = apiCollection.member_of;
                    this.conceptScheme = apiCollection.concept_scheme;
                    this.uri = apiCollection.uri;
                    this.label = apiCollection.label;
                    this.type = apiCollection.type;
                    this.sources = apiCollection.sources;
                    this.notes = apiCollection.notes;
                    this.superordinates = apiCollection.superordinates;
                }
                return Collection;
            }());
            exports_1("Collection", Collection);
        }
    };
});
