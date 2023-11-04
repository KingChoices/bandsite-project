//Checking to see if my javascript works
console.log("Your script is working");

//current page href
var url = window.location.href;
var main = document.getElementById("home__link");
var shows = document.getElementById("show__link");

// Function to check if a string ends with a given string (This code isn't mine, I was struggling and got an idea from stackoverflow)
function endsWith(str, suffix) {
  return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

//print href to console
console.log(url);

//Here is checking for the url ending, styles will be applied.
if (endsWith(url, "index.html")) {
  main.style.color = "#AFAFAF";
  main.style.borderBottom = "4px solid white";
} else if (endsWith(url, "shows.html")) {
  shows.style.color = "#AFAFAF";
  shows.style.borderBottom = "4px solid white";
}
