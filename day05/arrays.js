// var fruit = [];
// function selection() {
//   var userResp = prompt("Pick a fruit");
//   fruit.push(userResp);
//   repeat();
// }
//
// function repeat() {
//   var repeat = confirm("Pick another?");
//   if(repeat == true) {
//     selection();
//   } else {
//     end();
//   }
// }
// function end() {
//   console.log(fruit);
// }
// selection();

// -----------------------------------------------------------------------------
// matthew higley
// var fruits = [];
// function getFruit() {
//   var fruit = prompt("enter a fruit");
//   fruits.push(fruit);
//   moreFruit();
// }
//
// function moreFruit() {
//   var addMore = confirm("add more?");
//   if(addMore) {
//     getFruit();
//   } else {
//     console.log(fruits);
//     removeFruit();
//   }
// }
//
// function removeFruit() {
//   var remove = prompt("enter index number of the fruit you want to remove");
//   fruits.splice(remove, 1);
//   fruits.sort(); // order in alphabetical
//   outPutFruits(fruits);
// }
//
// // logs each indiviual element in fruits
// function outPutFruits(array) {
//   // for(var i = 0; i < array.length; i++) {
//   //   console.log(array[i]);
//   // }
//   // var i = 0;
//   // while(i <array.length) {
//   //   console.log(array[i]);
//   //   i++; // i++ is after console.log to get the first value (0)
//   // }
//
//   // no matter what, dowhile will always run at least once
//   var i = 0;
//   do {
//     console.log(array[i]);
//     i++;
//   } while(i < array.length);
// }
// getFruit();
// -----------------------------------------------------------------------------
// for loop
// loop thru numbers 1-10
// f 5 or 7 => continue or break
// console numbers
// for (var i = 1; i < 11; i++) {
//   if (i === 5 || i === 7) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }
// while loop
// var i = 1;
// while(i <= 10) {
//   if (i === 5 || i === 7) {
//     i++;
//     continue;
//   }
//   console.log(i);
//   i++;
// }
// -----------------------------------------------------------------------------
// stop loop when approaching 6
// FOR LOOP
// for (var i = 1; i <= 10; i++) {
//   if(i === 6) {
//     break;
//   }
//   console.log(i);
// }

// WHILE LOOP
var i = 1;
while(i <= 10) {
  console.log(i);
  i++;
  if (i === 6) {
    break;
  }
}
