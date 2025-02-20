document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    const productContainer = document.querySelector(".product-container");

    // Check localStorage for saved theme
    if (localStorage.getItem("theme") === "dark-mode") {
        document.body.classList.remove("light-mode");
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.add("light-mode");
    }

    // Theme toggle event
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        document.body.classList.toggle("light-mode");

        // Save user preference
        localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark-mode" : "light-mode");
    });

    // Sample product list
    const products = [
        { name: "Futuristic Sneakers", desc: "Neon glow sneakers, perfect for 2025 street fashion.", img: "https://via.placeholder.com/200", link: "#" },
        { name: "Luxury Watch", desc: "Elegant old money style, timeless design.", img: "https://via.placeholder.com/200", link: "#" }
    ];

    // Function to generate product HTML dynamically
    function loadProducts() {
        productContainer.innerHTML = "";
        products.forEach(product => {
            const productHTML = `
                <div class="product">
                    <img src="${product.img}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.desc}</p>
                    <a href="${product.link}" target="_blank"><button class="buy-btn">Buy Now</button></a>
                </div>
            `;
            productContainer.innerHTML += productHTML;
        });
    }

    loadProducts(); // Load products dynamically
});

// 🔍 Product Search
function searchProducts() {
    const searchValue = document.getElementById("searchBar").value.toLowerCase();
    document.querySelectorAll(".product").forEach(product => {
        product.style.display = product.querySelector("h3").innerText.toLowerCase().includes(searchValue) ? "block" : "none";
    });
}
