// let users = JSON.parse(localStorage.getItem('users'));
// let currentUser = users.find(user => user.isLogined === true);
// let basket = currentUser.basket || [];

// function createBasketItem() {
//     if (basket.length > 0) {
//         basket.forEach((product) => {
//             let basketItem = document.createElement("div");
//             basketItem.classList.add("basket-item");

//             let image = document.createElement("div");
//             image.classList.add("image");

//             let img = document.createElement("img");
//             let title = document.createElement("h4");
//             title.classList.add("title");

//             let category = document.createElement("div");
//             category.classList.add("category");

//             let price = document.createElement("div");
//             price.classList.add("price");

//             let totalPrice = document.createElement("div");
//             totalPrice.classList.add("total-price"); // Ümumi qiymət (müəyyən məhsul üçün)

//             let countArea = document.createElement("div");
//             countArea.classList.add("count-area");

//             let minusBtn = document.createElement("button");
//             minusBtn.classList.add("minus-btn");
//             minusBtn.setAttribute("disabled", "true");
//             minusBtn.textContent = "-";
//             minusBtn.addEventListener("click", () => decrementCount(product.id, count, totalPrice));

//             let count = document.createElement("p");
//             count.classList.add("count");
//             count.textContent = product.count;

//             let plusBtn = document.createElement("button");
//             plusBtn.classList.add("plus-btn");
//             plusBtn.textContent = "+";
//             plusBtn.addEventListener("click", () => incrementCount(product.id, count, totalPrice));

//             let removeBtn = document.createElement("button");
//             removeBtn.classList.add("btn", "btn-danger", "remove-btn");
//             removeBtn.textContent = "Remove";
//             removeBtn.addEventListener("click", () => removeItemFromBasket(product.id, basketItem));

//             countArea.append(minusBtn, count, plusBtn);
//             image.append(img);
//             basketItem.append(image, title, category, price, countArea, totalPrice, removeBtn);

//             let basketContainer = document.querySelector(".basket");
//             basketContainer.append(basketItem);

//             img.src = product.image;
//             title.textContent = product.title.slice(0, 10) + "...";
//             category.textContent = product.category;
//             price.textContent = `$${product.price.toFixed(2)}`;
//             totalPrice.textContent = `$${(product.price * product.count).toFixed(2)}`; // Hər bir məhsul üçün ümumi qiymət
//             count.textContent = product.count;
            
//         });
//     }
//     updateTotal(); // Total məbləği yeniləyirik
// }

// createBasketItem();

// function clearBasket() {
//     let userIndex = users.findIndex((user) => user.id === currentUser.id);
//     currentUser.basket = [];

//     let basketContainer = document.querySelector(".basket");
//     basketContainer.innerHTML = "";

//     users[userIndex].basket = currentUser.basket;
//     localStorage.setItem("users", JSON.stringify(users));

//     updateBasketCount();
//     updateTotal(); // Totalu yeniləyirik
// }

// let clearBasketBtn = document.createElement("button");
// clearBasketBtn.classList.add("btn", "btn-danger", "clear-basket-btn");
// clearBasketBtn.textContent = "Clear All Products";
// clearBasketBtn.addEventListener("click", clearBasket);
// let basketContainer = document.querySelector(".basket");
// basketContainer.append(clearBasketBtn);

// function incrementCount(productId, countElement, totalPriceElement) {
//     let userIndex = users.findIndex((user) => user.id === currentUser.id);
//     let existingProduct = basket.find((product) => product.id === productId);

//     if (existingProduct) {
//         existingProduct.count++;
//     }

//     countElement.textContent = existingProduct.count;
//     totalPriceElement.textContent = `$${(existingProduct.price * existingProduct.count).toFixed(2)}`; // Yenilənmiş ümumi qiymət

//     let minusBtn = countElement.previousElementSibling; // minusBtn referansı
//     if (existingProduct.count > 1) {
//         minusBtn.removeAttribute("disabled");
//     }

//     users[userIndex].basket = basket;
//     localStorage.setItem("users", JSON.stringify(users));

//     updateTotal(); // Total məbləğini yeniləyirik
// }

// function decrementCount(productId, countElement, totalPriceElement) {
//     let userIndex = users.findIndex((user) => user.id === currentUser.id);
//     let existingProduct = basket.find((product) => product.id === productId);

//     if (existingProduct && existingProduct.count > 1) {
//         existingProduct.count--;
//     }

//     countElement.textContent = existingProduct.count;
//     totalPriceElement.textContent = `$${(existingProduct.price * existingProduct.count).toFixed(2)}`; // Yenilənmiş ümumi qiymət

//     let minusBtn = countElement.previousElementSibling; // minusBtn referansı
//     if (existingProduct.count === 1) {
//         minusBtn.setAttribute("disabled", "true");
//     }

//     users[userIndex].basket = basket;
//     localStorage.setItem("users", JSON.stringify(users));

//     updateTotal(); // Total məbləğini yeniləyirik
// }

// function removeItemFromBasket(productId, basketItemElement) {
//     let userIndex = users.findIndex((user) => user.id === currentUser.id);
//     let productIndex = basket.findIndex((product) => product.id === productId);

//     if (productIndex !== -1) {
//         basket.splice(productIndex, 1); // Məhsulu basketdən çıxarırıq
//         users[userIndex].basket = basket;
//         localStorage.setItem("users", JSON.stringify(users));

//         // Məhsulu DOM-dan da silirik
//         basketItemElement.remove();
//         updateBasketCount(); // Basket sayını yeniləyirik
//         updateTotal(); // Ümumi məbləği yeniləyirik
//     }
// }

// function updateBasketCount() {
//     let basketCount = basket.reduce((acc, product) => acc + product.count, 0);
//     let basketElement = document.querySelector(".basketIcon sup");
//     if (basketElement) {
//         basketElement.textContent = basketCount;
//     }
// }

// // Total məbləğini yeniləyən funksiya
// function updateTotal() {
//     let totalAmount = basket.reduce((acc, product) => acc + (product.price * product.count), 0);
//     let totalElement = document.querySelector(".total-amount");
//     if (totalElement) {
//         totalElement.textContent = `$${totalAmount.toFixed(2)}`; // Ümumi məbləğ
//     }
// }




let users = JSON.parse(localStorage.getItem("users"));
let currentUser = users.find((user) => user.isLogined === true);
let basket = currentUser.basket || [];

function createBasketItem() {
  if (basket.length > 0) {
    basket.forEach((product) => {

        // !remove
      let basketItem = document.createElement("div");
      basketItem.classList.add("basket-item");
      basketItem.setAttribute("data-product-id", product.id); 

      let image = document.createElement("div");
      image.classList.add("image");

      let img = document.createElement("img");

      let title = document.createElement("h5");
      title.classList.add("title");

      let category = document.createElement("p");
      category.classList.add("category");

      let price = document.createElement("p");
      price.classList.add("price");

      let countArea = document.createElement("div");
      countArea.classList.add("count-area");

      let minusBtn = document.createElement("button");
      minusBtn.classList.add("minus-btn");
      minusBtn.textContent = "-";

      let isMinusDisabled = localStorage.getItem(`minusDisabled-${product.id}`) === 'true';
      if (isMinusDisabled) {
        minusBtn.setAttribute("disabled", "true");
      }

      minusBtn.addEventListener("click", () =>
        decrementCount(product.id, count, minusBtn, price)
      );

      let count = document.createElement("p");
      count.classList.add("count");
      count.textContent = product.count;

      let plusBtn = document.createElement("button");
      plusBtn.classList.add("plus-btn");
      plusBtn.textContent = "+";

      plusBtn.addEventListener("click", () =>
        incrementCount(product.id, count, minusBtn, price)
      );

      let removeBtn = document.createElement("button");
      removeBtn.classList.add("btn", "btn-danger", "remove-btn");
      removeBtn.textContent = "Remove";

      //! Remove 
      removeBtn.addEventListener("click", () => removeProduct(product.id, basketItem));

      countArea.append(minusBtn, count, plusBtn);
      image.append(img);
      basketItem.append(image, title, category, price, countArea, removeBtn);
      let basketContainer = document.querySelector(".basket");
      basketContainer.append(basketItem);

      img.src = product.image;
      title.textContent = product.title.slice(0, 10) + "...";
      category.textContent = product.category;
      price.textContent = `$${product.price.toFixed(2)}`; 
      count.textContent = product.count;
    });
  }
}
createBasketItem();


let clearBasketBtn = document.createElement("button");
clearBasketBtn.classList.add("btn","btn-danger");
clearBasketBtn.textContent = "Clear Basket";


let basketContainer = document.querySelector(".basket");
basketContainer.appendChild(clearBasketBtn);

clearBasketBtn.addEventListener("click", clearBasket);

function clearBasket() {
  
  basket = [];

  
  let basketItems = document.querySelectorAll(".basket-item");
  basketItems.forEach(item => item.remove());

  
  let userIndex = users.findIndex((user) => user.id === currentUser.id);
  users[userIndex].basket = [];
  localStorage.setItem("users", JSON.stringify(users));

  
  updateTotalPrice();
}

function removeProduct(productId, basketItemElement) {
  
  basket = basket.filter(product => product.id !== productId);

 
  basketItemElement.remove();

  
  let userIndex = users.findIndex((user) => user.id === currentUser.id);
  users[userIndex].basket = basket;
  localStorage.setItem("users", JSON.stringify(users));

 
  updateTotalPrice();
}

function incrementCount(
  productId,
  countElement,
  minusBtnElement,
  priceElement
) {
  let userIndex = users.findIndex((user) => user.id === currentUser.id);
  let exsistsProduct = basket.find((product) => product.id === productId);
  if (exsistsProduct) {
    exsistsProduct.count++;
  }

  countElement.textContent = exsistsProduct.count;

  if (exsistsProduct.count > 1) {
    minusBtnElement.removeAttribute("disabled");
    localStorage.setItem(`minusDisabled-${productId}`, 'false');
  }

  priceElement.textContent = `$${(exsistsProduct.price * exsistsProduct.count).toFixed(2)}`; 

  users[userIndex].basket = basket;
  localStorage.setItem("users", JSON.stringify(users));
  updateTotalPrice();
}

function decrementCount(
  productId,
  countElement,
  minusBtnElement,
  priceElement
) {
  let userIndex = users.findIndex((user) => user.id === currentUser.id);
  let exsistsProduct = basket.find((product) => product.id === productId);
  if (exsistsProduct && exsistsProduct.count > 1) {
    exsistsProduct.count--;
  }

  countElement.textContent = exsistsProduct.count;

  if (exsistsProduct.count === 1) {
    minusBtnElement.setAttribute("disabled", "true");
    localStorage.setItem(`minusDisabled-${productId}`, 'true');
  }

  priceElement.textContent = `$${(exsistsProduct.price * exsistsProduct.count).toFixed(2)}`; 

  users[userIndex].basket = basket;
  localStorage.setItem("users", JSON.stringify(users));
  updateTotalPrice();
  
}

function updateTotalPrice() {
  let totalPrice = 0;
  basket.forEach((product) => {
    totalPrice += product.price * product.count;
  });
  let total = document.querySelector(".total-price");
  total.textContent = `$${totalPrice.toFixed(2)}`;
}

updateTotalPrice();

