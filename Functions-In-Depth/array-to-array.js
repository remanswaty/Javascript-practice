//  Converting Array-like object to Array
const add = (a, b = 2) => {             
    var arr = Array.from(arguments);
    console.log(`type: ${Array.isArray(arr)}`);
    return(a + b);
    console.log((arr));
    
}



// function add(a, b) {
//     b = b || 2;
//     console.log(arguments);
//     return(a + b);
// }
console.log(add(3, 5));