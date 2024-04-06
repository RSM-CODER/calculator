var input = document.getElementById("inputBox");
var buttons = document.querySelectorAll("button");
// input.value = 5
var string = "";
var arr = Array.from("button");
// vikash code
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
    const inputValue = input.value;
    const finalCalculate = eval(inputValue);
    input.value = finalCalculate;
    // input.value = eval(input.value);
  } catch (error) {
    document.getElementById("inputBox").value = "Error";
  }
}

// End Vikash Code

// arr.forEach(button =>
//     {
//         button.addEventlistener('click',(button)=> {
//             if(button.target.innerHTML == '='){
//                 string = eval(string);
//                 input.value = string;
//             }

//             else if (button.targetHTML == 'AC'){
//                 string = "";
//                 input.value = string;
//             }
//             else{
//                 string += button.target.innerHTML;
//                 input.value = string;
//             }

//         })
//     })
//     var input = document.getElementById('inputBox');
// var buttons = document.querySelectorAll('button');

// var string = "";
// var arr = Array.from('button');
// arr.forEach(button =>
//     {
//         button.addEventlistener('click',(button)=> {
//             if(button.target.innerHTML == '='){
//                 string = eval(string);
//                 input.value = string;
//             }

//             else if (button.targetHTML == 'AC'){
//                 string = "";
//                 input.value = string;
//             }
//             else{
//                 string += button.target.innerHTML;
//                 input.value = string;
//             }

//         })
//     })
//     console.log("hello");
