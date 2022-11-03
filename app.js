let items = ["JavaScript", 1, "a", 3];

// returns a string with elements of the array separated by commas
let itemsString = items.toString();
console.log(itemsString); // JavaScript,1,a,3

// ===============================================================

let numberFloor = 38.8;

// round number to nearest smallest number
let roundedFloorNumber = Math.floor(numberFloor);

// ===============================================================

let numberRound = 3.87;

// round the number to nearest integer
let roundedNumber = Math.round(numberRound);

// ===============================================================

let sentence = "JavaScript";

// returns number of characters in the sentence string
let len = sentence.length;

// ===============================================================

const string = "Hello World!";

// finding character at index 1
let index1 = string.charAt(1);

console.log("Character at index 1 is " + index1); // Character at index 1 is e

// ===============================================================

const message = "JavaScript is fun";

// check if message includes the string "Java"
let result = message.includes("Java");
console.log(result); // Output: true

// ===============================================================

let emptyString = "";

// joint arguments string
let joinedString = emptyString.concat("JavaScript", " is", " fun.");
console.log(joinedString); // JavaScript is fun.

// ===============================================================

let custumerList = [
  {
    name: "Jack",
    vechile: "Mercedes",
    model: "E220",
    year: "2012",
    problem: "Gear",
  },
  {
    name: "John",
    vechile: "Nissan",
    model: "Sunny",
    year: "2008",
    problem: "Light",
  },
  {
    name: "Cate",
    vechile: "Toyota",
    model: "Corolla",
    year: "2014",
    problem: "Change oil",
  },
  {
    name: "Ken",
    vechile: "BMW",
    model: "520",
    year: "2011",
    problem: "Electrical",
  },
  {
    name: "Mark",
    vechile: "Land Rover",
    model: "Range Rover",
    year: "2004",
    problem: "Gear",
  },
  {
    name: "Garry",
    vechile: "Chevrolet",
    model: "Cruze",
    year: "2015",
    problem: "Engine",
  },
];
// console.table(custumerList);
// console.log(custumerList.length);

custumerList.push({
  name: "Franck",
  vechile: "Renault",
  model: "Megane",
  year: "2010",
  problem: "Engine",
});

let getLastCustorper = custumerList.pop();
console.log(getLastCustorper);

custumerList.unshift(getLastCustorper);
console.table(custumerList);

let getFirstCustommer = custumerList.shift();
console.log(getFirstCustommer);

// ===== Return Engine Problemm customer ======

let engine = custumerList.filter(obj => {
	return obj.problem == "Engine";
});
console.log(engine);




