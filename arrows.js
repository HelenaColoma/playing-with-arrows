'use strict'

// When the documents are loaded, selects the main from the HTML and initiates the initGameClick function when it's clicked 
window.addEventListener('DOMContentLoaded', function(e) {
    document.querySelector('main').onclick = initGameClick;
});

// Selects the div with the "active" class and passes is onto the next div 
function initGameClick(e) {
    var current = document.querySelector('div.active');
    var next = current.nextElementSibling;

    if (next) {
        current.classList.remove('active');
        next.classList.add('active');
    }
}

// Waits for any keydown event to launch the moveElement function 
window.addEventListener('keydown', moveElement);

// Var animatedElement stores the icon with "movingIcon" ID from the HTML document. Then we set its initial position at 0,0 
var animatedElement = document.getElementById('movingIcon');
animatedElement.style.left = 0;
animatedElement.style.top = 0;

// Var limit stores the div.active height minus the icon height (it's hardcoded, needs to be improven)
var limit = document.querySelector('div.active').clientHeight - 50;

// Var iconSpeed is the number of pixels the icon is moved everytime and arrowkey is pressed 
var iconSpeed = 10;

// Function moveElement sets how the icon is moved around. Inside the switch, every case stands for one of the arrowkeys. The if statements allow the icon to move only inside the limits of the blue div 
function moveElement(e) {
    switch (event.key) {
        case "ArrowLeft":
            // Left arrowkey 
            // Also, it changes the direction the icon is facing to the left 
            if (parseInt(animatedElement.style.left) >= iconSpeed) {
                animatedElement.style.left = parseInt(animatedElement.style.left) - iconSpeed + 'px';
                animatedElement.style.transform = 'scale(-1, 1)';  
            }
            break;
        case "ArrowRight":
            // Right arrowkey 
            // Also, it changes the direction the icon is facing to the right 
            if (parseInt(animatedElement.style.left) <= (limit - iconSpeed)) {
                animatedElement.style.left = parseInt(animatedElement.style.left) + iconSpeed + 'px';
                animatedElement.style.transform = 'scale(1, 1)';
            }
            break;
        case "ArrowUp":
            // Up arrowkey 
            if (parseInt(animatedElement.style.top) >= iconSpeed) {
                animatedElement.style.top = parseInt(animatedElement.style.top) - iconSpeed + 'px';
            }
            break;
        case "ArrowDown":
            // Down arrowkey 
            if (parseInt(animatedElement.style.top) <= (limit - iconSpeed)) {
                animatedElement.style.top = parseInt(animatedElement.style.top) + iconSpeed + 'px';
            }
            break;
    }
};

