import numberFormat from "../../helpers/numberFormat.js";
import percentValue from "../../helpers/percent.js";
import {calc,
        calcSum,
        calcOverpay,
        calcTotal,
        calcProgess,
        calcPsk} from "./index.js";
const loanCalc = (input) => {
    if(input.dataset.field === 'percent') percentValue(input);

    const amountCredit = numberFormat.from(calc.querySelector('input[data-field="limit"]').value);      // Полная сумма кредита
    const creditDateInput = numberFormat.from(calc.querySelector('input[data-field="date"]').value);    // Дата кредита 
    const rateVal = calc.querySelector('input[data-field="percent"]').value;
    const rate = numberFormat.from(rateVal) / 100;                                                      // Процентная ставка

    const overpayment = amountCredit * creditDateInput * rate;                                          // Переплата
    const procents = numberFormat.from(rateVal) * 365;                                                  // Полная стоимость займа %

    calcSum.innerText = numberFormat.to(amountCredit);
    calcOverpay.innerText = numberFormat.to(overpayment);
    calcTotal.innerText = numberFormat.to(amountCredit + overpayment);
    calcPsk.innerText = numberFormat.to(procents);

    if(calcProgess) {
        const circle = calcProgess.querySelector('.progress__circle');
        const circleText = calcProgess.querySelectorAll('.progress__percent');
        const graphText = (100 - (overpayment / (amountCredit + overpayment) * 100)).toFixed()
        const graphDanger = `${(overpayment / (amountCredit + overpayment) * 100)}%`;
        const graphWarning = `0%`;

        circle.style.cssText = `--graph-danger: ${graphDanger}; --graph-warning: ${graphWarning}`;
        circleText.forEach( item => item.innerText = graphText)
    }
}

export default loanCalc;