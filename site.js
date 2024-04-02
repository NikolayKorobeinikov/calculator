const changeMoney = document.querySelector(".money");
const getMoney = document.querySelector(".outMoney");
const moneyOutPut = document.querySelector(".out__put");
const month = document.querySelector(".period");
const outPutPeriod = document.querySelector(".get_period");
const outPutPercents = document.querySelector(".percent");

let countPercent;

changeMoney.addEventListener("input", getMoneyFn);
month.addEventListener("input", getPeriod);

function getMoneyFn() {
  getMoney.innerHTML = changeMoney.value + " $";
  const money = Number(changeMoney.value);
  let newSum = money + (money * countPercent) / 100;
  moneyOutPut.innerHTML = newSum.toFixed(2) + " " + "$";
  outPutPercents.innerHTML = countPercent + " " + "%";
}
getMoneyFn();

function getPeriod() {
  outPutPeriod.innerHTML = month.value + " months";
  if (month.value <= 5) {
    countPercent = 10;
  } else if (month.value >= 6 && month.value <= 12) {
    countPercent = 9.5;
  } else if (month.value >= 13 && month.value <= 23) {
    countPercent = 9;
  } else {
    countPercent = 8.5;
  }
  getMoneyFn();
}
getPeriod();
