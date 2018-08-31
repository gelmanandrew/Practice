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
console.log(changeMe);
changeMe = false;
console.log(changeMe);
// let can be changed, var stays the same
