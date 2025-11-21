// Task 2: Create the Product Inventory Array

const products = ["Laptop", "Phone", "Headphones", "Monitor"];
// Task 3: Access Product Information

function logFirstProduct() {
    console.log(products[0]);
}

logFirstProduct();
// Task 4: Add a Product

function addProduct(productName) {
    products.push(productName);
    console.log(productName + " has been added to the inventory.");
}

// Test the function
addProduct("Tablet");
console.log(products);
// Task 5: Update a Product Name

function updateProductName(index, newName) {
    products[index] = newName;
    console.log("Product at position " + index + " has been updated to " + newName);
}

// Test the function
updateProductName(1, "Smartphone");
console.log(products);
function removeLastProduct() {
    products.pop();
    console.log("Last product removed. Updated list:", products);
}



