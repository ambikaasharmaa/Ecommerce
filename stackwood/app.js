// // app.js
// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');

// const app = express();
// const port = 3000;

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('public')); // Serve static files from 'public' directory
// app.set('views', path.join(__dirname, 'views')); // Set views directory
// app.set('view engine', 'ejs'); // Set view engine to EJS

// let cart = []; // Cart to hold items

// // Render the cart page with cart items and totals
// app.get('/cart', (req, res) => {
//   // Calculate total price, delivery charge, and subtotal
//   const deliveryCharge = 0; // Customize delivery charge as needed
//   const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
//   const total = subtotal + deliveryCharge;

//   // Render the cart page with the calculated totals
//   res.render('cart', { cart, subtotal, deliveryCharge, total });
// });

// // Handle adding items to the cart
// app.post('/add-to-cart', (req, res) => {
//   const { name, price, quantity } = req.body;
//   const totalPrice = parseFloat(price) * parseInt(quantity);
//   cart.push({ name, price: parseFloat(price), quantity: parseInt(quantity), totalPrice });
//   res.redirect('/cart');
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });
// app.js

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files from 'public' directory
app.set('views', path.join(__dirname, 'views')); // Set views directory
app.set('view engine', 'ejs'); // Set view engine to EJS

let cart = []; // Cart to hold items

// Handle adding items to the cart
app.post('/add-to-cart', (req, res) => {
  const { name, price } = req.body;
  cart.push({ name, price: parseFloat(price) });
  res.sendStatus(200); // Send success status
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
