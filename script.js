const billAmount = document.getElementById("bill-amount");
const cashGiven = document.getElementById("cash-given");
const checkBtn = document.getElementById("check");
const notes = document.querySelectorAll(".noOfNotes");
const nextBtn = document.getElementById("next");
const cashLabel = document.getElementById("cash");

cashLabel.style.display = "none";
checkBtn.style.display="none";
cashGiven.style.display="none";

nextBtn.addEventListener("click",()=>{
    if(billAmount.value <0){
        alert("Bill amount can't be less than 0");
    }
    else{
        cashLabel.style.display = "block";
        checkBtn.style.display="block";
        cashGiven.style.display="block";
    }
})


const denominations = [2000,500,100,20,10,5,1];

checkBtn.addEventListener("click",validateBillAmountAndCash);

function validateBillAmountAndCash(){
    let cashReturned = cashGiven.value - billAmount.value;
    if(cashReturned <0){
        alert("Cash Given should be atleast equal to Bill Amount");
    }
    else{
        calculateNumberOfNotes();
    }
}

function calculateNumberOfNotes(){
    let cashToBeReturned = cashGiven.value - billAmount.value;
    for(let i=0;i<denominations.length;i++){
        let numberOfNotes = Math.trunc(cashToBeReturned/denominations[i]);
        cashToBeReturned = cashToBeReturned%denominations[i];
        notes[i].innerText="";
        if(numberOfNotes>0){
            notes[i].innerText = numberOfNotes;
        }
    }
}
