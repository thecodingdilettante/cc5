// Coding Challenge 5

let employees = [
    {name: "Willy Smith", hourlyRate: 500, hoursWorked: 50},
    {name: "Sab Carpenter", hourlyRate: 600, hoursWorked: 35},
    {name: "Addy Rae", hourlyRate: 200, hoursWorked: 15},
  ];

  //BASE PAY
  function calculateBasePay(rate, hours) {
  minimum = Math.min(hours, 40);
  return rate * minimum;
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

//PAYROLL
function processPayroll (employees){
  let basePay = 0;
    basePay = calculateBasePay(employees.hourlyRate, employees.hoursWorked)

  let overtimePay = 0;
  if (employees.hoursWorked > 40)
    overtimePay = calculateOvertimePay(employees.hourlyRate, employees.hoursWorked)

  let grossPay = basePay + overtimePay;

  let payWithTax = calculateTaxes(grossPay);
  return {
    name: employees.name,
    basePay: basePay.toFixed(2),
    overtimePay: overtimePay.toFixed(2),
    grossPay: grossPay.toFixed(2),
    payWithTax: payWithTax.toFixed(2)
  };
}

//PAYROLL FOR EACH EMPLOYEE

employees.forEach(employee => {
console.log(processPayroll(employee));
});