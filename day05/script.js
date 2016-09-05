// arrays

// empty
var fruitColors = [];
var cherry = ["cherry", "red"];
var banana = ["banana", "yellow"];
var kiwi = ["kiwi", "green"];

var fruits = ["apple", "banana", "cherry", "strawberry", "pineapple"];


//adds the array to fruitColors
fruitColors.push(cherry);
fruitColors.push(banana);
fruitColors.push(kiwi);

var lastFruit = fruitColors.pop(); // remove el from end of array
var firstFruit = fruitColors.shift(); // remove el from start of array
// var fruits = ["Apple", "Orange", "Banana", "Pear"];
// fruits.push("kiwi"); // adds kiwi to end

// console.log(firstFruit);
// console.log(fruitColors);
// var selectedFruit = fruits.slice(1, 3); // slice(a, b) b is exclusive; does NOT MODIFY original array, need to make new variable

fruits.splice(1, 2, "grape"); // modifies original array, no need to make new variable
console.log(fruits);

//multidiminsional
// console.log(fruitColors[0][1]);
// console.log(fruitColors[1][1]);
// console.log(fruitColors[2][1]);
