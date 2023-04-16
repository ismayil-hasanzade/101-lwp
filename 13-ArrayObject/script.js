const arr = [23, 1, 5, 3, 12, 4, 9, 81, 7, 11, 22, 31, 6];
console.log(arr);
let max = arr[0];
let min = arr[0];
let max_index;
let min_index;
let memo;
for (let i = 0; i < arr.length; i++) {
  // if (arr[i] % 2 == 0) {
  if (arr[i] > max) {
    max = arr[i];
    max_index = i;
    // }
  }
  // } else {
  //   if (arr[i] < min) {
  //     min = arr[i];
  //     min_index = i;
  //   }
  // }
}

// memo = arr[max_index];
// arr[max_index] = arr[min_index];
// arr[min_index] = memo;

console.log(max);
