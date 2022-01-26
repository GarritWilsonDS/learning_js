


// initialize count at 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the html to reflect new count

let count = 0

let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("saved-el");

function increment(){
    console.log("increased by 1");
    count++;
    countEl.innerText = count;
    console.log(count);
}

function decrease(){
    console.log("decreased by 1");
    count--;
    countEl.innerText = count;
    console.log(count);
}

function save(){
    console.log("saved count");
    saveEl.innerText = count;
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

for (let i = 0; i<7; i++){
    lapsCompleted = incrementByOne(lapsCompleted);
}


// console.log(lapsCompleted)
