var input = document.getElementById("inputBox");
var buttons = document.querySelectorAll("button");
var string = "";
var arr = Array.from("button");
function appendToResult(value) {
  input.value += value;
}

function performOperation(operator) {
  input.value += operator;
}

function clearResult() {
  input.value = "";
}

function delResult() {
  input.value = input.value.slice(0, -1);
}
function percentageToResult() {
  input.value = parseFloat(input.value) / 100;
}
function calculateResult() {
  try {
    input.value = eval(input.value);
  } catch (error) {
    document.getElementById("inputBox").value = "Error";
  }
}



//         })
//     })
//     console.log("hello");
