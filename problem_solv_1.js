function countMinMaxArray(arr) {
  arr.sort((a, b) => a - b);
  const totalSum = arr.reduce((sum, num) => sum + num, 0);
  const minSum = totalSum - arr[arr.length - 1];
  const maxSum = totalSum - arr[0];

  console.log(minSum + " " + maxSum);
}

const numbers = [1, 2, 3, 4, 5];
countMinMaxArray(numbers);
