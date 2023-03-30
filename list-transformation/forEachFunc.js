// let a = "hello world";
// let b = `${a.split(' ')[1]} ${a.split(' ')[0]}`;
// console.log(b);

// Creating objects from a list
var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];
let suspectsList = [];

function createSuspectObj(name){
    return {
        name: name,
        color: name.split(' ')[1],
        speak(){
            console.log('my name is ', name);
        }
    }
}

// Using Loop
// for(let i = 0; i < suspects.length; i++){ 
//     suspect = createSuspectObj(suspects[i]);
//     suspectsList.push(suspect);
// }

//using the forEach method
// suspects.forEach(name => { 
//     suspectsList.push(createSuspectObj(name));
// });

suspects.forEach(function(name){
    suspectsList.push(createSuspectObj(name));
});
console.log(suspectsList);