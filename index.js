function sumBitcoins( bitcoinPrice, sumDollars) {
  let totalSum = 0;
  totalSum = sumDollars / bitcoinPrice;
  return totalSum;
}
console.log(sumBitcoins(21000, 1000));
