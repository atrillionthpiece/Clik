// querySelector selects the very first element with the class "btn"
const BtnValue = document.querySelector(".btn"); 
const ResetBtn = document.querySelector(".reset");
const SuiSound = new Audio("sui.mp3");


let Clickcount = 0; 
function reset(){
    Clickcount = 0;
    BtnValue.textContent = "count:", Clickcount;
}
function count(){ 
    Clickcount++; 
    BtnValue.textContent = "count: " + Clickcount; 
    if(Clickcount%7===0){
        SuiSound.play();
    }
} 



ResetBtn.addEventListener('click', reset);
BtnValue.addEventListener('click', count);
