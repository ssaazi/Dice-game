/*
Game Rules
-The game has 2 player, playing  in round
- In each turn,a player rolls  adice a many times a s he whishes. Each result get added to his ROUND 
score
-But, if the player rolls a 1, all his Round  score get lost. AFter that, it`s the next player`s turn 
-The player can choose to 'Hold', which means that his ROUND score gats added to hiS GLoBAL score. After that , it`s the next player`s turn
-the first player to reach 200 point on GLOBAL score wins the game  
*/ 

var score, roundScore, activePlayer, dice, gamePlaying;

function init(){
    gamePlaying =true;
    score= [0,0];
roundScore = 0;
activePlayer = 0;

document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = '0';                                   
document.getElementById('score-1').textContent = '0';                                   
document.getElementById('current-0').textContent = '0';                                   
document.getElementById('current-1').textContent = '0';

document.getElementById('name-0' ).textContent = 'player 1';
document.getElementById('name-1' ).textContent = 'player 2'; 



document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
}

// dice = Math.floor(Math.random() * 6) + 1;
//math.floor is used for change decimal number into whole number
//math.random is for creaing random number 
// console.log(dice);
 //querySelector is used to select content from html
 //textContent is used to change content from html

//  document.querySelector('#current-' + activePlayer). textContent = dice;

//  document.querySelector('#current-' + activePlayer). innerHTML = '<en>' + dice +'</en>';
// var x =  document.querySelector('#score-0'). textContent;
// console.log(x);


 
function nextPlayer(){
 // Nextplayer
        //method 1
        activePlayer === 0 ? activePlayer  = 1 : activePlayer =0; 
        roundScore = 0;
        document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
            document.querySelector('.dice').style.display = 'none';
        
        
        // //method 2(it has some error)
        // document.querySelector('.dice').style.display = 'none';
        // if(activePlayer === 0){
        //     activePlayer  = 1;
        //     roundScore = 0;
        //     document.querySelector('.player-0-panel').classList.toggle('active');
        //     document.querySelector('.player-1-panel').classList.toggle('active');
        // //    document.querySelector('.player-0-panel').classList.remove('active');
        // // document.querySelector('.player-1-panel').classList.add('active');
        
        // }else{
        //     activePlayer = 0;
            
        // }
}
document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = '0';                                   
document.getElementById('score-1').textContent = '0';                                   
document.getElementById('current-0').textContent = '0';                                   
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click',function() {
    if(gamePlaying){
        //1 random number
    dice = Math.floor(Math.random() * 6) + 1;

    //2. Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'image/dice'+ dice +'.png';
    document.querySelector('.dice').style.display = 'block';
    
    //3.update the round score if the rolled number was NOT a 1
    if(dice !== 1){
        //Add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer). textContent = roundScore;

    }else{
      
     nextPlayer();
    }
    }
    
});
function change(){
  if(gamePlaying){
   //Add Current score to grobal  score
   score[activePlayer]  += roundScore;

   //Update the UI
   document.querySelector('#score-' + activePlayer).textContent = score[activePlayer]; 
   
   //check if player won the game
   if(score[activePlayer] >= 100){
       document.querySelector('#name-' + activePlayer).textContent = 'WINNER!!!'; 
       document.querySelector('.dice').style.display = 'none';
       document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
       document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active'); 
       gamePlaying = false;
   }else{
       nextPlayer();
   }
   //next player
   nextPlayer();
}

}

document.querySelector('.btn-hold').addEventListener('click', function() {
change();
 
});
document.querySelector('.btn-new').addEventListener('click', init);
