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
let n=1
let y= 1
let i=1







function game (){
  
    const promptVar= prompt("choose rock paper or scissors")
    const userChoice= promptVar.toLowerCase()
    
    computerPlay()
    
    
     if
        (userChoice=="rock" && x=="scissors")
            {n++
            i++
            }
    else if
         (x=="rock" && userChoice=="scissors")
            {
                y++
            i++}
    else if
         (userChoice=="paper" && x=="scissors")
            {
            y++
            i++}
    else if
         (x=="paper" && userChoice=="scissors")
            {
                n++
            i++}
    else if        
     (x=="rock" && userChoice=="paper")
            {
            n++
            i++}
            
    else if
    (x=="paper" && userChoice=="rock")
            {
                y++
           i++}
    else 
       { alert("Draw! Try again!")
        game()}
    

    if(i==5 && (y>n)){
        alert("Thats game! Computer wins!")
        
    }

    else if (i==5 && (n>y)){
alert("Thats game! You win!")
    }

    else if (i<5)
    game()
    console.log(i)
    console.log(n)
    console.log(y)



}
        







game(

)