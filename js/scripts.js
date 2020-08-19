//Business Logic



function pigLatin(userInput) {
  const vowels = ["a", "e", "i", "o", "u"];
  let arrayInput = userInput.split("");
  if (vowels.includes(userInput.charAt(0))) {
    
    let firstLetter = arrayInput.slice(1);
    alert(firstLetter);
  
  } else {
    alert("not");
  }
}

$(document).ready(function() {
  $("form#inputForm").submit(function(event) {
    event.preventDefault();
    const userInput = $("input#userInput").val();
    pigLatin(userInput);
  });
});

// const enteredNumber = function(inputtedArray) {
//   if (inputtedArray === 0) {
//     alert("Please enter a sentence"); 
//   }
// }
