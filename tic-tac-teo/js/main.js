//global variable
var first;
// target selector
let turn = document.querySelector('.turn');

// button Event handlers
document.querySelector('.btn1').addEventListener('click', xNo)
document.querySelector('.btn2').addEventListener('click', xNo)
document.querySelector('.btn3').addEventListener('click', xNo)
document.querySelector('.btn4').addEventListener('click', xNo)
document.querySelector('.btn5').addEventListener('click', xNo)
document.querySelector('.btn6').addEventListener('click', xNo)
document.querySelector('.btn7').addEventListener('click', xNo)
document.querySelector('.btn8').addEventListener('click', xNo)
document.querySelector('.btn9').addEventListener('click', xNo)

// event handler function
function xNo(click){
    if(first === 'player'){
        click.target.value = 'X';
    }else if(first === 'bot'){
        click.target.value = 'O';
    }
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


// create logic to switch between player and bot

// create bot's logic to select move


// create the win condition or draw

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
