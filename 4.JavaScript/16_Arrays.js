var guestList = ["Ram","Shyam","Sagar","Jack","Pam"];
console.log(guestList);
console.log(guestList.length);
console.log(guestList[0]);


var guestName = prompt ("What is your name?");

if(guestList.includes(guestName)){
    alert("Welcome!");
}else{
    alert("Sorry,may be next time");
}