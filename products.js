const products = [
    { id:1, name:"كمبيوتر مكتبي Core i7", desc:"RAM 16GB • SSD 512GB", price:"12000 جنيه",
      image:"https://images.pexels.com/photos/18105/pexels-photo.jpg", category:"كمبيوتر" },

    { id:2, name:"شاشة Samsung 27\"", desc:"144Hz • FHD", price:"5500 جنيه",
      image:"https://images.pexels.com/photos/306763/pexels-photo-306763.jpeg", category:"شاشات" },

    { id:3, name:"كيبورد ميكانيكال RGB", desc:"Blue Switch • RGB", price:"850 جنيه",
      image:"https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg", category:"اكسسوارات" },

    { id:4, name:"ماوس جيمينج RGB", desc:"12000 DPI • 7 Buttons", price:"350 جنيه",
      image:"https://raw.githubusercontent.com/ismail023/hosted-images/main/rgb-mouse.jpg", 
      category:"اكسسوارات" },

    { id:5, name:"لاب توب HP i5", desc:"Ram 8GB • SSD 256GB", price:"14500 جنيه",
      image:"https://images.pexels.com/photos/18105/pexels-photo.jpg", category:"كمبيوتر" },

    { id:6, name:"لاب توب Lenovo i7", desc:"Ram 16GB • SSD 512GB", price:"18500 جنيه",
      image:"https://images.pexels.com/photos/18105/pexels-photo.jpg", category:"كمبيوتر" },

    { id:7, name:"سماعة HyperX", desc:"Surround 7.1 • USB", price:"1200 جنيه",
      image:"https://raw.githubusercontent.com/ismail023/hosted-images/main/hyperx-headset.jpg", 
      category:"اكسسوارات" },

    { id:8, name:"شاشة LG 24\"", desc:"75Hz • IPS", price:"3200 جنيه",
      image:"https://images.pexels.com/photos/97077/pexels-photo-97077.jpeg", category:"شاشات" },

    // الصور اللي انتي طلبتي تتغير
    { id:9, name:"هارد خارجي 1TB", desc:"USB 3.0", price:"1500 جنيه",
      image:"https://raw.githubusercontent.com/ismail023/hosted-images/main/external-hdd.jpg", 
      category:"اكسسوارات" },

    { id:10, name:"ميكروفون احترافي", desc:"Plug & Play", price:"900 جنيه",
      image:"https://images.pexels.com/photos/3394667/pexels-photo-3394667.jpeg", category:"اكسسوارات" },

    { id:11, name:"راوتر TP-Link", desc:"Dual Band", price:"650 جنيه",
      image:"https://images.pexels.com/photos/1054397/pexels-photo-1054397.jpeg", category:"اكسسوارات" },

    { id:12, name:"فأرة لاسلكية", desc:"Wireless 2.4GHz", price:"220 جنيه",
      image:"https://images.pexels.com/photos/5082573/pexels-photo-5082573.jpeg", category:"اكسسوارات" }
];

const productList = document.getElementById("productList");
const cartCount = document.getElementById("cartCount");
let cart = [];

// عرض المنتجات
function displayProducts(list) {
    productList.innerHTML = "";
    list.forEach(product => {
        productList.innerHTML += `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.desc}</p>
            <span class="price">${product.price}</span>

            <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>

            <a href="product-details.html?id=${product.id}" class="btn" style="background:#4da6ff;">
                عرض التفاصيل
            </a>
        </div>`;
    });
}

// إضافة إلى العربة
function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    cartCount.textContent = cart.length;
    alert(product.name + " تم إضافته إلى العربة!");
}

// بحث وفلترة
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

searchInput.addEventListener("input", applyFilters);
categoryFilter.addEventListener("change", applyFilters);

function applyFilters() {
    const searchText = searchInput.value.toLowerCase();
    const categoryValue = categoryFilter.value;

    let filtered = products.filter(p =>
        p.name.toLowerCase().includes(searchText) ||
        p.desc.toLowerCase().includes(searchText)
    );

    if (categoryValue !== "all") {
        filtered = filtered.filter(p => p.category === categoryValue);
    }

    displayProducts(filtered);
}

// عرض أولي
displayProducts(products);
