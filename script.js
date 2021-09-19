let billInput = document.querySelector(".calculator .inputs > div .bill .inputdiv input"),
    tipPercentBtns = document.querySelectorAll(".tippercent button"),
    numberOfPeopleInput = document.querySelector(".calculator .inputs > div .numberofpeople .inputdiv input"),
    customTipInput = document.querySelector(".tippercent input"),
    tipAmount = document.querySelector(".tipamountnumber span"),
    totalValue = document.querySelector(".totalnumber span")
    resetBtn = document.querySelector(".outputs .outputcont button"),
    errorMsg = document.querySelector(".errormsg");

    console.log(tipAmount, totalValue);
// console.log(billInput, tipPercentBtns, numberOfPeopleInput, customTipInput,resetBtn );
let btnPercentValue,billVal, numberOfPeople ;


function btnsFunc(){
    tipPercentBtns.forEach(e=>{
        e.classList.remove("btn-active")
    });
    this.classList.add("btn-active");
    btnPercentValue = +this.getAttribute("data-percent");
    // console.log(btnPercentValue , billVal , numberOfPeople);
    calculate(billVal, btnPercentValue, numberOfPeople)
}
function peopleFunc(){
    numberOfPeople = +numberOfPeopleInput.value;
    // console.log(numberOfPeople);
    calculate(billVal, btnPercentValue, numberOfPeople)
}
function billFunc(){
    billVal = +billInput.value;
    // console.log(billVal);
    calculate(billVal, btnPercentValue, numberOfPeople)
}
function customTipFunc(){
    tipPercentBtns.forEach(e=>{
        e.classList.remove("btn-active")
    });
    btnPercentValue = (+customTipInput.value)/100;
    calculate(billVal, btnPercentValue, numberOfPeople)
}

function calculate(bill , tip , persons){
    if(bill == undefined || tip == undefined || persons == undefined){
        errorMsg.style.display = "block";
    }else{
        errorMsg.style.display = "none";
        // console.log(billVal ,btnPercentValue , numberOfPeople);
        tipAmount.textContent = ((billVal * btnPercentValue) / numberOfPeople).toFixed(2);
        totalValue.textContent = ((billVal/ numberOfPeople) + +tipAmount.textContent).toFixed(2);
        resetBtn.classList.add("reset-active");
    }
}

tipPercentBtns.forEach(btn=>{
    btn.addEventListener("click", btnsFunc)
});
numberOfPeopleInput.addEventListener("input", peopleFunc);
billInput.addEventListener("input", billFunc);
customTipInput.addEventListener("input" , customTipFunc);
resetBtn.addEventListener("click",function(){
    location.reload();
})