//variables

const words = ["Georgia","Armenia","Russia","Thailand","Indonesia","Singapore","Ethiopia","Guinea","Kazakhstan","Tajikistan","Uzbekistan",];
let country,missed,guessed;

let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
        'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
        'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        



//functions
function secretWord(){
    country = words[Math.floor(Math.random() * words.length)];
}
secretWord();