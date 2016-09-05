// var firstName = prompt("What is your first name?");
// var lastName = prompt("What is your last name?");
// console.log(firstName);
// alert(lastName);
// var userConfirm = confirm("Ready to proceed?");
// alert(userConfirm);

// isNaN is loose, not strict 5 == "5"
var userResp = prompt("What would you like to do today?");
console.log(userResp);
if(userResp == "" || userResp == null) {
	alert("Blank");
}

// ""
// null
// "         "