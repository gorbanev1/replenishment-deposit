'use strict';
const depositAmountInputEl=document.getElementById('amount-input');
const periodInputEl=document.getElementById('period-input');
const totalAmountEl=document.getElementById('total');
const profitEl=document.getElementById('profit');
const percentEl=document.getElementById('percent');
function calculateIncome(depositAmount, depositPeriod){
    let interestRate;
    if (3<=depositPeriod&&depositPeriod<6){
        interestRate=2;
    } else if (depositPeriod<9){
        interestRate=2.2;
    } else if (depositPeriod<12) {
        interestRate = 2.3;
    } else if (depositPeriod<18) {
        interestRate = 2.6;
    } else if (depositPeriod===18) {
        interestRate = 2.7;
    }
    //const income=Number(((depositAmount*interestRate*depositPeriod)/12).toFixed());
    //const totalAmount=(depositAmount*Math.pow((1+(interestRate*depositPeriod)/(12*100)),depositPeriod)).toFixed();
    const totalAmount=(depositAmount*Math.pow((1+(interestRate)/(12*100)),depositPeriod)).toFixed();

    const income=totalAmount-depositAmount;
    return {
        income,
        totalAmount,
        interestRate,
    };
}
function handleSubmit(evt) {
    evt.preventDefault();
    const deposit = Number(depositAmountInputEl.value);
    const period = Number(periodInputEl.value);
    const result = calculateIncome(deposit, period);
    totalAmountEl.textContent=`${result.totalAmount}`;
    profitEl.textContent=`${result.income}`;
    percentEl.textContent=`${result.interestRate}`;
}
const formEL=document.getElementById('deposit-form');
formEL.addEventListener('submit',handleSubmit);