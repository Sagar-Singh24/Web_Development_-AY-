//Problem 1
function getMilk(money){
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");

    var numberOfBottles = Math.floor(money / 1.5);

    console.log("buy" + numberOfBottles + "bottles of milk");
    
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");

    return money % 1.5; //Remainder of the division
}

var change = getMilk(4);
console.log(change);


//************************************************************************************ */
//Problem 2

function getMilk(money){
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");

    console.log("buy" + calcBottles(money , 2.5) + "bottles of milk");
    
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");

    return calcChange(money , 2.5); 
}

function calcBottles(startingMoney,costperBottles){
    var numberOfBottles = Math.floor(startingMoney / costperBottles);
    return numberOfBottles;
}

function calcChange(startingAmount , costperBottles){
    var change = startingAmount % costperBottles;
    return change;
}

console.log("Hello master, here is your" + getMilk(5) + "change");
