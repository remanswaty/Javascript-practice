// var rooms = ['one','two', 'three'];
// var logger = function(val){
//     console.log(val);
// }

// rooms.forEach(logger);

// // Incomplete segment bellow
// let callback = function(value, i, list){
//     if (list[i] + 1) {
//         console.log(value, " is younger than", list[i + 1]);
//     }
// }

// var brothers = ['one', 'two', 'three', 'four'];  
// brothers.forEach(
//     if (Array.isArray(brothers)) {
//         for(let i = 0; i < brothers.length; i++){
//             callback(value, i, list); 
//             }
//         } else {
//         for(var key in list){
//             callback(list(list[key], key, list));
//         }
//     }
// );

// Incomplet segment above

var brothers = ['one', 'two', 'three', 'four'];
var makeNum = [];
brothers.forEach((value, i, list)=>{
    makeNum.push(`Number ${value}`);
})
console.log(makeNum);


// const _ = {};
// _.each(brothers, function(value, i, list){
//     if(Array.isArray(list)){
//         console.log("its array");
//         } else {
//             console.log("its object");
//         }
// })