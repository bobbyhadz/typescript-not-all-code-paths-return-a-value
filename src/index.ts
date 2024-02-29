export { };

// Not all code paths return a value.

// EXAMPLE 1 - Return a value in all of the function's code paths

const result = [1, 2, 3].map((element) => {
  if (Math.random() > 0.5) {
    return element * 2;
  }

  return element * 3;
});

console.log(result);

// ---------------------------------------------------

// // EXAMPLE 2 - Set the return type of the function

// // 👇️ set return type of function to `number`
// // right after the function's parameters
// const result = [1, 2, 3].map((element): number => {
//   if (Math.random() > 0.5) {
//     return element * 2;
//   }

//   return element * 3;
// });
// console.log(result);

// ---------------------------------------------------

// // EXAMPLE 3 - Returning from a nested function

// function doMath() {
//   const nums = [1, 2, 3, 4, 5, 6];

//   const result: number[] = [];

//   nums.forEach((num) => {
//     if (num % 2) {
//       result.push(num * 2);
//     } else {
//       result.push(num * 3);
//     }
//   });

//   return nums;
// }