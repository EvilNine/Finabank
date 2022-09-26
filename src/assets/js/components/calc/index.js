import creditCalc from './creditCalc.js';
import cashbackCalc from './cashbackCalc.js';
import loanCalc from './loanCalc.js';
import mortgageCalc from './mortgageCalc.js';

export const calc = document.getElementById('calc');                       // Контейнер калькулятора

// Поля вывода результата
export const calcSum = document.getElementById('calc__sum');               // Сумма кредита/займов
export const calcOverpay = document.getElementById('calc__overpay');       // Переплата
export const calcTotal = document.getElementById('calc__total');           // Общая сумма выплат
export const calcDateEnd = document.getElementById('calc__dateEnd');       // Окончание кредита
export const calcPayments = document.getElementById('calc__payments');     // Платежи в месяц
export const calcProgess = document.getElementById('calc__progress');      // Индикатор результата
export const calcPsk = document.getElementById('calc__psk');               // Полная стоимость займа
export const cashbackSum = document.getElementById('calc__cashbackSum');   // Суммарный кэшбэк в рублях

function calculator () {
    
    if(calc) {
        const type = calc.dataset.type;
        const calcInput = calc.querySelectorAll('.calc__input');
        
        switch (type) {
            case 'creditCalc':
                calcInput.forEach((input)=>{
                    creditCalc(input);
                    input.addEventListener('change', () => creditCalc(input));
                })
                break;
            case 'cashbackCalc':
                calcInput.forEach((input)=>{
                    cashbackCalc(input);
                    input.addEventListener('change', () => cashbackCalc(input));
                })
                break;
            case 'loanCalc':
                calcInput.forEach((input)=>{
                    loanCalc(input);
                    input.addEventListener('change', () => loanCalc(input));
                })
                break;
            case 'mortgageCalc':
                break;
            default: 
                console.error('Не определен тип калькулятора'); 
        }  
    } 
}

export default calculator;