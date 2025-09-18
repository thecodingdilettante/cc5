// Coding Challenge 4b

let products = [
    {sku: "001",
     category: "Apparel",
     name: "Shoes",
     price: 25.00,
     inventory: 18
     },

    {sku: "002",
     category: "Groceries",
     name: "Carrot",
     price: 5.50,
     inventory: 12
    },

    {sku: "003",
     category: "Electronics",
     name: "Robot",
     price: 50.99,
     inventory: 30
    },

    {sku: "004",
     category: "Household",
     name: "Table",
     price: 35.50,
     inventory: 40
    },

    {sku: "005",
     category: "Apparel",
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
  case "Electronics":
    discount = .20
    break;

  case "Apparel":
    discount = .15
  console.log(`The promo price is: ${product.price}`);
      break;

  case "Groceries":
  case "Household":
    discount = .10
  console.log(`The promo price is: ${product.price}`);
      break;

  default:
    discount = 0
    console.log("No Discount Applied")
    break;
}

let promoPrice = product.price * (1-discount);
}




console.log("Step 3. Apply Discount By Category:")



//Discount by customer




//Simulate purchases


//Log each product with discount



//Log all product inventory, destructuring
