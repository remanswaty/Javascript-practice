// We use recurtion instead of iteration in Functional Programming

// Iteration exm.
// function sum(numbers){
//     let total = 0;
//     for(i= 0; i < numbers.length; i++){
//         total += numbers[i];
//     }
//     return total;
// }
// console.log(sum([0,1,2,3,4]));


// // Recurtion exm.
// function sum (numbers) {
//     if (numbers.length === 1) {
//       // base case
//       return numbers[0];
//     } else {
//       // recursive case
//       const newArr = numbers.slice(1);
//       return numbers[0] + sum(newArr);
//     }
//   }
//   console.log(sum([0,1,2,3,4])) // 10


// // Recurtion CountDown exm.
// function countDown (number){
//     if(number === 0){
//         console.log(0);
//     }else{
//         console.log(number);
//         //const newNum = number--;
//         countDown(number-1);
//     }
// }
// countDown(8);

// CountDown recurtion Function by ChatGPT
// function countdown(num) {
//   console.log(num);
//   if (num === 0) {
//     return;
//   } else {
//     countdown(num - 1);
//   }
// }

// countdown(10);

// // Recurtion Factorial Exm.  
// function FactorialOf(number){
   
//     if(number === 0){
//         return 1;
//     }else{
//         return number * FactorialOf(number - 1);
//     }
// }
// console.log(FactorialOf(2));

// console.log(Math.round (5 / ((1 + Math.sqrt(5)) / 2)));

// // Itration exm of Fibonacci at specific index;
// function iterativeFibonacci(n){
//     let fibon = 0;
    
//     for(let i = 0; i <= n; i++){
//         if(i == 0){
//             fibon = 0
//         }else if(i == 1 || i == 2){
//             fibon = 1;
//         }else if(i==3){
//             fibon = 2;
//         }else{
//             previous = Math.round(fibon / ((1 + Math.sqrt(5)) / 2));
//             previous2 = Math.round(previous / ((1 + Math.sqrt(5)) / 2));
//             fibon = (previous + previous2) +previous;
//         }
//     }
//     return fibon;
// }
// console.log(`finbon: ${iterativeFibonacci(4)}`);

// // Itration exm of Fibonacci at specific index by ChatGPT
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }

  let fibNMinus2 = 0;
  let fibNMinus1 = 1;
  let fibN = 1;

  for (let i = 2; i <= n; i++) {
    fibN = fibNMinus1 + fibNMinus2;
    fibNMinus2 = fibNMinus1;
    fibNMinus1 = fibN;
  }

  return fibN;
}
console.log(fibonacci(10));


// Recurcive fibonacci at specific index: from exercise solution.
// function recursiveFibonacci(n) { 
//     if (n === 0) return 0;
//     if (n === 1) return 1;
//     return recursiveFibonacci(n - 2) + recursiveFibonacci(n - 1);
//   }
//   console.log(recursiveFibonacci(7))

// function myFunc(n){
//     let myNum = 0;
//     for(i = 0; i <= n; i++){
//         if (i == 1){
//             console.log(`this is ${i}`);
//         }else if(i == 3){
//             console.log(`this is ${i}`);
//         }else{
//             console.log(i);
//             myNum++;
//         }
//     }
//     console.log(myNum);
// }
// console.log(myFunc(5));
