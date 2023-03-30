
const game = {
        'suspects' : [
        {
            name: "Rusty",
            color: "orange"
        }, {
            name: "Miss Scarlet",
            color: "red"
        }
    ]
}

// looping part#3

// let [obj1, obj2] = game.suspects;
// let [{color: colorOne}, {color: colorTow}] = game.suspects;

// console.log(colorOne, colorTow);

// looping part#2

// Using Loop
// function foo(){
//     for(var i = 0; i < game.suspects.length; i++){
//         console.log(game.suspects[i].name);
//         console.log(game.suspects[i].color);

//         if(game.suspects[i].name === 'Rusty'){
//             console.log("Found Guilty");
//         }else{ 
//             console.log("Next Time");
//         }
//     }
// }


// // Using key
// var gameLoop = () => {
//     for(i = 0; i < game.suspects.length; i++){
//         console.log("outer loop");
//         for(var key in game.suspects[i]){
//             console.log("inner loop");
//             if(game.suspects[i][key] === "Rusty"){
//                 console.log("Found G");
//             }else{
//                 console.log("Next Time");
//             }
//         }
//     }
// }
// //foo();
// gameLoop();


// // Looping part#1

// const family = {};
// family.members = [];
// family.members.push({
//     name: "shams",
//     age: 23
// });
// family.members.push({
//     name: "Afaq",
//     age: 20
// });


// function printFamilyMembers(){
//     for(let i = 0; i < family.members.length; i++){
//         console.log(family.members[i].name);
//     }
// }
// printFamilyMembers();