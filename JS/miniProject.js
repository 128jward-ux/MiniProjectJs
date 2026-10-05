// Tip calcuator project 
let tipAmount;
let subTotal = 67.72;
let percentage = 0.2;
let totalBill;

tipAmount = subTotal * percentage;
console.log("Tip Amount:" + tipAmount.toFixed(2));

totalBill = subTotal + tipAmount;
console.log("Total amount due:"+ totalBill.toFixed(2));

// Hourly Pay Calculator 

let hourlyWage = 16.10;
let grossPay = 232;
let totalPay;

totalPay = hourlyWage * grossPay
console.log("total Pay:" + totalPay)

// Grade Calculator

let Pointsearned = 45.5;
let pointsTotal = 50;
let percentGrade;

let totalGrade;

percentGrade = Pointsearned / pointsTotal
console.log("percentGrade:" + percentGrade * 100)

// Gas Cost Calucator

let gallons = 12;
let cost = 4.49;
let totalCost;

totalCost = cost * gallons
console.log("totalCost" + totalCost)