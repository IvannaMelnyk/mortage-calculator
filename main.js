//значения текстовых инпутов
const totalCost = document.getElementById('total-cost'),
  anInitialFee = document.getElementById('an-initial-fee'),
  creditTerm = document.getElementById('credit-term');
//значения range инпутов
const totalCostRange = document.getElementById('total-cost-range'),
  anInitialFeeRange = document.getElementById('an-initial-fee-range'),
  creditTermRange = document.getElementById('credit-term-range');
//итоговые значения
const totalAmountOfCredit = document.getElementById('amount-of-credit'),
  totalMonthlyPayment = document.getElementById('monthly-payment'),
  totalRecommendedIncome = document.getElementById('recommended-income');
//all range
const inputsRange = document.querySelectorAll('.input-range');
//all buttons with loan
const bankBtns = document.querySelectorAll('.bank');
//функция чтоб инпут работал с ползунком
const assignValue = () => {
  totalCost.value = totalCostRange.value;
  anInitialFee.value = anInitialFeeRange.value;
  creditTerm.value = creditTermRange.value;
};
assignValue();
// каждый банк- массив
const banks = [
  {
    name: 'alfa',
    precents: 8.7,
  },
  {
    name: 'oshchad',
    precents: 8.4,
  },
  {
    name: 'pumb',
    precents: 7.9,
  },
  {
    name: 'intel',
    precents: 9.2,
  },
];
//
let currentPrecent = banks[0].precents;
// console.log(currentPercent);отловить события по клику , при клике вешать бордер синий

for (let bank of bankBtns) {
  bank.addEventListener('click', () => {
    for (let item of bankBtns) {
      item.classList.remove('active'); // убирать актив на друугих кнопках
    }
    bank.classList.add('active');
    takeActiveBank(bank);
  });
}
const takeActiveBank = currentActive => {
  const dataAttrValue = currentActive.dataset.name;
  //   console.log(dataAttrValue);
  const currentBank = banks.find(bank => bank.name === dataAttrValue);
  currentPrecent = currentBank.precents;
  console.log(currentPrecent);
};
