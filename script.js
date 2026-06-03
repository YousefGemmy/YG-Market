const products = [
{
name:"GTA V",
price:610,
image:"https://images.unsplash.com/photo-1542751110-97427bbecf20"
},
{
name:"Minecraft",
price:550,
image:"https://images.unsplash.com/photo-1511512578047-dfb367046420"
},
{
name:"Red Dead Redemption 2",
price:595,
image:"https://images.unsplash.com/photo-1493711662062-fa541adb3fc8"
}
];

let cart = 0;

const productsDiv = document.getElementById("products");
const searchInput = document.getElementById("search");

function displayProducts(list){
productsDiv.innerHTML="";

list.forEach(product=>{

productsDiv.innerHTML += `
<div class="card">
<img src="${product.image}">
<h2>${product.name}</h2>
<div class="price">${product.price} جنيه</div>
<button onclick="addToCart()">إضافة للسلة</button>
</div>
`;

});
}

function addToCart(){
cart++;
document.getElementById("cart-count").innerText = cart;
}

searchInput.addEventListener("input",()=>{

const filtered = products.filter(product =>
product.name.toLowerCase().includes(searchInput.value.toLowerCase())
);

displayProducts(filtered);

});

displayProducts(products);
