let x=0
cScore=0
pScore=0 
let result= document.querySelector('.result')
let playerScore=document.querySelector('.p-count')
let computerScore=document.querySelector(".c-count")
let userChoice="" 
let btns= document.querySelectorAll('button');


for (i of btns){
    i.addEventListener('click', function(){
        userChoice=event.target.value
        console.log(userChoice)
       gameOver()
        game()
       
    })

}
function computerPlay(){
    const computerChoice= Math.floor(Math.random()*3)
    switch (computerChoice){
        case 0:
            x= "paper"
            return x;
        case 1:
             x= "scissors"
             return x;
        case 2:
            x= "rock"
        console.log(x)
        return x    }}

    
   
function game(){
 
    computerPlay()
   
   
   

    
    if( userChoice=="rock" && x=="paper"){
       
        ++cScore
        
        computerScore.innerHTML=cScore
        result.innerHTML=x
        }
    
    else if ( userChoice=="rock" && x=="scissors"){
    
        
        ++pScore
        playerScore.innerHTML=pScore
        result.innerHTML=x}
    
    else if ( userChoice=="paper" && x=="rock"){
       
            ++pScore
        playerScore.innerHTML=pScore
            result.textContent=x
            }

    else if ( userChoice=="paper" && x=="scissors"){
       
                ++cScore
                console.log(cScore)
                computerScore.innerHTML=cScore
                result.innerHTML=x
              }
    
    else if ( userChoice=="scissors" && x=="rock"){
       
                    ++cScore
                    console.log(cScore)
                    computerScore.innerHTML=cScore
                    result.innerHTML=x
                    }
    else if ( userChoice=="scissors" && x=="paper"){
                       
                        ++pScore
                        playerScore.innerHTML=pScore
                        result.innerHTML=x
                        
                     
    }
else if
    (userChoice==x){
        result.textContent="Thats a tie try again!"
}

}

function gameOver(){
    if (cScore==5){
        alert("I win! Play again?")
        location.reload()
    }

    else if (pScore==5){
        alert("You win! Play again?")
       location.reload()
    }

}
    

  




