"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Collection = (function () {
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
exports.Collection = Collection;
//# sourceMappingURL=collection.js.map