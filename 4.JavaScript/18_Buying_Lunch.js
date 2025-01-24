function whosPlaying(names){
    var numberofPeople = name.length;
    var randomPersonPosition = Math.floor(Math.random()*numberofPeople);
    var randomPerson = names[randomPersonPosition];

    return randomPerson + "is going to buy lunch today!";
    
}