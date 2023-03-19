const inputBox = document.querySelector("#userInput");
const submitBtn = document.querySelector("#submitBtn");
const greetingDisplay = document.querySelector("#greeting");


submitBtn.addEventListener('click' , ()=> {
    let userName = inputBox.value;
    let greetingMessage = `Hello, ${userName}!` ; //backticks
    
    greetingDisplay.innerHTML = greetingMessage;
    inputBox.value ='';

});