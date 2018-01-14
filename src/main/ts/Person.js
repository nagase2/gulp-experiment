System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Person;
    return {
        setters: [],
        execute: function () {
            Person = class Person {
                constructor(_id, _name) {
                    this.id = _id;
                    this.name = _name;
                    this.age = 99;
                }
            };
            exports_1("Person", Person);
        }
    };
});
//# sourceMappingURL=Person.js.map