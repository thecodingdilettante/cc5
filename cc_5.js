// Coding Challenge 5

let employees = [
    {name: "Willy Smith", hourlyRate: 500, hoursWorked: 40},
    {name: "Sab Carpenter", hourlyRate: 600, hoursWorked: 35},
    {name: "Addy Rae", hourlyRate: 200, hoursWorked: 15},
  ];

  //BASE PAY
  function calculateBasePay(rate, hours) {
  return rate * hours;
}

//OVERTIME

  function calculateOvertimePay(rate, hours) {
    extraHours = hours - 40
    return extraHours * (rate * 1.5);
    }

// TAX

function calculateTaxes(grossPay) {
  tax = 0.15 * grossPay
  return grossPay - tax;
}