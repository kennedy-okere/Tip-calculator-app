'use strict';
//the inputs
const bill = Number(document.getElementById('bill').value);
const numPerPep = Number(document.getElementById('number-of-pep').value);
const billInput = document.getElementById('custom');

//the buttons
const resetBtn = document.querySelector('.reset');
const btn = document.querySelectorAll('.btn');

//the outputs
const tipAmountPer = document.querySelector('.amount-1');
const totalPerPer = document.querySelector('.amount-2');

//error-message
const textError = document.getElementById('error-text');

const errorBill = document.querySelector('.clink');

btn.forEach(function (button) {
  button.addEventListener('click', () => {
    const percentage = button.getAttribute('data-value');

    const bill = Number(document.getElementById('bill').value);
    const numPerPep = Number(document.getElementById('number-of-pep').value);
    const textError = document.getElementById('error-text');
    const errorBill = document.querySelector('.clink');

    //check for valid input
    if (bill === 0 || numPerPep === 0) {
      textError.classList.remove('hidden');
      errorBill.classList.add('cli');
      tipAmountPer.textContent = '0.00';
      totalPerPer.textContent = '0.00';
    } else if (bill || numPerPep < 0) {
      textError.classList.add('hidden');
      errorBill.classList.remove('cli');

      const tipPerPerson = (bill * (percentage / 100)) / numPerPep;
      tipAmountPer.textContent = new Intl.NumberFormat('en-US').format(
        +tipPerPerson.toFixed(0)
      );

      const totalPerPerson = bill / numPerPep + tipPerPerson;
      totalPerPer.textContent = new Intl.NumberFormat('en-US').format(
        +totalPerPerson.toFixed(0)
      );
    }
  });
});

//custom button input
billInput.addEventListener('input', function () {
  let bill = Number(document.getElementById('bill').value);
  let numPerPep = Number(document.getElementById('number-of-pep').value);
  const textError = document.getElementById('error-text');

  if (bill === 0 || numPerPep === 0) {
    textError.classList.remove('hidden');
    errorBill.classList.add('cli');
    tipAmountPer.textContent = '0.00';
    totalPerPer.textContent = '0.00';
  } else if (billInput.value === '') {
    tipAmountPer.textContent = '0.00';
    totalPerPer.textContent = '0.00';
  } else {
    errorBill.classList.remove('cli');
    textError.classList.add('hidden');
    const tipPerPerson = (bill * (billInput.value / 100)) / numPerPep;
    tipAmountPer.textContent = new Intl.NumberFormat('en-US').format(
      +tipPerPerson.toFixed(0)
    );

    const totalPerPerson = billInput.value / numPerPep + tipPerPerson;
    totalPerPer.textContent = new Intl.NumberFormat('en-US').format(
      +totalPerPerson.toFixed(0)
    );
  }
});

//reset button
resetBtn.addEventListener('click', () => {
  const erase = '';
  document.getElementById('bill').value = '';
  document.getElementById('number-of-pep').value = erase;
  billInput.value = '';
  textError.classList.add('hidden');
  errorBill.classList.remove('cli');
  tipAmountPer.textContent = '0.00';
  totalPerPer.textContent = '0.00';
});
