// const weapons = ['candlestic', 'lead pipe', 'relolver'];

// const makeBroken = function(item) {
//     return `broken ${item}`;
// }

// console.log(weapons.map(makeBroken));
// console.log(weapons);

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

suspects.map((name)=> {
    var hello = createSuspectObj(name);
    suspectsList.push(hello);
});


console.log(suspectsList);
