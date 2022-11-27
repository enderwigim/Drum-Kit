

var everyButton = document.querySelectorAll("div .drum");

for (i = 0; i < everyButton.length; i++) {

    everyButton[i].addEventListener("click", handleClick);
}

document.addEventListener("keydown", function (event){
  var keyDown = event.key;
  makeSound(keyDown);
  buttonAnimation(keyDown);
})

function handleClick() {

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  }


function makeSound(switchInput) {
    switch (switchInput) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;

        case "a":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
        break;

        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;

        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;

        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;

        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;

        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;

      default: console.log(switchInput)

    }

};

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.toggle("pressed");

    setTimeout(function() {
      activeButton.classList.toggle("pressed");
    }, 150);
}
