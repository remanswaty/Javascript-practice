let wholes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Exm 1
let newWholes = wholes.map(mulByTwo);

function mulByTwo(val, i, list){
    return val + 10;
}
console.log(newWholes);

// Exm 2
 fizzBuzz = wholes.map(n => {
    if(n % 3 == 0 && n % 5 == 0){
        return 'fizzbuzz';
    }else if(n % 5 == 0){
        return 'buzz';
    }else if(n % 3 == 0){
        return 'fizz';
    }
    return n;
  })

  console.log(`FizzBuzz of wholes: ${fizzBuzz}`);