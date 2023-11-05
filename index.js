const display = document.getElementById('display');
const inc = document.getElementById('inc');
const dec = document.getElementById('dec');

let count = 0;

inc.addEventListener('click', () => {
  count++;
  display.innerText = count;
});

dec.addEventListener('click', () => {
  count--;
  display.innerText = count;
});
