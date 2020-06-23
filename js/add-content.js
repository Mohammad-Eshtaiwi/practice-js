var hourNow = prompt("please enter an hour from 0-23");
var greeting;

if (hourNow > 18 && hourNow <= 23) {
  greeting = "Good evening, Class!";
} else if (hourNow > 12 && hourNow <= 18) {
  greeting = "Good afternoon, Class!";
} else if (hourNow >= 0 && hourNow <= 12) {
  greeting = "Good morning!";
} else {
  greeting = "Something went wrong!";
}
console.log(hourNow);

console.log(greeting);

document.write("<h3>" + greeting + "</h3>");
