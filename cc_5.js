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

//PAYROLL
function processPayroll (employees){
  let basePay;
  if (employees.hoursWorked <= 40)
    basePay = calculateBasePay(employees.rate, employees.hoursWorked)

  let overtimePay;
  if (employees.hoursWorked > 40)
    overtimePay = calculateOvertimePay(employees.rate, employees.hoursWorked)

  let grossPay;
  grossPay = basePay + overtimePay;

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