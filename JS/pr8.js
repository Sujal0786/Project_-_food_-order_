window.onload = function() {
  document.getElementById('name').innerText = localStorage.getItem('name') || 'Guest';
  document.getElementById('email').innerText = localStorage.getItem('email') || 'No email available';
};

function logout() {
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
        src: "https://i.pinimg.com/736x/32/a0/dc/32a0dc40da125a64ae35210ba84221ef.jpg",
        hotelName: "Burger King",
        description: "Whopper Sandwich, Fries, and Drink",
        rating: "4.8",
        time: "20Min",
        amt: "350",
        offer: "15% Off | Use WHOPPER15",
      },
      
      {
        id: 2,
        src: "https://i.pinimg.com/564x/d8/39/12/d839128eb7d0689f0eadc50995b11333.jpg",
        hotelName: "Burger King",
        description: "Bacon King Sandwich, Fries, and Drink",
        rating: "4.7",
        time: "25Min",
        amt: "400",
        offer: "20% Off | Use BACON20",
      },
      
      {
        id: 3,
        src: "https://i.pinimg.com/564x/c4/1c/0e/c41c0ea39f9acebfe945fde9cc7ee433.jpg",
        hotelName: "Burger King",
        description: "Impossible Whopper, Fries, and Drink",
        rating: "4.6",
        time: "22Min",
        amt: "380",
        offer: "10% Off | Use IMPOSSIBLE10",
      },
      
      {
        id: 4,
        src: "https://i.pinimg.com/564x/ef/77/fd/ef77fdac131e76f09468303b68bf984b.jpg",
        hotelName: "Burger King",
        description: "Double Whopper Sandwich, Fries, and Drink",
        rating: "4.9",
        time: "30Min",
        amt: "600",
        offer: "20% Off | Use DOUBLE20",
      },
      
      {
        id: 5,
        src: "https://c8.alamy.com/comp/2J0C011/chickenburger-chicken-chicken-burger-menu-fries-drink-free-plate-exempted-2J0C011.jpg",
        hotelName: "Burger King",
        description: "Chicken Sandwich, Fries, and Drink",
        rating: "4.5",
        time: "18Min",
        amt: "320",
        offer: "15% Off | Use CHICKEN15",
      },
      
      {
        id: 6,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrfOV4QbA2DtQrVOt009K0D1SU-6NCCN9w8g&s",
        hotelName: "Burger King",
        description: "Burger King Meal, Fries, and Drink",
        rating: "4.7",
        time: "20Min",
        amt: "340",
        offer: "25% Off | Use MEAL25",
      },
      
      {
        id: 7,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc5wLDhQkuyK6cRBDyUtN4Sed6s74zFpetbg&s",
        hotelName: "Burger King",
        description: "Breakfast Sandwich, Hash Browns, and Coffee",
        rating: "4.6",
        time: "15Min",
        amt: "300",
        offer: "20% Off | Use BREAKFAST20",
      },
      
      {
        id: 8,
        src: "https://t4.ftcdn.net/jpg/00/99/82/31/360_F_99823178_SEgzQ02E1GkV2I5nEXK2Dm8IjrfVssxA.jpg",
        hotelName: "Burger King",
        description: "French Fries, Soft Drink, and Burger",
        rating: "4.5",
        time: "12Min",
        amt: "250",
        offer: "10% Off | Use FRIES10",
      },
      
      {
        id: 9,
        src: "https://c8.alamy.com/comp/2BRT9M2/club-sandwich-potato-fries-chips-and-glass-of-cola-drink-with-ice-fast-food-take-away-2BRT9M2.jpg",
        hotelName: "Burger King",
        description: "Club Sandwich, Fries, and Drink",
        rating: "4.7",
        time: "22Min",
        amt: "370",
        offer: "15% Off | Use CLUB15",
      },
      
      {
        id: 10,
        src: "https://img.freepik.com/premium-photo/portion-chicken-nuggets-with-portion-french-fries-drink-blurred-restaurant-background_846485-37871.jpg",
        hotelName: "Burger King",
        description: "Chicken Nuggets, Fries, and Drink",
        rating: "4.8",
        time: "18Min",
        amt: "280",
        offer: "10% Off | Use NUGGETS10",
      },
      
      {
        id: 11,
        src: "https://c8.alamy.com/comp/PT7MPY/fresh-beef-burger-with-sauce-and-vegetables-and-glass-of-cola-soft-drink-with-potato-chips-fries-on-stone-kitchen-background-PT7MPY.jpg",
        hotelName: "Burger King",
        description: "Beef Burger, Fries, and Drink",
        rating: "4.6",
        time: "20Min",
        amt: "350",
        offer: "20% Off | Use BEEF20",
      },
      
      {
        id: 12,
        src: "https://c8.alamy.com/comp/2J0YDDY/high-angle-view-of-hot-dog-with-french-fries-sauces-and-drink-on-table-2J0YDDY.jpg",
        hotelName: "Burger King",
        description: "Sausage Sandwich, Fries, and Drink",
        rating: "4.7",
        time: "22Min",
        amt: "360",
        offer: "25% Off | Use SAUSAGE25",
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
