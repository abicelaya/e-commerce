// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
  {
    id: 1,
    name: "Cooking oil",
    price: 10.5,
    type: "grocery",
    offer: {
      number: 3,
      percent: 20,
    },
  },
  {
    id: 2,
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    id: 3,
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
    offer: {
      number: 10,
      percent: 30,
    },
  },
  {
    id: 4,
    name: "All-in-one",
    price: 260,
    type: "beauty",
  },
  {
    id: 5,
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
  },
  {
    id: 6,
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
  },
  {
    id: 7,
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
  },
  {
    id: 8,
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
  },
  {
    id: 9,
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
  },
];

// => Reminder, it's extremely important that you debug your code.
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster.
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array
  let product = products.find((element) => element.id == id);

  let productCart = cart.find((element) => element.id == id);

  if (productCart == undefined) {
    let addProduct = { ...product, quantity: 1 };
    cart.push(addProduct);
  } else {
    cart.map((product) => {
      if (product.id == id) {
        product.quantity++;
      }
    });
  }
}

// Exercise 2
function cleanCart() {
  cart = [];
}

// Exercise 3
function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array
  total = cart.reduce(
    (acumulador, product) => acumulador + product.price * product.quantity,
    0
  );
}

// Exercise 4
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"
  // para aplicar descuento el producto debe cumplir con:
  // 1. buscar la propiedad offer.
  // 2. busco si la cantidad del producto es mayor o igual que la propiedad number, product.quantity >= product.offer.number
  // ---> si cumple lo guardamos en una nueva propiedad el subtotalWithDiscount.

  let discountedProduct = cart.filter((product) =>
    product.hasOwnProperty("offer")
  );
  discountedProduct.map((product) => {
    if (product.quantity >= product.offer.number) {
      product.subtotalWithDiscount =
        product.price - (product.price * product.offer.percent) / 100;
    }
  });
}

// Exercise 5
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
  // para mostrar en el modal primero hay que buscar que productos se añadieron al carrito

  let tabla = document.getElementById("cart_list");
  applyPromotionsCart();
  // Limpiamos el contenido anterior de la tabla
  tabla.innerHTML = "";

  // Recorremos el carrito y creamos una fila por cada elemento
  for (let i = 0; i < cart.length; i++) {
    let fila = document.createElement("tr");

    // Creamos las celdas de la fila
    let nombreCelda = document.createElement("th");
    nombreCelda.textContent = cart[i].name;
    fila.appendChild(nombreCelda);

    let calcPrice = 0;
    if (cart[i].hasOwnProperty("subtotalWithDiscount")) {
      calcPrice = cart[i].subtotalWithDiscount;
    } else {
      calcPrice = cart[i].price;
    }

    let precioCelda = document.createElement("td");
    precioCelda.textContent = calcPrice;
    fila.appendChild(precioCelda);

    let cantidadCelda = document.createElement("td");
    cantidadCelda.textContent = cart[i].quantity;
    fila.appendChild(cantidadCelda);

    let subtotalCelda = document.createElement("td");
    subtotalCelda.textContent = calcPrice * cart[i].quantity;
    fila.appendChild(subtotalCelda);

    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "-";
    botonEliminar.onclick = function () {
      removeFromCart(cart[i].id);
      printCart(); // Volvemos a imprimir el carrito después de eliminar el producto
    };
    let botonCelda = document.createElement("td");
    botonCelda.appendChild(botonEliminar);
    fila.appendChild(botonCelda);

    // Agregamos la fila a la tabla
    tabla.appendChild(fila);
  }
}

// ** Nivell II **

// Exercise 7
function removeFromCart(id) {
  // buscar el producto en el carrito
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      // si la cantidad del producto es mayor que 1 decrementa la cantidad
      cart[i].quantity--;
    }
  }
  //filtramos los productos con cantidad > 0 y devolvemos un array nuevo
  cart = cart.filter((product) => product.quantity > 0);
  applyPromotionsCart();
}

function open_modal() {
  printCart();
}
