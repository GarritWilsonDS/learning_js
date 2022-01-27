


// initialize count at 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the html to reflect new count

// let welcomeEl = document.getElementById("welcome-el");
// let countEl = document.getElementById("count-el");
// let saveEl = document.getElementById("saved-el");

let firstName = "Garrit"
let greetingMessage = "Welcome "
let count = 0
let savedCounts = ""


function greeting(){
    welcomeEl.textContent = greetingMessage + firstName;
}

function increment(){
    console.log("increased by 1");
    count++;
    countEl.textContent = count;
    console.log(count);
}

function decrease(){
    if (countEl.innerText != 0){
        console.log("decreased by 1");
        count--;
        countEl.textContent = count;
        console.log(count);
    } else {
        alert("Cannot have negative number of passengers!")
    }
    
}

function save(){
    console.log("saved count");

    if (savedCounts == ""){
        saveEl.innerText = savedCounts += count;
    } else {
        saveEl.innerText = savedCounts += "-" + count;
    }
    console.log("count saved");
    
    count = 0;
    countEl.innerText = count;
    console.log("reset count");
}



//// practicing functions

let lapsCompleted = 0;

function incrementByOne(x) {
    x++;
    return x
}

for (let i = 0; i<8; i++){
    lapsCompleted = incrementByOne(lapsCompleted);
}

// console.log(lapsCompleted)


//// practicing variables
