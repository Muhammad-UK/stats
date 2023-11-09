function getLength(arr) {
  return arr.length;
}

function getSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function getMean(arr) {
  const mean = getSum(arr) / getLength(arr);
  return mean;
}

const numbers = [5, 3, 1, 8];

console.log(`You have given ${getLength(numbers)} numbers.`);
console.log(`The sum of your numbers is ${getSum(numbers)}.`);
console.log(`The mean of your numbers is ${getMean(numbers)}.`);
//console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
//console.log(`The largest of your numbers is ${getMax(numbers)}.`);
//console.log(`The range of your numbers is ${getRange(numbers)}.`);
//console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
//console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);
