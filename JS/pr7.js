// Ensure that the content is updated after the page is loaded
window.onload = function() {
  document.getElementById('name').innerText = localStorage.getItem('name') || 'Guest';
  document.getElementById('email').innerText = localStorage.getItem('email') || 'No email available';
};

function logout() {
  // Clear user data and redirect to login page
  localStorage.removeItem('name');
  localStorage.removeItem('email');
  window.location.href = "login.html";
}
let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
};

let shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#cart-btn").onclick = () => {
  shoppingCart.classList.toggle("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
};
 
let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');

} 

let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
};

window.onscroll = () => {
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
};

const list = document.getElementById("list-container");
const productList = [
    {
        id: 1,
        src: "https://i.pinimg.com/564x/f0/eb/a6/f0eba657c28142f5bcaf706a2e54ea77.jpg",
        hotelName: "KFC",
        description: "Original Recipe Chicken Bucket, Fries, and Coleslaw",
        rating: "4.8",
        time: "20Min",
        amt: "350",
        offer: "15% Off | Use KFC15",
      },
      
      {
        id: 2,
        src: "https://i.pinimg.com/564x/14/7b/f8/147bf894d0d17ddbd5d422d6506eaad0.jpg",
        hotelName: "KFC",
        description: "Crispy Chicken Sandwich, Fries, and Drink",
        rating: "4.7",
        time: "25Min",
        amt: "400",
        offer: "20% Off | Use KFC20",
      },
      
      {
        id: 3,
        src: "https://i.pinimg.com/564x/0c/c6/14/0cc61431cc1e7e4140258b2b756d67c7.jpg",
        hotelName: "KFC",
        description: "Chicken Nuggets, Fries, and Dipping Sauce",
        rating: "4.6",
        time: "22Min",
        amt: "380",
        offer: "10% Off | Use NUGGETS10",
      },
      
      {
        id: 4,
        src: "https://i.pinimg.com/736x/64/75/bd/6475bd8715ee6b0d86134cf6bd595233.jpg",
        hotelName: "KFC",
        description: "Zinger Burger, Fries, and Coleslaw",
        rating: "4.9",
        time: "30Min",
        amt: "600",
        offer: "20% Off | Use ZINGER20",
      },
      
      {
        id: 5,
        src: "https://i.pinimg.com/736x/45/65/ba/4565ba7e15e0c63c49d5c9cf5bd0eca6.jpg",
        hotelName: "KFC",
        description: "Chicken Popcorn, Fries, and Drink",
        rating: "4.5",
        time: "18Min",
        amt: "320",
        offer: "15% Off | Use POPCORN15",
      },
      
      {
        id: 6,
        src: "https://i.pinimg.com/564x/2e/5e/5d/2e5e5dd49516daffe6473b66c2ef46ff.jpg",
        hotelName: "KFC",
        description: "Chicken Wings, Fries, and Dipping Sauce",
        rating: "4.7",
        time: "20Min",
        amt: "340",
        offer: "25% Off | Use WINGS25",
      },
      
      {
        id: 7,
        src: "https://i.pinimg.com/736x/54/8f/58/548f58db3f253a11cba01f01c9ccae12.jpg",
        hotelName: "KFC",
        description: "Chicken Breast, Fries, and Coleslaw",
        rating: "4.6",
        time: "15Min",
        amt: "300",
        offer: "20% Off | Use BREAST20",
      },
      
      {
        id: 8,
        src: "https://i.pinimg.com/736x/d5/a1/16/d5a116fccb54e556fc994a12af2709cd.jpg",
        hotelName: "KFC",
        description: "Chicken Tenders, Fries, and Dipping Sauce",
        rating: "4.5",
        time: "12Min",
        amt: "250",
        offer: "10% Off | Use TENDERS10",
      },
      
      {
        id: 9,
        src: "https://i.pinimg.com/736x/c0/c3/4a/c0c34a3242981df233b77c7a0592f6c2.jpg",
        hotelName: "KFC",
        description: "Chicken Caesar Salad, Croutons, and Parmesan",
        rating: "4.7",
        time: "22Min",
        amt: "370",
        offer: "15% Off | Use CAESAR15",
      },
      
      {
        id: 10,
        src: "https://i.pinimg.com/564x/e0/d7/d2/e0d7d2b54d2d8fd2cb6d5b876c439481.jpg",
        hotelName: "KFC",
        description: "Chicken Sandwich, Fries, and Drink",
        rating: "4.8",
        time: "18Min",
        amt: "280",
        offer: "10% Off | Use SANDWICH10",
      },
      
      {
        id: 11,
        src: "https://i.pinimg.com/564x/f6/b1/5a/f6b15ae43084458804892cdb6d0a4f92.jpg",
        hotelName: "KFC",
        description: "Chicken Bucket, Fries, and Coleslaw",
        rating: "4.6",
        time: "20Min",
        amt: "350",
        offer: "20% Off | Use BUCKET20",
      },
      
      {
        id: 12,
        src: "https://i.pinimg.com/736x/a3/8a/0b/a38a0bd672aa7bcf263f65aa08aa8b28.jpg",
        hotelName: "KFC",
        description: "Chicken Wings, Fries, and Dipping Sauce",
        rating: "4.7",
        time: "22Min",
        amt: "360",
        offer: "25% Off | Use WINGS25",
      },
  ];
  
console.log(typeof id);
function renderProdcuts() {
  productList.forEach((product) => {
    //const{src,hotelName,description,rating,time,amt,offer}= productList[product]

    const vidDiv = document.createElement("div");
    vidDiv.className='cardDiv';
    //carddiv.className = 'list-container'

    vidDiv.innerHTML = `<div class="vid-list" data-name="p-1">
             <img src="${product.src}" class="img-class" alt=""
             /></a>
         <div class="flex-div">
           <div class="vid-info">
             <a href="" class="title">${product.hotelName}</a>
             <p>${product.description}</p>
             <p>Desserts,Beverages and lot more...</p>
             <div class="btns flex-div">
                
                 <div class="rating"> <span class="fas fa-star">${product.rating}</span> </div> 
                 <div class="time">${product.time}</div> 
                 <div class="amt">RS.${product.amt}</div>
             </div>
             <div class="offers">
             <p>${product.offer}</p>
             <button id="add" class="button" onclick="addToCart(${product.id})">Add to cart</button>
         </div>
           </div>
         </div>
       </div>`;

    list.appendChild(vidDiv);
  });
}

renderProdcuts();
let btnAdd=document.querySelector('button');
btnAdd.addEventListener('click', ()=>{
  btnAdd.innerText="Go To cart";
});

const cartItemsEl = document.querySelector(".box"); // box
const subtotalEl = document.querySelector(".subtotal");
const totalItemsInCartEl = document.querySelector(".total-items-in-cart");

const cartItem = document.getElementById("shopping-cart");

let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

// ADD TO CART
function addToCart(id) {
  // check if prodcut already exist in cart
  if (cart.some((item) => item.id === id)) {
    changeNumberOfUnits("plus", id);
  } else {
    const item = productList.find((product) => product.id === id);
    console.log(item);
    cart.push({
      ...item,
      numberOfUnits: 1,
    });
  }

  updateCart();
}

// update cart
function updateCart() {
  renderCartItems();
  renderSubtotal();

  // save cart to local storage
  localStorage.setItem("CART", JSON.stringify(cart));
}

// calculate and render subtotal
function renderSubtotal() {
  let totalPrice = 0,
    totalItems = 0;

  cart.forEach((item) => {
    totalPrice += item.amt * item.numberOfUnits;
    totalItems += item.numberOfUnits;
  });

  subtotalEl.innerHTML = `Total (${totalItems} items): INR ${totalPrice}`;
  totalItemsInCartEl.innerHTML = totalItems;
}

function renderCartItems() {
  cartItemsEl.innerHTML = ""; // clear cart element
  cart.forEach((item) => {
    cartItemsEl.innerHTML += `<table>
        <tr>
          <th>Item</th>
          <th>Description</th>
          <th>Quantity</th>
          <th>Remove</th>
        </tr>
        <tr>
          <td><div class="img"><img src="${item.src}" alt=""></div></td>
          <td><div class="cart-content">
                <div class="des">
                        ${item.description}
                    </div>
                    <span class="price">Amount:Rs.${item.amt}</span></div>
                 </td>
          <td><div class="units">
                    <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
                    <div class="number">${item.numberOfUnits}</div>
                    <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.id})">+</div>           
                </div></td>
                <td><i class="fas fa-trash" onclick="removeItemFromCart(${item.id})"></i></td>
        </tr>
        </table>
        
        `;
  });
}

// remove item from cart
function removeItemFromCart(id) {
  cart = cart.filter((item) => item.id !== id);

  updateCart();
}

// change number of units for an item
function changeNumberOfUnits(action, id) {
  cart = cart.map((item) => {
    let numberOfUnits = item.numberOfUnits;

    if (item.id === id) {
      if (action === "minus" && numberOfUnits > 1) {
        numberOfUnits--;
      } else if (action === "plus") {
        numberOfUnits++;
      }
    }

    return {
      ...item,
      numberOfUnits,
    };
  });

  updateCart();
}



function searchProducts() {
  let input = document.getElementById("search-box").value.toUpperCase(); // Get search input
  let productList = document.getElementById("list-container");
  let cards = productList.getElementsByClassName("cardDiv"); // Select the product cards

  // Loop through all the product cards
  for (let i = 0; i < cards.length; i++) {
    let descriptionElement = cards[i].querySelector("p"); // The element that holds the description (first <p> tag in the card)
    let description = descriptionElement ? descriptionElement.innerText.toUpperCase() : ""; // Get description and convert to uppercase

    // If the description contains the search input, show the card, otherwise hide it
    if (description.indexOf(input) > -1) {
      cards[i].style.display = "block";  // Show the card if description matches
    } else {
      cards[i].style.display = "none";   // Hide the card if description doesn't match
    }
  }
}


 