const count = document.getElementById('count');
const decrement = document.getElementById('decrement');
const reset = document.getElementById('reset');
const increment = document.getElementById('increment');

let countValue = 0;

decrement.addEventListener('click', () => {
    countValue--;
    count.textContent = countValue;
});

reset.addEventListener('click', () => {
    countValue = 0;
    count.textContent = countValue;
});

increment.addEventListener('click', () => {
    countValue++;
    count.textContent = countValue;
});

