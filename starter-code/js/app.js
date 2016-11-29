console.log('app.js loaded!');

// initialize the application
angular
  .module("hangmanApp", [])
  .controller('hangmanController', hangmanController);

function hangmanController() {
 var vm = this;
 console.log("hello world");
 vm.game = new HangmanGame('elephant');
 this.guess = '';
 this.guessLetter = guessLetter;


 function guessLetter() {
   var guess = this.guess;
   var result = this.game.guess(guess);
   if (result === 'WIN') {
    alert('you win!');
 } else if (result === 'LOSE') {
   alert('oh no! you lost!');
 }
 this.guess = '';
 }
};
