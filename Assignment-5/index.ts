// =========Define the User with few optional properties=============
interface User {
  id: number,
  firstName: string;
  lastName: string;
  email: string;
  age?: number;
  mobileNumber?: number;
  address: {
    city?: string;
    state?: string;
    pincode: number;
  };
};

// ===========Create a type with all properties required==========================
type changeToRequired<T> = {
  [P in keyof T]-?: T[P] extends object ? changeToRequired<T[P]> : T[P];
};

type RequiredUser = changeToRequired<User>;

//===================concatenating keyvaluePairs in Object using a function===========================
  namespace Util {
    export function combinedkeyValuePairs(object: { [property: string]: any }): string {
      let answer = '';
  
      function addNestedObjectData(subObj: { [key: string]: any }) {
        Object.keys(subObj).forEach(property => {
          const value = subObj[property];
          if (typeof value === 'object') {
            addNestedObjectData(value);
          } else {
            answer += `${property}: ${value}, `;
          }
        });
      }
  
      addNestedObjectData(object);
      answer = answer.substring(0, answer.length-2);
      //answer= answer.deleteCharAt(answer.length-1);
      return answer;
    }
  }
  


const user1: RequiredUser = {
  id: 1490,
  firstName: "Rekha",
  lastName: "Korepu",
  email: "rekhakorepu@gmail.com",
  age: 21,
  mobileNumber: 1234567890,
  address: {city: "hyd", state: "Telangana", pincode: 505404}
};

const user2: RequiredUser = {
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
