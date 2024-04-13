/*
DIFFICULTY LEVELS:

1 = +
2 = -
3 = *
4 = /
5 = ^
6 = SQUARE ROOT
7 = log() in base a (a is chosen by the user)

DIGITS NUMBER:

A = 1
B = 10
C = 100
D = 1000

*/

let difficulty = 9; //Max number achivable
let firstNumber = 0;
let secondNumber = 0;

let scrNumber = 0;
let strNumber = 0;
let ctrNumber = 0;


//CREATE THE NUMBER BY PUSHING THE DIGITS IN IT; "THE ARRAY"
let userResult = [];

//KEYBOARD KEYS CODE
document.getElementById("one").onclick = function add1() {
    userResult.push("1");
}
document.getElementById("two").onclick = function add2() {
    userResult.push("2");
}
document.getElementById("three").onclick = function add3() {
    userResult.push("3");
}
document.getElementById("four").onclick = function add4() {
    userResult.push("4");
}
document.getElementById("five").onclick = function add5() {
    userResult.push("5");
}
document.getElementById("six").onclick = function add6() {
    userResult.push("6");
}
document.getElementById("seven").onclick = function add7() {
    userResult.push("7");
}
document.getElementById("eight").onclick = function add8() {
    userResult.push("8");
}
document.getElementById("nine").onclick = function add9() {
    userResult.push("9");
}
document.getElementById("zero").onclick = function add0() {
    userResult.push("0");
}
document.getElementById("minusKey").onclick = function addminus() {
    userResult.push("-");
}

//SETTINGS BOX TOGGLE
document.getElementById("set-button").onclick = function toggleDisplay(){
    let show = document.getElementById("settings");

    if (show.style.display === "none") {
        show.style.display = "block";

    } else {
        show.style.display = "none"    
    }
}

//SET DIFFICULTY
document.getElementById("difOne").onclick = function cd1(){
    difficulty = 9;
}
document.getElementById("difTwo").onclick = function cd2(){
    difficulty = 99;
}
document.getElementById("difThree").onclick = function cd3(){
   difficulty = 999; 
}

//GAME MODES
let gameMode = "sum";

document.getElementById("sum").onclick = function () {
    gameMode = "sum";
    console.log(gameMode);
}
document.getElementById("minus").onclick = function () {
    gameMode = "minus";
    console.log(gameMode);
}
document.getElementById("times").onclick = function () {
    gameMode = "times";
    console.log(gameMode);
}
document.getElementById("division").onclick = function () {
    gameMode = "division";
    console.log(gameMode);
}

/*
document.getElementById("exponent").onclick = function () {
    gameMode = "exponent";
    console.log(gameMode);
}
document.getElementById("sqrRoot").onclick = function () {
    gameMode = "sqrRoot";
    console.log(gameMode);
}
document.getElementById("loga").onclick = function () {
    gameMode = "loga";
    console.log(gameMode);
}
*/

//GAME 
document.getElementById("gen").onclick = function game() {

    firstNumber = Math.floor(Math.random() * difficulty);
    secondNumber = Math.floor(Math.random() * difficulty);

    //DISPLAY ON -SCREEN-
    if (gameMode == "sum") {
        document.getElementById("display").innerHTML = `${firstNumber} + ${secondNumber}`;

    }else if (gameMode == "minus") {
        document.getElementById("display").innerHTML = `${firstNumber} - ${secondNumber}`;
        
    }else if (gameMode == "times") {
        document.getElementById("display").innerHTML = `${firstNumber} * ${secondNumber}`;
        
    }else if (gameMode == "division") {
        document.getElementById("display").innerHTML = `${firstNumber} ÷ ${secondNumber}`;
        
    }else if (gameMode == "exponent") {
        document.getElementById("display").innerHTML = `Work in progress 🚧🏗️`;

    }else if (gameMode == "sqrRoot") {
        document.getElementById("display").innerHTML = `Work in progress 🚧🏗️`;

    }else if (gameMode == "loga") {
        document.getElementById("display").innerHTML = `Work in progress 🚧🏗️`;
        
    }

    //DEBUG
    console.log(`Prompt: ${firstNumber}, ${secondNumber}`);
}


//SEND FINAL RESULT
document.getElementById("submit").onclick = function submit() {

    //create procedural verifier
    let userInputString = userResult.join("");  //unisce userResult in una stringa

    let res = parseInt(userInputString, 10);    //10 indica la base numerica decimale

    //check result
    if (gameMode == "sum") {
    
        if (res == firstNumber + secondNumber) {
            scrNumber += 10;
            strNumber += 1;
            ctrNumber += 1;

        } else {
            strNumber += 0;
            ctrNumber += 1;
        }

    }else if (gameMode == "minus") {

        if (res == firstNumber - secondNumber) {
            scrNumber += 15;
            strNumber += 1;
            ctrNumber += 1;

        } else {
            strNumber += 0;
            ctrNumber += 1;
        }
        
    }else if (gameMode == "times") {

        if (res == firstNumber * secondNumber) {
            scrNumber += 20;
            strNumber += 1;
            ctrNumber += 1;

        } else {
            strNumber += 0;
            ctrNumber += 1;
        }
        
    }else {

        if (res == firstNumber / secondNumber) {
            scrNumber += 30;
            strNumber += 1;
            ctrNumber += 1;

        } else {
            strNumber += 0;
            ctrNumber += 1;
        }
        
    }

    document.getElementById("scr-number").innerHTML = scrNumber;
    document.getElementById("str-number").innerHTML = strNumber;
    document.getElementById("ctr-number").innerHTML = ctrNumber;

    //empty "the array" 
    userResult = [];

    //AUTO RESTART
    firstNumber = Math.floor(Math.random() * difficulty);
    secondNumber = Math.floor(Math.random() * difficulty);

    if (gameMode == "sum") {
        document.getElementById("display").innerHTML = `${firstNumber} + ${secondNumber}`;

    }else if (gameMode == "minus") {
        document.getElementById("display").innerHTML = `${firstNumber} - ${secondNumber}`;
        
    }else if (gameMode == "times") {
        document.getElementById("display").innerHTML = `${firstNumber} * ${secondNumber}`;
        
    }else if (gameMode == "division") {
        document.getElementById("display").innerHTML = `${firstNumber} ÷ ${secondNumber}`;
        
    }else if (gameMode == "exponent") {
        document.getElementById("display").innerHTML = `Work in progress 🚧🏗️`;

    }else if (gameMode == "sqrRoot") {
        document.getElementById("display").innerHTML = `Work in progress 🚧🏗️`;

    }else if (gameMode == "loga") {
        document.getElementById("display").innerHTML = `Work in progress 🚧🏗️`;
        
    }

    //DEBUG
    console.log(`User answer: ${res}`);
}