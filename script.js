// Mock product data
const products = [
    { id: 1, name: "Product 1", description: "This is a great product 1.", price: "$199.99" },
    { id: 2, name: "Product 2", description: "This is an amazing product 2.", price: "$249.99" },
    { id: 3, name: "Product 3", description: "This is an awesome product 3.", price: "$399.99" },
    { id: 4, name: "Product 4", description: "This is a fantastic product 4.", price: "$149.99" },
];

// Function to display product details in a modal
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        document.getElementById('productTitle').textContent = product.name;
        document.getElementById('productDescription').textContent = product.description;
        document.getElementById('productPrice').textContent = `Price: ${product.price}`;
        document.getElementById('productModal').style.display = 'flex';
    }
}

// Function to close the modal
function closeModal() {
    document.getElementById('productModal').style.display = 'none';
}
