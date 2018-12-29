'use strict';

let numberToGuess;
let userGuessNumber;
let min = 1000;
let max = 9999;
playGame();

//Creates number as string
//Recursevly checks if all digits in the number are different
function getRandomNumber(min, max) {
    let  isDifferent = false;
    let number=null;
    while(!isDifferent){
        number = Math.floor(Math.random() * (max - min + 1) + min);
        number=number.toString();
        for (let i =0; i<=3; i++)
        {
            if(i !== number.lastIndexOf(number[i])){
                break;
            } 
        }
        isDifferent = true;
    }
    return number.toString();
} 

//ask user to put another number
function askNumber(){
    //userGuessNumber = prompt('Guess number');
    return +userGuessNumber;
}
 
//check if user's number equal to secret number
function isGuessed(userGuessNumber, numberToGuess)
{
    if(userGuessNumber===numberToGuess)
        return true;
    else return false;
}

//matching digits in different positions
function getCows(userGuessNumber, numberToGuess){  
    let count=0;
    for (var i = 0; i <= 3; i++)
    {
        if(numberToGuess.lastIndexOf(userGuessNumber[i])!=-1)
        {
            count++;
        }
    }
    return count;    
}

//matching digits in different positions
function getBulls(userGuessNumber, numberToGuess){
    let count=0;
    for (var i = 0; i <= 3; i++)
    {
        if(userGuessNumber[1]===numberToGuess[i])
        {
            count++;
        }
    }
    return count;
}

function printInBrowser(text)
{

    let newDiv = window.document.createElement('div');
    let newContent = document.createTextNode (text);
    newDiv.appendChild(newContent);
    document.body.appendChild(newDiv);
}

function playGame()
{
    let check =  false;
    numberToGuess = getRandomNumber(min, max);

    while(!check){
         
        userGuessNumber = askNumber();
        check = isGuessed(userGuessNumber,numberToGuess);
        let cows = getCows(userGuessNumber, numberToGuess);
        let bulls = getBulls(userGuessNumber, numberToGuess);
        printInBrowser('cows: ' + cows + ' , bulls: ' + bulls);
    }
    if (check)
    { 
        printInBrowser('you won');
    }
    
    playGame();
}

