// Ensure that the content is updated after the page is loaded
window.onload = function() {
  document.getElementById('name').innerText = localStorage.getItem('name') || 'Guest';
  document.getElementById('email').innerText = localStorage.getItem('email') || 'No email available';
  // Add event listeners to the filter buttons
  const filterLinks = document.querySelectorAll('.filterRight a');
  filterLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault(); // Prevent default anchor behavior
          randomizeProducts();
      });
  });
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
      src: "https://i.pinimg.com/564x/9b/5c/68/9b5c68b1c0dd623ebf8da5fba24beb9a.jpg",
      hotelName: "Chinese WOK",
      description: "Dim Sum, Spring Rolls, Tea",
      rating: "4.8",
      time: "20Min",
      amt: "350",
      offer: "15% Off | Use DIMSUM15",
    },
  
    {
      id: 2,
      src: "https://i.pinimg.com/564x/a9/6d/8d/a96d8d3767d8cfa37cf8c09f8beaa45c.jpg",
      hotelName: "Chinese WOK",
      description: "Sweet and Sour Pork, Rice, Soup",
      rating: "4.7",
      time: "25Min",
      amt: "400",
      offer: "20% Off | Use SWEET20",
    },
  
    {
      id: 3,
      src: "https://i.pinimg.com/736x/9b/6d/7e/9b6d7e21bd76ad4ebf11c852ae052f1a.jpg",
      hotelName: "Chinese WOK",
      description: "Kung Pao Chicken, Rice, Drink",
      rating: "4.6",
      time: "22Min",
      amt: "380",
      offer: "10% Off | Use KUNGP10",
    },
  
    {
      id: 4,
      src: "https://i.pinimg.com/564x/19/0d/0a/190d0a00a444ec6b156a6abef74ab142.jpg",
      hotelName: "Chinese WOK",
      description: "Peking Duck, Pancakes, Sauce",
      rating: "4.9",
      time: "30Min",
      amt: "600",
      offer: "20% Off | Use PEKING20",
    },
  
    {
      id: 5,
      src: "https://i.pinimg.com/564x/0c/ea/3e/0cea3e13a286aa7d2bc799bcf9d0dcc2.jpg",
      hotelName: "Chinese WOK",
      description: "Mapo Tofu, Rice, Soup",
      rating: "4.5",
      time: "18Min",
      amt: "320",
      offer: "15% Off | Use TOFU15",
    },
  
    {
      id: 6,
      src: "https://i.pinimg.com/564x/c2/71/76/c27176f8784e5669570d8c5bc69898fd.jpg",
      hotelName: "Chinese WOK",
      description: "Chow Mein, Spring Rolls, Drink",
      rating: "4.7",
      time: "20Min",
      amt: "340",
      offer: "25% Off | Use MEIN25",
    },
  
    {
      id: 7,
      src: "https://i.pinimg.com/736x/e1/2a/6b/e12a6bb5bfb54a030a2f3de32a306d2c.jpg",
      hotelName: "Chinese WOK",
      description: "Egg Fried Rice, Dumplings, Tea",
      rating: "4.6",
      time: "15Min",
      amt: "300",
      offer: "20% Off | Use EGGFRIED20",
    },
  
    {
      id: 8,
      src: "https://i.pinimg.com/564x/2f/a3/24/2fa3249d8c7770d6af08fabe4166efa4.jpg",
      hotelName: "Chinese WOK",
      description: "Hot and Sour Soup, Spring Rolls",
      rating: "4.5",
      time: "12Min",
      amt: "250",
      offer: "10% Off | Use SOUP10",
    },
  
    {
      id: 9,
      src: "https://i.pinimg.com/564x/7e/c3/70/7ec3706fa401e923b7a153d435abb01b.jpg",
      hotelName: "Chinese WOK",
      description: "Orange Chicken, Rice, Soup",
      rating: "4.7",
      time: "22Min",
      amt: "370",
      offer: "15% Off | Use ORANGE15",
    },
  
    {
      id: 10,
      src: "https://i.pinimg.com/736x/6d/a7/9c/6da79cc87fb44473811d6d5954b93fbb.jpg",
      hotelName: "Chinese WOK",
      description: "Fried Dumplings, Rice, Drink",
      rating: "4.8",
      time: "18Min",
      amt: "280",
      offer: "10% Off | Use DUMPLING10",
    },
  
    {
      id: 11,
      src: "https://i.pinimg.com/564x/9d/a4/5b/9da45bcb44dcfe2a9f6bc984ab9db24d.jpg",
      hotelName: "Chinese WOK",
      description: "Beef with Broccoli, Rice, Soup",
      rating: "4.6",
      time: "20Min",
      amt: "350",
      offer: "20% Off | Use BEEF20",
    },
  
    {
      id: 12,
      src: "https://i.pinimg.com/564x/3b/8d/af/3b8daf15e6654b556a2b77ea6e2726b7.jpg",
      hotelName: "Chinese WOK",
      description: "Sesame Chicken, Rice, Drink",
      rating: "4.7",
      time: "22Min",
      amt: "360",
      offer: "25% Off | Use SESAME25",
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
             <a href="" class="title">${product.description}</a>
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

 

function randomizeProducts() {
  // Shuffle the productList array
  const shuffledProducts = productList.sort(() => Math.random() - 0.5);
  
  // Clear existing products from the list
  list.innerHTML = '';
  
  // Render the shuffled products
  shuffledProducts.forEach((product) => {
      const vidDiv = document.createElement("div");
      vidDiv.className = 'cardDiv';

      vidDiv.innerHTML = `<div class="vid-list" data-name="p-1">
           <img src="${product.src}" class="img-class" alt="Product Image">
           
       <div class="flex-div">
         <div class="vid-info">
           <a href="${product.href}" class="title">${product.description}</a>
           <p>${product.description}</p>
           <p>Desserts, Beverages and more...</p>
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