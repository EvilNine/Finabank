export const getInt = (val) => {
    let v = parseFloat(val);
    if (v % 1 === 0) {
        return v;
    } else {
        let n = v.toString().split('.').join('');
        return parseInt(n);
    }
}

const percentValue = (input) => {
    input.addEventListener('keypress', (e)=>{
        const key = (e.which) ? e.which : e.keyCode
        if (key != 46 && key > 31 && (key < 48 || key > 57)) {
            e.preventDefault()
        } 
    });
    
    let int = input.value.slice(0, input.value.length - 1);
    if (int.includes('%')) {
        input.value = '%';
    }
    else if (int.length >= 3 && int.length <= 4 && !int.includes('.')) {
        input.value = int.slice(0, 2) + '.' + int.slice(2, 3) + '%';
        input.setSelectionRange(4, 4);
    }
    else if (int.length >= 5 & int.length <= 6) {
        let whole = int.slice(0, 2);
        let fraction = int.slice(3, 5);
        input.value = whole + '.' + fraction + '%';
    }
    
    else {
        input.value = int + '%';
        input.setSelectionRange(input.value.length - 1, input.value.length - 1);
    }
    //console.log(getInt(input.value));
}

export default percentValue;