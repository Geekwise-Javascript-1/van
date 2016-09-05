// var input1 = document.getElementsByClassName("input1");
// var inputs = document.getElementsByClassName("input");
// var inputsTag = document.getElementsByClassName("input");
// var btnEl = document.querySelector("button[type='button']");
// var btnEls = document.querySelectorAll("label input");
// var btn = document.getElementsByClassName("btn");
//
// function getInputs() {
//   for(var i = 0; i < inputs.length; i++) {
//     console.log(inputs.value);
//   }
// }
//
// btn.onclick = getInputs;

var submitBtn = document.getElementById("btn");
var form = document.getElementsByTagName("form")[0];

submitBtn.onclick = getVals;

function getVals(e) {
  e.preventDefault();
  var valArr = [];
  for (var i = 0; i < form.elements.length; i++) {
    valArr.push(form.elements[i].value);
    // console.log(form.elements);
  }
  valArr.pop();
  console.log(valArr);

  form.appendChild(inputEl);
}

var lis = document.getElementsByTagName("li");
for(var i = 0; i < lis.length; i++) {
  lis[i].addEventListener("click", function(e) { // each individual lis has an event listener
    console.log(e.currentTarget.textContent);
    console.log(e.target.textContent);
    console.log(this.textContent);
  });
}
// // ------------------------------
// foo("matt");  // foo() is not yet recognized as a function when it is above the function
//
// var foo = function(name) {
//   console.log(name);
// }
// //-------------------------------
// var foo = function(name) {
//   console.log(name);
// }
//
// foo("matt");  // foo() is recognized as a function when it is below the function
// // ------------------------------
// var foo = function(name) {
//   console.log(arguments); // arguments is a keyword that targets all the arguments
// }("matt", 5, ["green", "day"]); // initilizes on load

var inputEl = document.createElement("input");
inputEl.id = "newId";
inputEl.name = "new";
inputEl.type = "email";
inputEl.placeholder = "Enter da goddamn email!";

console.log(inputEl);

/*add submit button back into form
ensure that each instance is appended before submit
modify every dynamic input to be text
on submit, output to console new array of values*/
