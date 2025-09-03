const productsData = [
    {id:1, name:"Producto 1", price:10, img:"img/producto1.jpg"},
    {id:2, name:"Producto 2", price:15, img:"img/producto2.jpg"},
    {id:3, name:"Producto 3", price:20, img:"img/producto3.jpg"},
    {id:4, name:"Producto 4", price:12, img:"img/producto4.jpg"},
    {id:5, name:"Producto 5", price:18, img:"img/producto5.jpg"},
    {id:6, name:"Producto 6", price:25, img:"img/producto6.jpg"},
    {id:7, name:"Producto 7", price:22, img:"img/producto7.jpg"},
    {id:8, name:"Producto 8", price:30, img:"img/producto8.jpg"},
    {id:9, name:"Producto 9", price:16, img:"img/producto9.jpg"},
    {id:10, name:"Producto 10", price:28, img:"img/producto10.jpg"},
];

let cart = [];

const productsSection = document.getElementById('products');
const cartSection = document.getElementById('cart');
const showProductsBtn = document.getElementById('show-products');
const showCartBtn = document.getElementById('show-cart');
const totalButton = document.getElementById('total-button');
const totalAmount = document.getElementById('total-amount');

// Mostrar productos
function displayProducts() {
    productsSection.innerHTML = '';
    productsData.forEach(product => {
        const div = document.createElement('div');
        div.className = 'product';
        div.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Precio: $${product.price}</p>
            <button class="add-cart" onclick="addToCart(${product.id})">Agregar al carrito</button>
        `;
        productsSection.appendChild(div);
    });
}

// Agregar al carrito
function addToCart(id) {
    const product = productsData.find(p => p.id === id);
    cart.push(product);
    alert(`${product.name} agregado al carrito`);
}

// Mostrar carrito
function displayCart() {
    cartSection.innerHTML = '';
    if(cart.length === 0){
        cartSection.innerHTML = '<p>El carrito está vacío</p>';
        return;
    }
    cart.forEach(item => {
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>Precio: $${item.price}</p>
        `;
        cartSection.appendChild(div);
    });
}

// Mostrar total
totalButton.addEventListener('click', () => {
    const sum = cart.reduce((acc, item) => acc + item.price, 0);
    totalAmount.textContent = `Total: $${sum}`;
});

// Navegación entre pestañas
showProductsBtn.addEventListener('click', () => {
    productsSection.classList.add('active');
    cartSection.classList.remove('active');
});

showCartBtn.addEventListener('click', () => {
    displayCart();
    cartSection.classList.add('active');
    productsSection.classList.remove('active');
});

// Inicialización
displayProducts();
