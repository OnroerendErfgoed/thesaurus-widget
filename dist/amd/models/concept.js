define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Concept = (function () {
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
    exports.Concept = Concept;
});
//# sourceMappingURL=concept.js.map