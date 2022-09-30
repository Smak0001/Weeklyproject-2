// Prove that JavaScript is working in your browser. You may delete this.
console.log('JavaScript is working!');
const username = window.prompt("What's your name?");
const age = window.prompt("What's your age?");

if (age < 18) {
	window.alert("Sorry");
} else {
	height = window.prompt("What's your height in meters? (like 1.76)");
	weight = window.prompt("What's your weight in kilograms? (like: 86.4)");
}

document.getElementById("username").innerHTML = username;
document.getElementById("age").innerHTML = age;
document.getElementById("height").innerHTML = height;
document.getElementById("weight").innerHTML = weight;
console.log(height);