// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
        // 1. Trobar el producte amb l'ID indicat a l'array products
        let product = products.find(p => p.id === id);

        // 2. Comprovar si el producte ja es troba al carret
        let productInCart = cart.find(item => item.id === id);

        if (productInCart) {
            // 3. Si el producte ja es troba al carret, incrementem la seva quantit
            productInCart.quantity++;
            console.log(`producte ${productInCart.name} update to quantity: ${productInCart.quantity}`);
        } else {
            // 4. Si no hi és, afegim el producte al carret amb quantity inicial a 1
            cart.push({ ...product, quantity: 1 });
            console.log(`producte ${product.name} afegit al carrito`);
        }
    
        console.log(cart); // Per verificar l'array cart després de l'operació
}

// Exercise 2
function cleanCart() {

    cart = [];
    console.log('Cart has been emptied:', cart);

}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
   // Inicialitzem la variable total a 0
   total = 0;

   // Recorrem l'array cart per calcular el preu total
   for (let item of cart) {
       total += item.price * item.quantity;
   }

   console.log("Preu total del caret:", total);
   return total;
}

// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
}

// Exercise 5
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {

}

function open_modal() {
    printCart();
}