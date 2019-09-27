var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("color-display");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

for (i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener('click', function() {
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
        reset();
    })
};

function reset () {
    //generate new colors
    colors = generateRandomColors(numOfSquares);
    //pick new random color from arr
    pickedColor = pickColor();
    //change color display to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    //Reset Message
    message.textContent = "";
    //change square colors
    for (var i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.display = "block";

            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
};

// easyButton.addEventListener('click', function() {
//     easyButton.classList.add("selected");
//     hardButton.classList.remove("selected");
//     numOfSquares = 3;
//     colors = generateRandomColors(numOfSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(i = 0; i < squares.length; i++) {
//         if(colors[i]) {
//             squares[i].style.background = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
// });

// hardButton.addEventListener('click', function() {
//     easyButton.classList.remove("selected");
//     hardButton.classList.add("selected");
//     numOfSquares = 6;
//     colors = generateRandomColors(numOfSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(i = 0; i < squares.length; i++) {
//         squares[i].style.background = colors[i];
//         squares[i].style.display = "block";
//     }
// });

resetButton.addEventListener('click', function () {
    reset();
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    //colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add event for click to squares
    squares[i].addEventListener('click', function (){
    //compare picked versus answer
    var clickedColor = this.style.backgroundColor;

    if(clickedColor === pickedColor) {
        message.textContent = "Correct!";
        resetButton.textContent = "Play Again?"
        changeColors(clickedColor);
        h1.style.background = clickedColor;
    } else {
        this.style.backgroundColor = "#232323";
        message.textContent = "Try Again!";
    }
    });
}

function changeColors (color) {
    for( i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor () {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors (num) {
    var arr = [];

    for(i = 0; i < num; i++) {
        arr.push(randomColor());
    }

    return arr;
}

function randomColor () {
    var r = Math.floor(Math.random() * 255 + 1);
    var g = Math.floor(Math.random() * 255 + 1);
    var b = Math.floor(Math.random() * 255 + 1);

    return "rgb(" + r + ", " + g + ", " + b + ")";
  
}