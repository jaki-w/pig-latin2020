//Business Logic

let pigLatin = function(userInput) {
  words = userInput.split(" ");
  let pigLatinArray = [];

  words.forEach(function(word) { 

    let vowels = /[aeiou]/;
    let numbers = /[]
    let firstVowel = userInput.match(vowels);
    let firstVowelPostion = userInput.indexOf(firstVowel);

    if (userInput === "") {
        alert("Please enter a sentence"); 

    } else if (firstVowelPostion === 0) {
      pigLatinArray.push(word + "way");

    } else if (word.charAt(0) === "q" && word.charAt(1) === "u") {
      pigLatinArray.push(word.slice(2) + word.slice(0, 2) + "ay");

    } else {
      pigLatinArray.push(word.slice(firstVowelPostion) + word.slice(0, firstVowelPostion) + "ay");
    }
  });
  return pigLatinArray.join(" ") + ".";
}

//UI Logic
$(document).ready(function() {
  $("form#inputForm").submit(function(event) {
    event.preventDefault();

    let userInput = $("input#userInput").val();
    let result = pigLatin(userInput);
    
    $("#finalWord").text(result);
  });
});




 // } else if (userInput.charAt(0) !== vowels) {
  //   let firstLetterRemoved = arrayInput.slice(1);
  //   let removedLetter = userInput.charAt(0);
  //   //array is logging as typeOf function
    
  //   array.push(firstLetterRemoved);
  //   array.push(removedLetter);
  //   array.push("ay");
  //   $("#finalWord").text(pigLatinArray);
      
  // // } else if {