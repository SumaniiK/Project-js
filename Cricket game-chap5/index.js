function handleClick(e) {
 

  let playerChoice = e.currentTarget.id;

  let computerChoice=Choice();  
  let result="";
  
  
  if (playerChoice===computerChoice){
    
    result="Its a Tie";
    score.tie+=1;

  }
  else if((playerChoice==='bat' && computerChoice==='ball')|| (playerChoice==='ball' && computerChoice==='stump')|| (playerChoice==='stump' && computerChoice==='bat')){
   
    result="Player Won";
    score.win+=1;
  }
    
  else{
    
    result="Computer Won";
    score.lose+=1;
  }
  
  localStorage.setItem('score',JSON.stringify(score));

  document.querySelector('#user-move').innerText=`Player's Choice: ${playerChoice}`;playerChoice;
  document.querySelector('#Comp-move').innerText=`Computer's Choice: ${computerChoice}`;computerChoice;
  document.querySelector('#result').innerText=result;
  document.querySelector('#score').innerText=`Wins: ${score.win}, Losses: ${score.lose}, Ties: ${score.tie}`;
}
document.getElementById('bat').addEventListener('click',handleClick);
document.getElementById('ball').addEventListener('click',handleClick);
document.getElementById('stump').addEventListener('click',handleClick);
document.getElementById('reset').addEventListener('click', reset);



let scoreStr = localStorage.getItem('score');
let score;

if (scoreStr !== null) {
  score = JSON.parse(scoreStr);
} else {
  score = { win: 0, lose: 0, tie: 0 };
}

function reset(){
  score.win=0;
  score.lose=0;
  score.tie=0;
  localStorage.removeItem('score');  
  

  document.querySelector('#score').innerText = `Wins: ${score.win}, Losses: ${score.lose}, Ties: ${score.tie}`;


  document.querySelector('#user-move').innerText = "";
  document.querySelector('#Comp-move').innerText = "";
  document.querySelector('#result').innerText = "";
  console.log("Reset clicked");
}



function Choice(){
  let CompChoice=Math['random']()*3
  if(CompChoice>=0 && CompChoice<1){
    return 'bat'
  }
  else if(CompChoice>=1 && CompChoice<2){
    return 'ball'
  }
  else{
    return 'stump'
  }

}
