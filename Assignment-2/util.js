"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getObjects = exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
exports.Person = Person;
function getObjects(items) {
    return items;
}
exports.getObjects = getObjects;
