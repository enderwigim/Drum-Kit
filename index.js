

var everyButton = document.querySelectorAll("div .drum");

for (i = 0; i < everyButton.length; i++) {

    everyButton[i].addEventListener("click", handleClick);
}

function handleClick() { 
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
};