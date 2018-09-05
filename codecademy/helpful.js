/*

primitive data types:

1) Number: Any number, including numbers with decimals: 4, 8, 1516, 23.42.
2) String: Any grouping of characters on your keyboard (letters, numbers, spaces,
  symbols, etc.) surrounded by single quotes: ' ... ' or double quotes " ... ".
  Though we prefer single quotes. Some people like to think of string as a fancy
  word for text.
3) Boolean: This data type only has two possible values— either true or false
  (without quotes). It’s helpful to think of booleans as on and off switches or
  as the answers to a "yes" or "no" question.
4) Null: This data type represents the intentional absence of a value, and is
  represented by the keyword null (without quotes).
5) Undefined: This data type is denoted by the keyword undefined (without quotes).
  It also represents the absence of a value though it has a different use than
  null.
6) Symbol: A newer feature to the language, symbols are unique identifiers,
  useful in more complex coding. No need to worry about these for now.

Another data type:

7) Object: Collections of related data */
console.log(Math.floor(Math.random()*100));
console.log(Math.ceil(43.8));
console.log(Number.isInteger(2017));

let changeMe = true;
const myName = 'Drew';
var age = 22;
console.log(changeMe);
changeMe = false;
console.log(changeMe);
// let can be changed, const can't be change it's constant, var is pre-ES6 JS

let myName = 'Andrew';
let myCity = 'LG Baby';
console.log(`My name is ${myName}. My favorite city is ${myCity}.`);
// uses ` backticks next to 1, not '' next to return

let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable); // outputs string, aka the data type of it

const rectangleArea = function(width, height){
  let area = width * height;
  return area;
}
// above equivalent to below
const rectangleArea = (width, height) => {
  let area = width * height;
  return area;
}
// above equivalent to below
const rectangleArea = width, height => width * height;

//prints sum of first integer and second
console.log(firstInteger + parseInt(secondInteger));
//prints sum of first decimal and second
console.log(firstDecimal + parseFloat(secondDecimal));
//concatenation of first and second string
console.log(firstString + secondString);






// .push() - adds items to the end of an array
const itemTracker = ['item 0', 'item 1', 'item 2'];
itemTracker.push('item 3', 'item 4');
console.log(itemTracker);     // Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];

//example of using .push()
let bobsFollowers = ['John', 'Johnny', 'Jack', 'Jacky'];
let tinasFollowers = ['John', 'Jack', 'Stove'];
let mutualFollowers = [];

for(let i = 0; i < bobsFollowers.length; i++){
  for(let j = 0; j < tinasFollowers.length; j++){
    if(bobsFollowers[i] === tinasFollowers[j]){
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}

// .pop() - removes the last item of an array
const newItemTracker = ['item 0', 'item 1', 'item 2'];
const removed = newItemTracker.pop();
console.log(newItemTracker);  // Output: [ 'item 0', 'item 1' ]
console.log(removed);         // Output: item 2

// .shift() - removes the first item from the Array
// .unshift('word') - adds what's in the parameter to the beginning of the array
// .slice() - returns a shallow copy of a portion of an array into a new array
// .indexOf() - finds the index of the element in your paramter
//    selected from beginning to end (end not included)
console.log(groceryList.slice(1, 4)); //not mutating
console.log(groceryList); //unchanged


// just a while loop demonstration
const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard;
while(currentCard !== 'spade'){
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}
