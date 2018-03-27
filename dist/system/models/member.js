System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Member;
    return {
        setters: [],
        execute: function () {
            Member = (function () {
                function Member(id, label, type, uri) {
                    this.id = id;
                    this.label = label;
                    this.type = type;
                    this.uri = uri;
                }
                return Member;
            }());
            exports_1("Member", Member);
        }
    };
});
