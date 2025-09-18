// Coding Challenge 4b

let products = [
    {sku: "001",
     category: "apparel",
     name: "Shoes",
     price: 25.00,
     inventory: 18
     },

    {sku: "002",
     category: "groceries",
     name: "Carrot",
     price: 5.50,
     inventory: 12
    },

    {sku: "003",
     category: "electronics",
     name: "Robot",
     price: 50.99,
     inventory: 30
    },

    {sku: "004",
     category: "household",
     name: "Table",
     price: 35.50,
     inventory: 40
    },

    {sku: "005",
     category: "apparel",
     name: "Hair Ties",
     price: 8.00,
     inventory: 8
    }
  ];

console.log("Step 2. Products Without Discount:");
products.forEach(obj => console.log(`${obj.sku} | ${obj.category} | ${obj.name} | \$${obj.price} | ${obj.inventory}`));

//Discount loop by category
for (const product of products) {
  let discount = 0;

  switch (product.category) {
  case "electronics":
    discount = .20
    break;

  case "apparel":
    discount = .15
      break;

  case "groceries":
  case "household":
    discount = .10
      break;

  default:
    discount = 0
    break;
}

let promoPrice = product.price * (1-discount);
product.promoPrice = promoPrice;
}

//Initialize customer list

let customers = [
  {customerNumber: 1, customerType: "regular", couponCode: "SAVE10", taxRate: 0.07, cart: [{sku:"001", qty: 2}, {sku:"002", qty: 3}]},

  {customerNumber: 2, customerType: "student", couponCode: "FREESHIP", taxRate: 0.07, cart: [{sku:"004", qty: 1}, {sku:"005", qty: 5}]},

  {customerNumber: 3, customerType: "senior", couponCode: "SAVE10", taxRate: 0.07, cart: [{sku:"002", qty: 8}, {sku:"003", qty: 2}]},
];

//Discount by customer
let customerType = "regular";

if (customerType = "senior") {
  discount = .07;
}

else if (customerType = "student") {
  discount = .05;
}

else {
  discount = 0;
};
