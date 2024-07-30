// Recursion Problem Set: Coding Exercises

// Calculate and return the total sum using recursive approach
const sum = (arr, sums = 0, idx = 0) => {
  if (idx === arr.length) {return sums}
  return sum(arr, sums + arr[idx], idx + 1)
}

// Reverse string using recursive approach
const reverse = (str, revStr = '', idx = str.length -1) => {
  if(idx === -1) {return revStr}
  return reverse(str, revStr + str[idx], idx - 1)
};

// Iterative approach to solving the fibonacci problem
const fibIter = (n, arr = [0, 1]) => {
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[n];
};

// Recursive fibonacci
const fibRec = (n) => {
  if(n < 2) {return n}
  return fibRec(n - 1) + fibRec(n - 2)
};

// Return the index of target in arr, or -1 if not found using recursion 
const binarySearch = (arr, target, start = 0, end = arr.length - 1, mid = Math.floor((start + end) / 2)) => {
  if(start > end) return -1
  if(arr[mid] === target) return mid
  // if(start > end) return -1
  if(arr[mid] > target) return binarySearch(arr, target, end = mid - 1, start)
  if(arr[mid] < target) return binarySearch(arr, target, start = mid +1, end)
};;

module.exports = { sum, reverse, fibRec, fibIter, binarySearch };
