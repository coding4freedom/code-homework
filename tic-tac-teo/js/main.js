//global variable
var first;
// target selector
let turn = document.querySelector('.turn');
let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');
let btn4 = document.querySelector('.btn4');
let btn5 = document.querySelector('.btn5');
let btn6 = document.querySelector('.btn6');
let btn7 = document.querySelector('.btn7');
let btn8 = document.querySelector('.btn8');
let btn9 = document.querySelector('.btn9')

// button Event handlers
btn1.addEventListener('click', xNo)
btn2.addEventListener('click', xNo)
btn3.addEventListener('click', xNo)
btn4.addEventListener('click', xNo)
btn5.addEventListener('click', xNo)
btn6.addEventListener('click', xNo)
btn7.addEventListener('click', xNo)
btn8.addEventListener('click', xNo)
btn9.addEventListener('click', xNo)
document.querySelector('.btn-reset').addEventListener('click', resetGame)

// disable button onces its selected
function disableBtn(btn){
    btn.target.disabled = true;
}

// check win condition
// check diagonal win
function checkDiagonal(){
    if((btn1.value && btn5.value && btn9.value) === "X"
        || (btn3.value && btn5.value && btn7.value) === "X"){        
        console.log('it works X')
    }else if((btn1.value && btn5.value && btn9.value) === "O"
        || (btn3.value && btn5.value && btn7.value) === "O"){
        console.log('it works O')  
    }
}

// check column win
function checkColumn(){
    if((btn1.value && btn4.value && btn7.value) === "X" 
        || (btn2.value && btn5.value && btn8.value) === "X"
        || (btn3.value && btn6.value && btn9.value) === "X"){
        console.log('its column X')
    }else if((btn1.value && btn4.value && btn7.value) === "O"
        || (btn2.value && btn5.value && btn8.value) === "O"
        || (btn3.value && btn6.value && btn9.value) === "O"){
        console.log('its column O')
    }
}


// event handler function
function xNo(click){
    if(first === 'player'){
        click.target.value = 'X';
        first = 'bot'
    }else if(first === 'bot'){
        click.target.value = 'O';
        first = 'player'
    }
    disableBtn(click);
    checkDiagonal();
    checkColumn();
}
function resetGame(){
    window.location.reload();
}

// logic for which player goes first
function goFirst(){
    let flip = Math.floor(Math.random() * 30);
    return flip <= 16 ? "player": "bot" ;     
}
// goFirst function check
// console.log(goFirst)
function checkTurn(func){
    
    let random = func;
    // display to player who turn it is
    if(random === 'player'){
        first = 'player';
        turn.innerText = 'Player 1 goes first, using X!' 
    }
    else if(random === 'bot'){
        first = 'bot';
        turn.innerText = 'Computer will go first, using O!'
    }
    // console.log(first)
    return first;
}
checkTurn(goFirst());


// create logic to switch between player and bot (xNo function handles this now)


// create bot's logic to select move


// create the win condition or draw
// check diagonal

/*
// class for game (game name, reset btn, greet msg, )
class Game{
    constructor(name){
        this._name = name
    }
    get name(){
        return this._name;
    }
    greeting(){
        alert(`Welcome to ${this._name} hope you enjoy yourself!`)
    }
}
// create feature for players turns
class Turn {
    constructor(){

    }
    message(){

    }
    first(){

    }
}
// create bot's logic to select move

// create logic for win condition


*/
