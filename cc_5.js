// Coding Challenge 4b

let employees = [
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

