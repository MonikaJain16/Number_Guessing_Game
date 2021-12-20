/*About game
    1.Player must guess a number between a minimum and a maximum value (for now between 1 and 10)
    2.Palyer gets a certain amount of guesses (for now 3)
    3.Notify the player of guesses remaining
    4.Notify the player of the correct answer on lossing
    5.Let player choose to play again
*/

//Variables for game values
let min=1, 
    max=10, 
    guessesLeft=3,
    winningNum=getRandomNum();

//UI elements
const game=document.getElementById('game');
const minNum=document.querySelector('.min-num');
const maxNum=document.querySelector('.max-num');
const guessbtn=document.querySelector('#guess-btn');
const guessInput=document.querySelector('#guess-input');
const msg=document.querySelector('.msg');

//Assign UI min and max
minNum.textContent=min;
maxNum.textContent=max;

//Play again eventlistner
game.addEventListener('mousedown',function(e){
    if(e.target.className==='play-again'){
        window.location.reload();
    }
})
//Listen for guess
guessbtn.addEventListener('click',function(){
    let guess=parseInt(guessInput.value);

    //validating value
    if(guess<min || guess>max || isNaN(guess))
    {
        showMessage('Please Enter a value between '+ min+' to '+max,'red');
    }
    else{
         //Game Won or over
         if(guess===winningNum){
             inputBoxSetting('green',true,winningNum);
             showMessage('Hurreyy!!!  You Won!!! That\'s a correct guess...','green');
             guessbtn.value='Play Again';
             guessbtn.className+='play-again';
         } 
         else{ //Game continues or play again
             if(guessesLeft!=1){
                 guessesLeft--; 
                 inputBoxSetting('red',false,'');
                 showMessage('Oops!! That\'s a wrong guess..You have '+guessesLeft+' guess left. Good Luck..','white');
             }
             else{
                 inputBoxSetting('red',true,'');
                 showMessage('Alas!! Game Over..Better luck next time.\nThe Correct Number was '+winningNum,'red');
                 guessbtn.value='Play Again';
                 guessbtn.className+='play-again';
             }
        }
    }
})

//Function to Get Random Number
function getRandomNum(){
    return (Math.floor(Math.random()*(max-min+1)+min));
} 

//Function to change input box property
function inputBoxSetting(borColor,onOff,content){
    guessInput.style.borderColor=borColor;
    guessInput.value=content;
    guessInput.disabled=onOff;
    
}


function showMessage(message,colour){
    msg.style.color=colour;
    msg.textContent=message;
}