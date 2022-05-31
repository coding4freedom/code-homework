// logic for which player goes first
function goFirst(){
    let flip = Math.floor(Math.random() * 30);
    return flip <= 16 ? "player": "bot" ;     
}
// goFirst function check
// console.log(goFirst)

// display to player who turn it is
// create logic to switch between player and bot


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
