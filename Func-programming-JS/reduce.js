
let wholes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Exm
let sum = wholes.reduce((accumulator, value) => {
      return accumulator += value;
    },
    0)

  console.log(`sum: ${sum}`);

// Exm, function outside
  let myFunc = (accumulator, value) => {
    return accumulator += value;
  }

  let sum2 = wholes.reduce(myFunc,0);

  console.log(`sum2 ${sum2}`);

// Exm, Maximum

let max = [7, 1, 3, 5, 6, 2, 8, 10, 0, 4, 9].reduce(
    (acc, val) => {
        if(val > acc){
            return val;
        } return acc;
    }, 0 )

  console.log(`Max: ${max}`);

 