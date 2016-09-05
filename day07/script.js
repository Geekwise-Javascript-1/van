// var btn = document.querySelector("button");
// btn.addEventListener("click", once); // reference has no parenthesis
//
// function once() {
//   console.log("done!");
//   btn.removeEventListener("click", once); // takes off the same function that is applied; that's why an anonyous function will not work
// }
// btn.addEventListener("mousedown", function(e){
//   console.log(e);
//   if(e.which == 1) {
//     console.log("left click");
//   } else if (e.which == 2) {
//     console.log("middle click");
//   } else if (e.which == 3) {
//     console.log("right click");
//   }
// });

// preventing default behavior
// a.addEventListener("click", function(e){
//   console.log(e);
//   e.preventDefault();
//   console.log("google block");
// });

// addEventListener("keydown", function(e){
//   console.log(e);
//   if(e.keyCode == 86) {
//     document.body.style.backgroundColor = "green";
//   }
// });
// addEventListener("keyup", function(e){
//   if(e.keyCode == 86) {
//     document.body.style.backgroundColor = "";
//   }
// });

// addEventListener("keypress", function(e){
//      if(e.charCode == 118) {
//        document.body.style.backgroundColor = "violet";
//      }
// });

// console.log("P".charCodeAt(0));

// // listen for mouse move
// addEventListener("mousemove", function(e){
//   //console.log(e.screenY+"px");
// });

// render dot based on click location
// addEventListener("click", function(e){
//   console.log(e);
//   var dot = document.createElement("div");
//   dot.className = "dot";
//   dot.style.left = e.pageX + "px";
//   dot.style.top = e.pageY + "px";
//   document.body.appendChild(dot);
// });

// makes the top header fixed when pageY is greater than or equals to 65
var hdr = document.querySelector("header");

addEventListener("scroll", function(e){
  console.log(e);
  if(e.pageY >= 65) {
    hdr.classList.add("fixed");
    document.body.style.paddingTop = "65px";
  } else {
    hdr.classList.remove("fixed");
    document.body.style.paddingTop = "0px";
  }
});
