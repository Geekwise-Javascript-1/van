// Review of 8/15, 8/17, functions
// check if user enters qualified input
// ESC, cancel  = null,
function getUser() {
  var user = prompt("what is your username?");
  //checkUser(user);
  splitWords(user);
}

function splitWords(string) {
  string = string.split(' ');
  userArr = [];
  for(var i = 0; i < string.length; i++) {
    if(checkUser(string[i])) {
      userArr.push(formatUser(checkUser(string[i])));
    }
  }
  //console.log(string);
  outputUser(userArr);
}

function checkUser(user) {
  var canParse = parseInt(user);
  if(isNaN(canParse) && user != null && user.trim()) {
    return user.trim();
  }
}

function formatUser(string) {
  return string.charAt(0).toUpperCase() + string.toLowerCase().substr(1, string.legnth);
}

// user is now an array
function outputUser(user) {
  var msg;
  msg = "Welcome ";
  for(var i = 0; i < user.length; i++) {
    msg += user[i] + " ";
  }
  msg += " to my site!";
  alert(msg);
}
getUser();
