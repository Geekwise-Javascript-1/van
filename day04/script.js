// function hello() {
//   var msg = "hello ";
//   world(msg);
// }
//
// function world(message) {
//   alert(message+"world");
// }
// hello();

function getUsername() {
  var user = prompt("What is your username?");
  checkUsername(user);
}

function checkUsername(user) {
  //user = parseInt(user); // NaN is a type of number
  // console.log(typeof user); // can check what type of data it is
  // isNaN checks if a data is NOT a number, makes life easier
  if(!isNaN(user)) {
    alert("thats not a proper username");
    return
  }
  craftMsg(user);
}

function craftMsg(u) {
  var msg = "Welcome ";
  msg += formatUsername(u);
  msg += " to my site";
  alertUser(msg);
}

function formatUsername(n) {
  return (n.charAt(0).toUpperCase() + n.substr(1, n.length).toLowerCase()).replace(/ +/g, "");
  // return (n.charAt(0).toUpperCase() + n.substr(1, n.length).toLowerCase()).trim();

}

function alertUser(m) {
  alert(m);
}

getUsername();
