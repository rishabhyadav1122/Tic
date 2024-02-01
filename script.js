let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn")
let newGameBtn = document.querySelector("#new-btn")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let pl1 = prompt("Enter the name of Player 1")
let pl2 = prompt("Enter the name of Player 2")

let canvas = document.querySelector("#confetti")
const jsConfetti = new JSConfetti()

let turnO =true; 

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

// const start =()=>{
//     setTimeout(function(){
//         confetti.start();
//     })
// }
// const stop =()=>{
//     setTimeout(function(){
//         confetti.stop();
//     })
// }

const resetGame=()=>{
     turnO=true;
     enableBoxes();
     msgContainer.classList.add("hide")
    //  stop();

}

boxes.forEach((box) =>{
    box.addEventListener("click" , () =>{
       
        if(turnO)
        {
            box.innerText = "O";
            turnO =false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled  = true;

        checkWinner();
    })
})


const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner=(winner) =>{
    msg.innerText  = `Congratulations \nWinner is\n ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner =()=>{
     for(let pattern of winPatterns)
     {
       

        let pos1val = boxes[pattern[0]].innerText
        let pos2val = boxes[pattern[1]].innerText
        let pos3val = boxes[pattern[2]].innerText
        
        if(pos1val != "" && pos2val != "" && pos3val != "" )
        {
            if(pos1val === pos2val && pos2val === pos3val){
                
                if(pos1val === 'X')
               { showWinner(pl2)
               
                jsConfetti.addConfetti({
                    confettiRadius: 6,
                    confettiNumber: 1500,
                  })
                
               }
              else  if(pos1val === 'O')
               { showWinner(pl1)
               
                jsConfetti.addConfetti({
                    confettiRadius: 6,
                    confettiNumber: 1500,
                  })
               }
                
            }
        }
     }
}

newGameBtn.addEventListener("click" , resetGame)
resetBtn.addEventListener("click" , resetGame)

