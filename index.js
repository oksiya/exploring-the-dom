console.log(document);

// DOM references
const myMessage = document.querySelector('.myMessage');
console.log(myMessage);

const theMessageButton = document.querySelector('.theMessageButton');
const clearMessageButton = document.querySelector('.clearMessageButton');
const inputBox = document.querySelector('.theInputValue');
const fruitList = document.querySelector(".fruits");

// Show a value in the DOM
myMessage.innerText = 'This is a message in the DOM!';
setTimeout(function(){
    myMessage.innerText = 'This is a message in the DOM!';
}, 3000);

// Show a message when a button is clicked
theMessageButton.addEventListener('click', function() {
    if (inputBox.value.trim().length > 0) {
       myMessage.innerText = inputBox.value;
    }
});

clearMessageButton.addEventListener('click', function() {
    myMessage.innerText = '';
});

// Enter and show a value
myMessage.addEventListener('click', function() {
    myMessage.classList.toggle('darkmode');
});

// Create a new DOM element
const fruits = ['Apples', 'Pears', 'Oranges', 'Grapes', 'Bananas'];
for(let i = 0; i < fruits.length; i++){
   const fruit = fruits[i];
   const li = document.createElement('li');
   li.innerText = fruit;
   fruitList.appendChild(li);
}
