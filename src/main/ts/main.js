System.register(["./Person", "jquery"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Person_1, $, person;
    return {
        setters: [
            function (Person_1_1) {
                Person_1 = Person_1_1;
            },
            function ($_1) {
                $ = $_1;
            }
        ],
        execute: function () {
            person = new Person_1.Person(1, "yoko");
            $(() => {
                $('body').html('彼は' + person.name + 'です。' + 'そして' + person.age + '歳です');
            });
        }
    };
});
//# sourceMappingURL=main.js.map