
const DOG_BREED_LIST = "https://dog.ceo/api/breeds/list/all";
const DOG_URL = "https://dog.ceo/api/breed/images/random";
const randomdDogUrl = "https://dog.ceo/api/breeds/image/random";
let myDogUrl = "";
let selectboxValue = "none";


let doggos = document.querySelector(".doggos");
const selectBox = document.querySelector(".dogo-type");
let waitingGif = document.querySelector(".waiting-gif");
// const body = document.querySelector("body");

selectBox.addEventListener('change', () => {
    myDogUrl = addStr(DOG_URL, 26, `${selectBox.value}/`);
    selectboxValue= selectBox.value;
});

function addStr(str, index, stringToAdd) {
    return str.substring(0, index) + stringToAdd + str.substring(index, str.length);
}

const promice = fetch(DOG_BREED_LIST);
promice
    .then(function (response) {
        const processingPromise = response.json();
        return processingPromise;
    })
    .then(function (processingResponse) {
        const message = processingResponse.message;
        breed = Object.keys(message);
        breed.unshift("none");
        for (let i = 0; i < breed.length; i++) {
            const newOption = document.createElement("option");
            const optionText = document.createTextNode(`${breed[i]}`);
            newOption.appendChild(optionText);
            //newOption.setAttribute('value','Option Value');
            selectBox.appendChild(newOption);
        }
    })

function addNewDoggo() {
    if(selectboxValue === "none"){
        const promice = fetch(randomdDogUrl);
    promice
        .then(function (response) {
            waitingGif.hidden = false;
            const processingPromise = response.json();
            return processingPromise;
        })
        .then(function (processingResponse) {
            const img = document.createElement("img");
            img.src = processingResponse.message;
            img.alt = "Cute doggo";
            doggos.replaceChild(img, doggos.childNodes[0]);
            waitingGif.hidden = true;
        })
    } else {
        const promice = fetch(myDogUrl);
    promice
        .then(function (response) {
            waitingGif.hidden = false;
            const processingPromise = response.json();
            return processingPromise;
        })
        .then(function (processingResponse) {
            const img = document.createElement("img");
            img.src = processingResponse.message;
            img.alt = "Cute doggo";
            doggos.replaceChild(img, doggos.childNodes[0]); 
            waitingGif.hidden = true;
        })
    }
    console.log(selectboxValue);
}

document.querySelector(".add-doggo").addEventListener("click", addNewDoggo);