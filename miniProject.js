
console.log("--- Initializing Inventory System ---");

const inventory = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }
];

// 1. Get product input
// Works in a browser. For Node.js, see the note below.
const productName = prompt("Enter product name:");
const productPrice = Number(prompt("Enter product price:"));

// 2. Validate input and add product
if (
    productName &&
    productName.trim() !== "" &&
    Number.isFinite(productPrice) &&
    productPrice > 0
) {
    inventory.push({
        name: productName.trim(),
        price: productPrice
    });
} else {
    console.log("Invalid product input. Product not added.");
}

// 3. Assign categories using if...else and switch
inventory.forEach(function (product) {
    let category;

    if (product.price < 50) {
        category = "Budget";
    } else if (product.price < 200) {
        category = "Standard";
    } else {
        category = "Premium";
    }

    switch (category) {
        case "Budget":
            product.badge = "Budget";
            break;
        case "Standard":
            product.badge = "Standard";
            break;
        case "Premium":
            product.badge = "Premium";
            break;
        default:
            product.badge = "Unknown";
    }
});

// 4. Display inventory using forEach()
console.log("--- Processing Inventory Roster (forEach) ---");

inventory.forEach(function (product) {
    console.log(
        "* Item: " + product.name +
        " ($" + product.price +
        ") -> Category: " + product.badge
    );
});

// 5. Standard function to calculate total inventory value
function calculateTotal(items) {
    let total = 0;

    for (let i = 0; i < items.length; i++) {
        if (items[i].price <= 0) {
            continue;
        }

        total += items[i].price;
    }

    return total;
}

// 6. Arrow function with custom tax and discount parameters
const calculateFinalPrice = (
    price,
    taxRate = 0,
    discountRate = 0
) => {
    return price + (price * taxRate / 100)
                 - (price * discountRate / 100);
};

// 7. Financial analytics
console.log("--- Financial Analytics ---");

const totalValue = calculateTotal(inventory);
console.log("Total Inventory Value: $" + totalValue);

const examplePrice = calculateFinalPrice(100, 10, 5);
console.log("Example Price after 10% tax and 5% discount: $" + examplePrice.toFixed(2));

// 8. Find affordable products using filter()
const affordableProducts = inventory.filter(function (product) {
    return product.price < 200;
});

console.log(
    'Filtered Affordable Items (Under $200): ' +
    JSON.stringify(affordableProducts.map(product => product.name))
);

// 9. Create formatted report using map()
const report = inventory.map(function (product) {
    return product.name.toUpperCase() + ": $" + product.price;
});

console.log("Formatted Report List: " + JSON.stringify(report));

// 10. Demonstrate block scope
{
    let blockVar = "Local variable";
    console.log("Inside block: " + blockVar);
}

try {
    console.log(blockVar);
} catch (error) {
    console.log(
        "Scope Test Error: ReferenceError: blockVar is not defined"
    );
}
