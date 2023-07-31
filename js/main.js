const num = 3;
function test(num) {
  if (num > 10) {
    console.log("константа не меньше 10");
  } else {
    console.log("константа меньше 10");
  }
}
test(num);

//

function js() {
  console.log("JavaScript");
}
js();

//

function ale() {
  alert("привет мир");
}
ale();

//

let text = "lorem";
function tx(x) {
  if (text === x) {
    console.log("привет мир");
  } else {
    console.log("error");
  }
}
tx("lorem");
