 function computerPlay(){
    const computerChoice= Math.floor(Math.random()*3)
    switch (computerChoice){
        case 0:
            x= "paper"
            break;
        case 1:
             x= "scissors"
             break;
        case 2:
            x= "rock"
        
        break;
    
     
    }

       
    
}
const promptVar= prompt("choose rock paper or scissors")
const userChoice= promptVar.toLowerCase()






function game (){
  
 
    computerPlay()
        
    
    if
       (userChoice==x)
       { result="Draw!"}
    else if
        (userChoice=="rock" && x=="scissors")
            {result="User Wins!"}
    else if
         (x=="rock" && userChoice=="scissors")
            {result="Computer Wins!"}
    else if
         (userChoice=="paper" && x=="scissors")
            result="Computer Wins!"
    else if
         (x=="paper" && userChoice=="scissors")
            {result="User Wins!"}
    else if        
     (x=="rock" && userChoice=="paper")
            {result="User Wins!"}
            
    else if
    (x=="paper" && userChoice=="rock")
            {result="Computer Wins!"}
    else (
        result= "Seriously dude"
    )




console.log(userChoice)
console.log(x)
  console.log(result)
}

game(

)