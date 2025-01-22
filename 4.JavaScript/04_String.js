var message = "Hello";
var name = "Sagar";

alert(message + "there," + "" + name);


var tweet = prompt ("Compose your tweet:");
//var tweetcount = tweet.length;
//alert("You have written "+ tweetcount + "Character,you have" + (140 - tweetcount)+ "Character reamaining.");
alert("You have written "+ tweet.length + "Character,you have" + (140 - tweet.length)+ "Character reamaining.");


//Slice
var myName1 = "Sagar";
myName1.slice(1,5)

var tweet = prompt("Compose your tweet:");
var tweetUnder140 = tweet.slice(0,140);
alert(tweetUnder140);

