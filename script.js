let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".rstbtn");
let winCont = document.querySelector(".winCont");
let newBtn = document.querySelector(".newBtn");
let winMsg = document.querySelector(".win");


let turnO = true; // player X // player O

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
]

// event 

const rstBtn = () =>{
    turnO = true;
    enableBoxes();
    winCont.classList.add("hide");
}

boxes.forEach((box) =>{
    box.addEventListener("click", () =>{

        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        
        checkWinner()
    })
})


const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) =>{
    winMsg.innerText = `Congratulation!! The winner is ${winner}`;
    winCont.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () =>{
    for(let Pattern of winPatterns){
        let pos1 = boxes[Pattern[0]].innerText;
        let pos3 = boxes[Pattern[1]].innerText;
        let pos2 = boxes[Pattern[2]].innerText;
        
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
            }
        }

    }
}
newBtn.addEventListener("click", rstBtn);
resetbtn.addEventListener("click", rstBtn);