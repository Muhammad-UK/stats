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

function getMin(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return min;
}

function getMax(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

function getRange(arr) {
  let range = getMax(arr) - getMin(arr);
  return range;
}

function getEvens(arr) {
  let evens = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evens++;
    }
  }
  return evens;
}

function getOdds(arr) {
  let odds = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      odds++;
    }
  }
  return odds;
}
const numbers = [5, 3, 1, 8];

console.log(`You have given ${getLength(numbers)} numbers.`);
console.log(`The sum of your numbers is ${getSum(numbers)}.`);
console.log(`The mean of your numbers is ${getMean(numbers)}.`);
console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
console.log(`The largest of your numbers is ${getMax(numbers)}.`);
console.log(`The range of your numbers is ${getRange(numbers)}.`);
console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);
