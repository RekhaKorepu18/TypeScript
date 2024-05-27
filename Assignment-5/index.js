;
//===================concatenating keyvaluePairs in Object using a function===========================
var Util;
(function (Util) {
    function combinedkeyValuePairs(object) {
        var answer = '';
        function addNestedObjectData(subObj) {
            Object.keys(subObj).forEach(function (property) {
                var value = subObj[property];
                if (typeof value === 'object') {
                    addNestedObjectData(value);
                }
                else {
                    answer += "".concat(property, ": ").concat(value, ", ");
                }
            });
        }
        addNestedObjectData(object);
        answer = answer.substring(0, answer.length - 2);
        //answer= answer.deleteCharAt(answer.length-1);
        return answer;
    }
    Util.combinedkeyValuePairs = combinedkeyValuePairs;
})(Util || (Util = {}));
var user1 = {
    id: 1490,
    firstName: "Rekha",
    lastName: "Korepu",
    email: "rekhakorepu@gmail.com",
    age: 21,
    mobileNumber: 1234567890,
    address: { city: "hyd", state: "Telangana", pincode: 505404 }
};
var user2 = {
    id: 2307,
    firstName: "thrishva",
    lastName: "anugula",
    age: 20,
    mobileNumber: 9987654321,
    email: "thrishvaanugula@gmail.com",
    address: {
        city: "Hyderabad",
        state: "Telangana",
        pincode: 505404
    }
};
//============Printing the data===========
console.log(Util.combinedkeyValuePairs(user1));
console.log(Util.combinedkeyValuePairs(user2));
