// نفس مصفوفة المنتجات
const products = [
    { id:1, name:"كمبيوتر مكتبي Core i7", desc:"RAM 16GB • SSD 512GB", price:"12000 جنيه", image:"https://images.unsplash.com/photo-1587202372775-9187cf7c1f11?crop=entropy&cs=tinysrgb&fit=max&h=200&w=300", category:"كمبيوتر" },
    { id:2, name:"شاشة Samsung 27\"", desc:"144Hz • FHD", price:"5500 جنيه", image:"https://images.unsplash.com/photo-1587202373020-fb6f7e3f2c12?crop=entropy&cs=tinysrgb&fit=max&h=200&w=300", category:"شاشات" },
    { id:3, name:"كيبورد ميكانيكال RGB", desc:"Blue Switch • RGB", price:"850 جنيه", image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQhlv8ZjYZkIEUPlRKbHHgGA3HVzWYzofoylOopiV0FfF_QgXtpWvJ623EqeQLx6JEEAzXM9eUsFcz7TPl1av8fdnotG6Y_fCHg5eknL6rOEatsZJIpgcykaXyvkEvV9HXsRf8mVJeeAds&usqp=CAc", category:"اكسسوارات" },
    { id:4, name:"ماوس جيمينج RGB", desc:"12000 DPI • 7 Buttons", price:"350 جنيه", image:"https://images-na.ssl-images-amazon.com/images/I/41AYxbXPPNL._SL500_._AC_SL500_.jpg", category:"اكسسوارات" },
    { id:5, name:"لاب توب HP i5", desc:"Ram 8GB • SSD 256GB", price:"14500 جنيه", image:"https://images.unsplash.com/photo-1587825140408-b4f97b5ec0e4?crop=entropy&cs=tinysrgb&fit=max&h=200&w=300", category:"كمبيوتر" },
    { id:6, name:"لاب توب Lenovo i7", desc:"Ram 16GB • SSD 512GB", price:"18500 جنيه", image:"https://images.unsplash.com/photo-1579389083078-55b9d32f90b7?crop=entropy&cs=tinysrgb&fit=max&h=200&w=300", category:"كمبيوتر" },
    { id:7, name:"سماعة HyperX", desc:"Surround 7.1 • USB", price:"1200 جنيه", image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRACCRBXxPvnqtKrVoRnES0KAqUpi8P6tkxipS96GaDR8P8K-KQKofNWW7-zkdGHJL_8w78Pd7WTxlsz_XWmqGzz2ELLllCw-0qTHPc3gk8rY3skfySYEP1r2AKak3CGAZho8Q2SU0&usqp=CAc", category:"اكسسوارات" },
    { id:8, name:"شاشة LG 24\"", desc:"75Hz • IPS", price:"3200 جنيه", image:"https://images.unsplash.com/photo-1593642532973-d31b6557fa68?crop=entropy&cs=tinysrgb&fit=max&h=200&w=300", category:"شاشات" },
    { id:9, name:"هارد خارجي 1TB", desc:"USB 3.0", price:"1500 جنيه", image:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTfDJG-Nt2W4p5G_APac3fr3Y7pCd1B_KWhPDBZtathkQWaS8yQFvjfiPZn6qbRe3FuM8sOdSYUNOaatvuCxjuuoM0fwLZYtokPWJRPoIIU8bcNMPxuFOc4wc3TBqmLgUqNHw6F8TqB7A&usqp=CAc", category:"اكسسوارات" },
    { id:10, name:"ميكروفون احترافي", desc:"Plug & Play", price:"900 جنيه", image:"https://images.unsplash.com/photo-1588776814546-600c48de08fa?crop=entropy&cs=tinysrgb&fit=max&h=200&w=300", category:"اكسسوارات" },
    { id:11, name:"راوتر TP-Link", desc:"Dual Band", price:"650 جنيه", image:"https://images.unsplash.com/photo-1606813901905-d1c5dcf2fd89?crop=entropy&cs=tinysrgb&fit=max&h=200&w=300", category:"اكسسوارات" },
    { id:12, name:"فأرة لاسلكية", desc:"Wireless 2.4GHz", price:"220 جنيه", image:"https://images.unsplash.com/photo-1606226246612-99410c4b4f1f?crop=entropy&cs=tinysrgb&fit=max&h=200&w=300", category:"اكسسوارات" }
];

const detailsContainer = document.getElementById("detailsContainer");

// أخذ id المنتج من الرابط
const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get("id"));

// إيجاد المنتج
const product = products.find(p => p.id === productId);

if(product){
    detailsContainer.innerHTML = `
    <div class="product-image">
        <img src="${product.image}" alt="${product.name}">
    </div>
    <div class="product-info">
        <h2>${product.name}</h2>
        <span class="price">${product.price}</span>
        <h3>الوصف:</h3>
        <p>${product.desc}</p>
        <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
    </div>
    `;
} else {
    detailsContainer.innerHTML = `<p>المنتج غير موجود!</p>`;
}

// إضافة للعربة
let cart = [];
function addToCart(id){
    const p = products.find(p => p.id === id);
    if(p){
        cart.push(p);
        alert(`${p.name} تم إضافته للعربة!`);
    }
}
