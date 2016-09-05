// Vathana 8/15/16 Javascript

// var name = "vathana";
// var nameArray = name.split("");
// var upper = "V";
// alert(nameArray.splice(0, 1, upper));


var name = prompt("What is your name?");
name = capitalize(name);

function capitalize(n) {
  return n.charAt(0).toUpperCase() + n.substr(1, n.length);
}
alert(n);


// function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//     // string.charAt(0) ---> v
//     // string.charAt(0).toUpperCase() ---> V
//     // string.charAt(0).toUpperCase() + string.slice(1); --> V + athana
// }
// alert(capitalizeFirstLetter("vathana"));
