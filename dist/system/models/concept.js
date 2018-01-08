System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Concept;
    return {
        setters: [],
        execute: function () {
            Concept = (function () {
                function Concept(apiConcept) {
                    this.id = apiConcept.id;
                    this.labels = apiConcept.labels;
                    this.memberOf = apiConcept.member_of;
                    this.conceptScheme = apiConcept.concept_scheme;
                    this.uri = apiConcept.uri;
                    this.label = apiConcept.label;
                    this.type = apiConcept.type;
                    this.notes = apiConcept.notes;
                    this.subordinateArrays = apiConcept.subordinate_arrays;
                    this.matches = apiConcept.matches;
                    this.narrower = apiConcept.narrower;
                    this.related = apiConcept.related;
                    this.broader = apiConcept.broader;
                    this.sources = apiConcept.sources;
                }
                return Concept;
            }());
            exports_1("Concept", Concept);
        }
    };
});
//# sourceMappingURL=concept.js.map