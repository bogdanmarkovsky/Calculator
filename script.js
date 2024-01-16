const calculator = document.querySelector('.calculator');
const result = document.querySelector('.calculator__display_result');
calculator.addEventListener('click', function (event) {
    if (!event.target.classList.contains('calculator__button')) {
        return;
    } 
    const value = event.target.innerText;
    const arr = ['+', '-', '*', '/'];
    switch(value) {
        case 'C':
            result.innerText = '';
            break;
        case '=':
            if (Number.isInteger(eval(result.innerText))) {
                result.innerText = eval(result.innerText);
            } else {
                result.innerText = eval(result.innerText).toFixed(2);
            }
            break;
        default:
            if (arr.includes(value) && arr.includes(result.innerText.slice(-1)))  {
                result.innerText = result.innerHTML.slice(0,-1);
            } 
            result.innerText += value; 
    }
});