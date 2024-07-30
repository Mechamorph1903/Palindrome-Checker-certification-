const userInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const resultBox = document.getElementById('result');


const isPalindrome = (word) => {
    const cleanWord = word.trim().split("").filter((char) => {
    return /[a-zA-Z0-9]/.test(char)
}).join("").toLowerCase();
    const reversedWord = cleanWord.toLowerCase().split("").reverse().join("")

    console.log(cleanWord)
    console.log(reversedWord)
   if (cleanWord === reversedWord) {
    const result = document.createElement('p');
    result.innerText = `${word} is a palindrome`;
    resultBox.innerHTML = ``;
    resultBox.appendChild(result);
    resultBox.classList.remove('hide');
    return true;
   } else {
    const result = document.createElement('p');
    result.innerText = `${word} is not a palindrome`;
    resultBox.innerHTML = ``;
    resultBox.appendChild(result);
    resultBox.classList.remove('hide');
    return false;
   }
};

checkBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const inputText = userInput.value.trim();

    if (inputText == "") {
        alert("Please input a value");
    } else {
        isPalindrome(inputText);
    }

});

