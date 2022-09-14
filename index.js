function sumBitcoins( bitcoinPrice, sumDollars) {
  let totalSum = 0;
  totalSum = sumDollars / bitcoinPrice;
  return totalSum;
};

let i1 = document.getElementById("i1");
let i2 = document.getElementById("i2");
let button = document.getElementById("button");

button.addEventListener("click", calculateBitcoin);

function calculateBitcoin() {
  alert(sumBitcoins(i1.value, i2.value));
}

