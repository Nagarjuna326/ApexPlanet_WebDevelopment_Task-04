const products = [
  { name: "Phone", category: "Electronics", price: 15000, rating: 4.5 },
  { name: "Headphones", category: "Electronics", price: 2500, rating: 4.2 },
  { name: "Shoes", category: "Fashion", price: 2000, rating: 4.0 },
  { name: "T-Shirt", category: "Fashion", price: 800, rating: 4.1 }
];

const categoryFilter = document.getElementById("categoryFilter");
const sortBy = document.getElementById("sortBy");
const productGrid = document.getElementById("productGrid");

function renderProducts() {
  let filtered = [...products];

  if (categoryFilter.value !== "all") {
    filtered = filtered.filter(
      product => product.category === categoryFilter.value
    );
  }

  if (sortBy.value === "low") {
    filtered.sort((a, b) => a.price - b.price);
  }

  if (sortBy.value === "high") {
    filtered.sort((a, b) => b.price - a.price);
  }

  productGrid.innerHTML = "";

  filtered.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${product.name}</h3>
      <p>${product.category}</p>
      <p>₹${product.price}</p>
      <p>Rating: ${product.rating}</p>
    `;
    productGrid.appendChild(card);
  });
}

categoryFilter.addEventListener("change", renderProducts);
sortBy.addEventListener("change", renderProducts);

renderProducts();