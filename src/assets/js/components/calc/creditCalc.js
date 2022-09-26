
import addMonths from "../../helpers/date.js";
import percentValue from "../../helpers/percent.js";
import numberFormat from "../../helpers/numberFormat.js";
import { calc,
         calcSum,
         calcOverpay,
         calcTotal, 
         calcDateEnd, 
         calcPayments, 
         calcProgess  } from "./index.js";

const creditCalc = (input) => {

    const amountCredit = numberFormat.from(calc.querySelector('input[data-field="limit"]').value);  // Полная сумма кредита
    const rateVal = calc.querySelector('input[data-field="percent"]').value;
    const rate = numberFormat.from(rateVal) / 100;                                                  // Процентная ставка
    const creditDateInput = calc.querySelector('input[data-field="date"]');                         // Дата кредита
    let creditTerm = creditDateInput.value;                                                        

    if(input.dataset.field === 'percent') percentValue(input);

    if(numberFormat.from(creditDateInput.value) > numberFormat.from(creditDateInput.max)) {
        creditTerm = creditDateInput.max;
        creditDateInput.value = creditDateInput.max;
    }
    if(numberFormat.from(creditDateInput.value) < numberFormat.from(creditDateInput.min)) {
        creditTerm = creditDateInput.min;
        creditDateInput.value = creditDateInput.min;
    }
    const date = addMonths(new Date(), creditTerm)                                                  // Дата окончания кредита
    const paymentType = calc.querySelector('input[data-field="type"]:checked').value;               // Тип платежей (Аннуентный/Дифференцированный)
    
    let mainDebt = 0;                                                                               // Основной долг
    let currentLoanBalance = amountCredit;                                                          // Остаток задолженности
    let accruedInterest = currentLoanBalance * rate / 12;                                           // Процентные начисления

    let firstPayment = 0, 
        lastPayment = 0, 
        overpayment = 0,
        amountPayment = 0;
    
    if(paymentType == 1) amountPayment = (amountCredit * rate / 12) / (1 - Math.pow(1 + rate / 12, - creditTerm )) ;
    if(paymentType == 2) mainDebt = amountCredit / creditTerm;
    
    for(let i = 0; i < creditTerm; i++) {    
        if(i == 0) firstPayment = mainDebt + accruedInterest;
        if(i + 1 == creditTerm) 
            lastPayment = mainDebt + accruedInterest 
            else 
            calcDateEnd.innerText = date;

        accruedInterest = Number(currentLoanBalance * rate / 12);
        overpayment += Number(accruedInterest);

        if(paymentType == 1) mainDebt = amountPayment - accruedInterest;
        if(paymentType == 2) amountPayment = mainDebt + accruedInterest;

        currentLoanBalance -= Number(mainDebt);
        accruedInterest = Number(currentLoanBalance * rate / 12);
    }

    if(paymentType == 1) calcPayments.innerText = numberFormat.to(amountPayment);
    if(paymentType == 2) calcPayments.innerText = `${numberFormat.to(firstPayment)} ... ${numberFormat.to(lastPayment)}`;

    // Progress bar
    if(calcProgess) {
        const circle = calcProgess.querySelector('.progress__circle');
        const circleText = calcProgess.querySelectorAll('.progress__percent');
        const graphText = (100 - (overpayment / (amountCredit + overpayment) * 100)).toFixed()
        const graphDanger = `${(overpayment / (amountCredit + overpayment) * 100)}%`;
        const graphWarning = `0%`;

        circle.style.cssText = `--graph-danger: ${graphDanger}; --graph-warning: ${graphWarning}`;
        circleText.forEach( item => item.innerText = graphText)
    }
    
    calcSum.innerText = numberFormat.to(amountCredit);
    calcOverpay.innerText = numberFormat.to(overpayment);
    calcTotal.innerText = numberFormat.to(amountCredit + overpayment);
    
}

export default creditCalc;