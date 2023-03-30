// const videoData = [
//     {
//         name: 'Miss Scarlet',
//         present: true,
//         rooms: [
//             {kitchen: false},
//             {ballroom: false},
//             {conservatory: false},
//             {'dining room': false},
//             {'billiard room': false},
//             {library: false}
//         ]
//     },
//     {
//         name: 'Mrs. White',
//         present: false,
//         rooms: [
//             {kitchen: false},
//             {ballroom: false},
//             {conservatory: false},
//             {'dining room': false},
//             {'billiard room': false},
//             {library: false}
//         ]
//     },
//     {
//         name: 'Reverend Green',
//         present: true,
//         rooms: [
//             {kitchen: false},
//             {ballroom: false},
//             {conservatory: false},
//             {'dining room': false},
//             {'billiard room': false},
//             {library: false}
//         ]
//     },
//     {
//         name: 'Rusty',
//         present: false,
//         rooms: [
//             {kitchen: false},
//             {ballroom: false},
//             {conservatory: false},
//             {'dining room': false},
//             {'billiard room': false},
//             {library: false}
//         ]
//     },
//     {
//         name: 'Colonel Mustard',
//         present: true,
//         rooms: [
//             {kitchen: false},
//             {ballroom: false},
//             {conservatory: false},
//             {'dining room': false},
//             {'billiard room': false},
//             {library: false}
//         ]
//     },
//     {
//         name: 'Professor Plum',
//         present: true,
//         rooms: [
//             {kitchen: false},
//             {ballroom: false},
//             {conservatory: false},
//             {'dining room': false},
//             {'billiard room': false},
//             {library: false}
//         ]
//     }
// ];

//     videoData.filter(function (item, i, list){
//         newVideoData = [];

//         list.forEach(function(item, i, list){
//             if(list[i].present === true){
//                 newVideoData.push(list[i]);
//             }
//         });
        
//         return newVideoData;
//     });
    
// console.log(newVideoData);

let wholes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = wholes.filter((n) =>{
    if(n > 4){
        return true;
    } return false;
});

console.log(result)