// Prove that JavaScript is working in your browser. You may delete this.
console.log('JavaScript is working!');
const username = window.prompt("What's your name?");
const age = window.prompt("What's your age?");
let height = 0;
let weight = 0;

if (age < 18) {
  document.getElementById("advice-text").innerHTML = "Sorry " + username + ", you are not old enough to get a proper advice from us";
  document.getElementById("advice-card").className = 'box has-background-grey-light';
} else {
  height = window.prompt("What's your height in meters? (like 1.76)");
  weight = window.prompt("What's your weight in kilograms? (like: 86.4)");
}

document.getElementById("username").innerHTML = username;
document.getElementById("age").innerHTML = age;
document.getElementById("height").innerHTML = height;
document.getElementById("weight").innerHTML = weight;

const bmi = weight / Math.pow(height, 2);

if (bmi < 18.5) {
  document.getElementById("advice-text").innerHTML = "Your BMI is: " + bmi + "<br> You have under weight <br> Start with a personal trainer";
  document.getElementById("advice-card").className = 'box has-background-warning';
} else if (bmi >= 18.5 && bmi < 25.0) {
  document.getElementById("advice-text").innerHTML = "Your BMI is: " + bmi + "<br> You have a normal weight <br> Start with any programme";
  document.getElementById("advice-card").className = 'box has-background-success';
} else if (bmi >= 25.0 && bmi < 30.0) {
  document.getElementById("advice-text").innerHTML = "Your BMI is: " + bmi + "<br> You are slightly over weight <br> Start with cardio training";
  document.getElementById("advice-card").className = 'box has-background-warning';
} else if (bmi >= 30.0) {
  document.getElementById("advice-text").innerHTML = "Your BMI is: " + bmi + "<br> You are obese <br> Start with a personal trainer";
  document.getElementById("advice-card").className = 'box has-background-danger';
}