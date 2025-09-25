// Coding Challenge 5

let employees = [
    {name: "Willy Smith", hourlyRate: 500, hoursWorked: 40},
    {name: "Sab Carpenter", hourlyRate: 600, hoursWorked: 35},
    {name: "Addy Rae", hourlyRate: 200, hoursWorked: 15},
  ];

  //BASE PAY
let workingTime = 45;
if (workingTime <= 40) {
  function calculateBasePay(rate, hours) {
  return (rate * hours);
  }
let total = calculateBasePay(500, 40);
console.log(total);
}
  else {
console.log(`This person has worked over 40 hours.`)
};

//OVERTIME

let overtimePay = 42;
if (workingTime > 40) {
  function calculateOvertimePay(rate, hours) {
    
  return (rate * 1.5);
  }
let total = calculateOvertimePay(5, 42);
console.log(total);
}
  else {
console.log(`This person has not worked overtime.`)
}