
// premitive values are passed by value
    // string, Number, boolean, null, undefined

// non-premitive vlues are passed by refrence
    // object, array, function, promice

// 1
// var person = {};
// person.name = "Mrs. white";

// var who = person;
// console.log(`who.name: ${who.name}`);

// who.name = "Mr, white";
// console.log(`who.name: ${who.name}`);
// console.log(`person.name: ${person.name}`);

// 2
// var myArr = []
// myArr.push(1);

// var myArr2 = myArr;
// myArr2.push(3);
// myArr.push(5);
// console.log(myArr);
// console.log(myArr2);

// // 3  Arrays are also considred as object
// var arr = [];
// arr.name = "shams";
// arr["city"] = "Mansehra";
// arr.push(1);
// arr.age = 23;
// var livingPlace = "town";
// arr[livingPlace] = "Ogae";
// arr.push(10);
// arr["5"] = "hello"; 
// console.log(arr);
// console.log(arr.length);
// console.log(typeof(arr));
// console.log(Array.isArray(arr));

// var person = {};
// person["name"] = "shams"
// person[2+2] = true;
// console.log(person);
// console.log(Array.isArray(person));
// console.log(typeof(person["4"]));

// 4 ES6 Destructuring
// let [first, second] = [true, false];
// first = "hello";
// let {one, two} = {one: 1, two: 2};
// console.log(two);

// // 5 Destructuring Exercise

// let myObj = {"name": "Rasty", "room": "kitchen", "weapon": "candlestick"};

// let [weapon] = [myObj.weapon];

// console.log(weapon);

// const {name, room, weapon2} = {"name": "Rasty", "room": "kitchen", "weapon2": "candlestick"}

// console.log(name, weapon2, room);

