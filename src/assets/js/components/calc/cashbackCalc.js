import numberFormat from "../../helpers/numberFormat.js";
import { calc,
    calcSum,
    cashbackSum  } from "./index.js";

const cashbackCalc = (input) => {
    const cashbackType = document.getElementById('cashbackTypeSelect');
    const cashbackTypeValue = numberFormat.from(cashbackType.value);
    const amountCashback = calc.querySelector('input[data-field="limit"]');
    const amountCashbackValue = numberFormat.from(amountCashback.value);
    const cashbackPercent =  calc.querySelector('input[data-field="percent"]');

    const percentSum = numberFormat.from(amountCashback.value) * numberFormat.from(cashbackPercent.value) / 100;
    
    if(input.dataset.field === 'type') {
        amountCashback.value = numberFormat.to(cashbackTypeValue)
    }
    
    
    calcSum.innerText = numberFormat.to(amountCashbackValue);
    cashbackSum.innerText = numberFormat.to(percentSum);
}

export default cashbackCalc;