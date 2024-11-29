const products = [
  {
    "id": 1,
    "name": "Blender",
    "category": "Appliances",
    "price": 79.99,
    "availability": "In Stock",
    "images": [
      "images/Blender.png"
    ],
    "reviews": [
      { "user": "John", "rating": 4, "comment": "Good blender, works well!" },
      { "user": "Jane", "rating": 5, "comment": "Excellent for smoothies!" }
    ]
  },
  {
    "id": 2,
    "name": "Coffee Maker",
    "category": "Appliances",
    "price": 129.99,
    "availability": "Out of Stock",
    "images": [
      "images/CoffeeMaker.png"
    ],
    "reviews": [
      { "user": "Alice", "rating": 5, "comment": "Perfect coffee every morning!" },
      { "user": "Bob", "rating": 3, "comment": "Works fine but a bit noisy." }
    ]
  },
  {
    "id": 3,
    "name": "Headphones",
    "category": "Electronics",
    "price": 199.99,
    "availability": "In Stock",
    "images": [
      "images/Headphones.png"
    ],
    "reviews": [
      { "user": "Tom", "rating": 4, "comment": "Great sound quality, but a bit tight." },
      { "user": "Lucy", "rating": 5, "comment": "Amazing sound, very comfortable!" }
    ]
  },
  {
    "id": 4,
    "name": "Laptop",
    "category": "Electronics",
    "price": 899.99,
    "availability": "In Stock",
    "images": [
      "images/Laptop.png"
    ],
    "reviews": [
      { "user": "Mark", "rating": 5, "comment": "Powerful laptop, fast performance!" },
      { "user": "Sophia", "rating": 4, "comment": "Great value for the price." }
    ]
  },
  {
    "id": 5,
    "name": "Smartphone",
    "category": "Electronics",
    "price": 499.99,
    "availability": "In Stock",
    "images": [
      "images/Smartphone.png"
    ],
    "reviews": [
      { "user": "Alex", "rating": 4, "comment": "Good phone for the price!" },
      { "user": "Chris", "rating": 5, "comment": "Excellent features and speed!" }
    ]
  }
];

let filteredProducts = [...products];

const searchInput = document.getElementById("searchInput");
const productContainer = document.getElementById("productContainer");
const sortSelect = document.getElementById("sortSelect");

// Render the products
function renderProducts(productsToRender) {
  productContainer.innerHTML = '';
  if (productsToRender.length === 0) {
    productContainer.innerHTML = '<p>No products found.</p>';
  } else {
    productsToRender.forEach(product => {
      const productName = product.name || 'Unnamed Product';
      const productImages = product.images || ['images/placeholder.png']; // Fallback image
      const productPrice = product.price || 0;
      const productAvailability = product.availability || 'N/A';
      const reviews = product.reviews.length > 0 ? product.reviews : [{ user: 'N/A', rating: 0, comment: 'No reviews' }];

      const productHTML = `
        <div class="col-md-4 mb-4">
          <div class="card shadow-sm">
            <img src="${productImages[0]}" class="card-img-top" alt="${productName}">
            <div class="card-body">
              <h5 class="card-title">${productName}</h5>
              <p class="card-text">Category: ${product.category}</p>
              <p class="card-text">Price: $${productPrice.toFixed(2)}</p>
              <p class="card-text">Availability: ${productAvailability}</p>
              <h6>Reviews:</h6>
              <ul class="list-unstyled">
                ${reviews.map(review => `
                  <li><strong>${review.user}</strong>: ${review.comment} (${review.rating} stars)</li>
                `).join('')}
              </ul>
            </div>
          </div>
        </div>
      `;
      productContainer.innerHTML += productHTML;
    });
  }
}

// Event listener for the search input
searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();
  filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm) || 
    product.price.toString().includes(searchTerm)
  );
  renderProducts(filteredProducts);
});

// Event listener for the sorting dropdown
sortSelect.addEventListener("change", function () {
  const sortBy = sortSelect.value;
  if (sortBy === "price") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "name") {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  }
  renderProducts(filteredProducts);
});

// Initial render
renderProducts(filteredProducts);
