import wNumb from "wnumb";

const numberFormat = wNumb({
    decimals: 0,
    thousand: ' '
});

const Range = (selector) => {
    const sliders = document.querySelectorAll(selector)

    sliders.forEach(slider => {
        const parent = slider.parentElement;
        const input = parent.querySelector('.range__value');
        
        const setVal = (range) => {
            const value = range.value;
            const newValue = Number((value - range.min) * 100 / (range.max - range.min));
            range.style.setProperty("--range-progress", `${newValue}%`);
        }
       
        setVal(slider)

        slider.addEventListener('input', () => {
            setVal(slider)
            input.value = numberFormat.to(+slider.value);
        });
        input.addEventListener('keypress', (e)=> { 
            const key = (e.which) ? e.which : eevent.keyCode
            if (key != 46 && key > 31 && (key < 48 || key > 57)) {
                e.preventDefault()
            } 
        })
        input.addEventListener('input', (e) => {
            let val = e.target.value;
            let newStr = val.replace(/\s/g, '');
            slider.value = newStr
            setVal(slider, e.target)
        });

        input.addEventListener('change', (e) => {
            let value = e.target.value
            const newVal = value.replace(/(\d)(?=(\d{3})+$)/g, '$1 ')
            e.target.value = newVal;
        })

    });





}

export default Range;