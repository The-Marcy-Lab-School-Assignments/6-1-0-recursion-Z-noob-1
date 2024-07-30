// const sum = (arr, sums = 0, idx = 0) => {
//   if (idx === arr.length ) {return sums}
//   console.log(sum, idx, arr.length )
//   return sum(arr, sums + arr[idx], idx + 1)
// }
// console.log(sum([1,2,3,4,5])) //(15)

// const reverse = (str, revStr = '', idx = str.length -1) => {
//   if(idx === -1) {return revStr}
//   console.log(revStr, idx)
//   return reverse(str, revStr + str[idx], idx - 1)
// };
// console.log(reverse('hello world'))

const fib = (n) => {
  if(n < 2) {return n}
  let back = 1, twoBack = 0
  let curFib = 0

  for(i = 2; i<= n; i++) {
    curFib = back + twoBack
    twoBack = back
    back = curFib
  }

  return curFib;
}
const fibIter = (n, arr = [0, 1]) => {
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
    // console.log(arr);
  }
  return arr[n];
};

const fibRec = (n) => {
  if(n < 2) {return n}
  return fibRec(n - 1) + fibRec(n - 2)
};

// const binarySearch = (arr, target) => {
//   let start = 0, end = arr.length - 1
//   while (start <= end) {
//       const mid = Math.floor((start + end) / 2)
//       if (arr[mid] === target) return mid
//       if (arr[mid] > target) end = mid - 1
//       if (arr[mid] < target) start = mid + 1
//   }
//   return -1
// };

const binarySearch = (arr, target, start = 0, end = arr.length - 1, mid = Math.floor((start + end) / 2)) => {
  if(start > end) return -1
  if(arr[mid] === target) return mid
  // if(start > end) return -1
  return binarySearch(arr, target, arr[mid] > target ? end = mid - 1, start : start = mid +1)
  // while (start <= end) {
  //     const mid = Math.floor((start + end) / 2)
  //     if (arr[mid] === target) return mid
  //     if (arr[mid] > target) end = mid - 1
  //     if (arr[mid] < target) start = mid + 1
  // }
  // return -1
};

const arr = [2, 4, 6, 8, 10, 12, 14, 16];
const target1 = 8;
const target2 = 12;
const target3 = 7;

console.log(binarySearch(arr, target1))//.toEqual(3)
console.log(binarySearch(arr, target2))//.toEqual(5)
console.log(binarySearch(arr, target3))//.toEqual(-1)