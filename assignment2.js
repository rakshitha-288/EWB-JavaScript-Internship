
const billInput = prompt("Enter the bill amount:");
const tipInput = prompt("Enter the tip percentage:");

const subtotal = Number(billInput);
const tipPercentage = Number(tipInput);

const calculatedTip = (subtotal * tipPercentage) / 100;

let totalamount = subtotal;
totalamount += calculatedTip;

console.log("Subtotal: $" + subtotal);
console.log("Tip Percentage: " + tipPercentage + "%");
console.log("Calculated Tip: $" + calculatedTip);
console.log("Total Amount to Pay: $" + totalamount);
