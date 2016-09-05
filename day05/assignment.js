var inp1 = document.getElementById("input1");
var inp2 = document.getElementById("input2");
var btn = document.getElementById("btn");
var output = document.getElementById("output");

function btnClick() {
  inp1.value = "Hello Javascript";
  alert(inp1.value);
  output.value = inp2;
};
btn.onclick = btnClick; //is method, without () so it doesn't run automatically

// create js object for input1, input2, btn, div
// after inoutting values for input1 and input2
// user clicks go
// input1 value replaced with text "Hello Javascript"
// alert new value of input1
// replace div text with value of input2
