let tipOputput = document.getElementById ('tipAmountOutput');
let totalOutput = document.getElementById('totalBillOutput');
let checkOutput = document.getElementById('paycheckAmountOutput');
let gradeOutput = document.getElementById('percentGradeOutput');
let gasOutput = document.getElementById('gasCostOutput');

let tipBtn = document.getElementById("tipButton");
tipBtn.addEventListener('click', function () {


//Tip Calulator Varibles
let subTotal = document.getElementById('subTotalInput').valueAsNumber;
let percentage = document.getElementById('percentageInput').valueAsNumber;
let tipAmount;
let totalBill;


// Do the Math

tipAmount = subTotal * percentage;
totalBill = subTotal + tipAmount;

// Only show 2 decimal places
tipAmount = tipAmount.toFixed(2);
totalBill = subTotal + tipAmount;

// Show the output

tipOputput.innerHTML = "$" + tipAmount;
tipOputput.innerHTML = "$" + totalBill;

} )

let paycheckBtn = document.getElementById("paycheckButton");
paycheckBtn.addEventListener('click', function () {

} )
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

// Dice Roll

let numberRolled;

// Do The Math
numberRolled = Math.floor(Math.random()) * 6 + 1;

numberRolled = Math.floor(numberRolled);

gasCost


// Name Genrator

let = name;