// Example: <br>
// Input: [1,4,6,3,2] <br>
// Output: ["Monday","Thursday","Saturday","Wednesday","Tuesday"]

function weekNumbersToWords(){
var dayOfTheWeek = document.getElementById("dayNumber").value;
const days = dayOfTheWeek.split(',');
const daysWords = new Array();
console.log(days);
var day;
for (let i=0; i < days.length; i++){
switch (days[i]) {
    case "1" : 
        day = "Monday";
        break;
    case "2" : 
        day = "Tuesday";
        break;
    case "3" : 
        day = "Wednesday";
        break;
    case "4" : 
        day = "Thursday";
        break;
    case "5" : 
        day = "Friday";
        break;
    case "6" : 
        day = "Saturday";
        break;
    case "7" : 
        day = "Sunday";
        break;
    default : 
        day = "The day undefined";
}
    daysWords.push(day);  
}
console.log(daysWords);  
document.getElementById("dayOfTheWeek").innerHTML = daysWords;
}

