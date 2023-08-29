/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/
const products = [
  {name: "Strawberries",
    price: 2,
    quantity: 0,
    productId: 0,
   image: "images/strawberry.jpg"
},
  {
    name: "Oranges",
    price: 5,
    quantity: 0,
    productId: 1,
    image: "images/orange.jpg"
  },
  {
    name: "Cherries",
    price: 1,
    quantity: 0,
    productId: 2,
    image: "images/cherry.jpg"
  }
]

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */
let cart = [];

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
function addProductToCart(id) { 
  const item = products.find((product) => product.productId === id);
  if (cart.some((item) => item.productId === id)) {
    item.quantity += 1;
    console.log(cart)
  } else {
    item.quantity = 1;
    cart.push(item);
    console.log(cart);
  }
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
function increaseQuantity(id) {
  const item = products.find((product) => product.productId === id);
  if (cart.some((item) => item.productId === id)) {
    item.quantity += 1;
    console.log(cart.item)
  }
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(id) {
  const item = products.find((product) => product.productId === id);
  if (cart.some((item) => item.productId === id)) {
    item.quantity -= 1;
    console.log(cart)
  }
  if (item.quantity === 0) {
    cart.pop(item);
    //console.log(cart.item);
}
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
function removeProductFromCart(id) {
  const item = products.find((product) => product.productId === id);
  item.quantity = 0;
  cart.pop(item);
  
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/
let cartTotal = function() {
  let total = 0;
  for (let i = 0; i < cart.length; i++){
    console.log(cart[i]);
    let item = cart[i];
    total = total + (item.price * item.quantity);
  }
  return total;
  //for and/or while loop
}

/* Create a function called emptyCart that empties the products from the cart */
function emptyCart() {
  for (i = 0; i < redFox; i++){
    item[i].quantity = 0;
  }
  cartEmpty = [];
  //an array that has no elements - 1 line or so
}

//Is this to cartTotal() + something???
let totalPaid = 0;
/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/
function pay(amount) {
  //use the cartTotal function and compare that. (amount)
  //function works, but got to get the calculations to work
  //Step 1: Calculate the remaining amount by subtracting amount from cartTotal
  //Step 2: If remaining balance is below 0, make it return a negative number
    //Working
  //Step 3: If remaining balance is above 0, make it return the excess to customer
    //Gotta figure out how to have it receive more money and spit it out.
  if (cartTotal() - amount > 0) {
    totalPaid += amount;
    return totalPaid - cartTotal();
  } else {
    return amount - cartTotal();
  }
}
/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}
