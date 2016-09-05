// // // // // // var str = "            Vathana         ";
// // // // // // var strShort = str.trim();
// // // // // // console.log(strShort.trim());
// // // // //
// // // // // var randNum = Math.floor(Math.random()*10) + 1;
// // // // // console.log(randNum);
// // // //
// // // // var date = new Date;
// // // // var year = date.getFullYear();
// // // // var day = date.getDate();
// // // // var month = date.getMonth();
// // // //
// // // // console.log(month + "/" + ada + "/" + year);
// // //
// // // var firstName = "Vathana";
// // //
// // // function newFunction(a){
// // //   var lastName = "To";
// // //   alert(firstName);
// // //   alert(lastName)
// // // }
// // // newFunction();
// // // alert(lastName);
// //
// // var name = "Vathana";
// //
// // function newFunction() {
// //   alert(name);
// //   var date = new Date();
// //   date.setFullYear(1998, 2, 30); // why can't I store this in a variable?
// //   alert(date);
// // }
// // newFunction();
// var color = prompt("What is your color?");
//
// var firstName = prompt("What is your name?");
// var lastName = prompt("What is your last name?");
// var locale = "en-us";
//
// function newFunction() {
//   var toDay = new Date;
//   toDay.setFullYear(1997);
//   toDay.setDate(2);
//   toDay.setDate(9);
//   var fullMon = toDay.toLocaleString(locale, { month:'long' });
//   console.log(firstName
//     + " "
//     + lastName
//     + ". "
//     + fullMon
//     + " "
//     + toDay.getDate()
//     + ", "
//     + toDay.getFullYear()
//     + ". And my color is"
//     + " "
//     + color);
// }
// newFunction();

var userFirst = prompt("first name");
var userLast = prompt("last name");
var userBday = prompt("birthday");
var userColor = prompt("choose a color");

function setBday(uF, uL, uB, uC) {
  // console.log(uB);
  var bdayArr = uB.split(" ");
  // console.log(bdayArr[0] + " " + bdayArr[1] + ", " + bdayArr[2]);
  console.log(
    uF
    + " "
    + uL
    + " "
    + bdayArr[0] + " " + bdayArr[1] + ", " + bdayArr[2]
    + ". Your color is  "
    + uC
  );
}
setBday(userFirst, userLast, userBday, userColor);

// var userFirst = prompt("first name");
// var userLast = prompt("last name");
// var userBday = prompt("birthday");
// var userColor = prompt("choose a color");
//
// function setBday() {
//   console.log(
//     userFirst
//     + " "
//     + userLast
//     + " "
//     + userBday
//     + ". Your color is  "
//     + userColor
//   );
// }
// setBday();
