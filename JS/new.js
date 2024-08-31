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
    src: "https://thumbs.dreamstime.com/z/moscow-russia-march-mcdonald-s-big-mac-hamburger-menu-french-fries-coca-cola-moscow-russia-march-mcdonald-s-big-mac-hamburger-112197884.jpg",
    hotelName: "McDonald's",
    description: "Big Mac, Fries, Drink",
    rating: "4.5",
    time: "15Min",
    amt: "300",
    offer: "20% Off | Use MAC20",
  },

  {
    id: 2,
    src: "https://th.bing.com/th/id/OIP.T-Ay448jC55UlUsWm7pAUAHaGI?rs=1&pid=ImgDetMain",
    hotelName: "McDonald's",
    description: "McChicken, Fries, Drink",
    rating: "4.3",
    time: "18Min",
    amt: "250",
    offer: "25% Off | Use CHICK25",
  },

  {
    id: 3,
    src: "https://th.bing.com/th/id/OIP.8RlDaZIktO4qaGSTba37lwHaFJ?rs=1&pid=ImgDetMain",
    hotelName: "McDonald's",
    description: "Quarter Pounder, Fries, Drink",
    rating: "4.4",
    time: "20Min",
    amt: "320",
    offer: "15% Off | Use QTR15",
  },

  {
    id: 4,
    src: "https://i.pinimg.com/564x/f7/78/3c/f7783c85ffee332c3944ba4defb6607c.jpg",
    hotelName: "McDonald's",
    description: "Filet-O-Fish, Fries, Drink",
    rating: "4.2",
    time: "17Min",
    amt: "280",
    offer: "10% Off | Use FISH10",
  },

  {
    id: 5,
    src: "https://th.bing.com/th/id/OIP.a6yAJfyZuWPIFIxTLihgsgAAAA?rs=1&pid=ImgDetMain",
    hotelName: "McDonald's",
    description: "McVeggie, Fries, Drink",
    rating: "4.1",
    time: "15Min",
    amt: "240",
    offer: "30% Off | Use VEG30",
  },

  {
    id: 6,
    src: "https://i.pinimg.com/736x/af/db/a0/afdba0506263d9c33ef1defc93bff4cd.jpg",
    hotelName: "McDonald's",
    description: "McSpicy Paneer, Fries, Drink",
    rating: "4.3",
    time: "18Min",
    amt: "260",
    offer: "25% Off | Use SPICY25",
  },

  {
    id: 7,
    src: "https://th.bing.com/th/id/OIP.yFMeemeD3kZ3e5UjsTnJuQHaD_?rs=1&pid=ImgDetMain",
    hotelName: "McDonald's",
    description: "Egg McMuffin, Hash Browns, Coffee",
    rating: "4.4",
    time: "12Min",
    amt: "220",
    offer: "20% Off | Use MUFFIN20",
  },

  {
    id: 8,
    src: "https://th.bing.com/th/id/OIP.L4R8Ewd2sk7RbZsSsa6ErwAAAA?rs=1&pid=ImgDetMain",
    hotelName: "McDonald's",
    description: "Chicken McNuggets, Fries, Drink",
    rating: "4.6",
    time: "16Min",
    amt: "270",
    offer: "15% Off | Use NUGGET15",
  },

  {
    id: 9,
    src: "https://facts.net/wp-content/uploads/2023/06/Mcflurry-flavors.jpeg",
    hotelName: "McDonald's",
    description: "McFlurry, Fries, Drink",
    rating: "4.5",
    time: "10Min",
    amt: "180",
    offer: "10% Off | Use FLURRY10",
  },

  {
    id: 10,
    src: "https://th.bing.com/th/id/OIP.iAr0en1ecgRy-yv0GQF53wHaEs?rs=1&pid=ImgDetMain",
    hotelName: "McDonald's",
    description: "Happy Meal, Fries, Drink",
    rating: "4.7",
    time: "15Min",
    amt: "200",
    offer: "15% Off | Use HAPPY15",
  },

  {
    id: 11,
    src: "https://i.pinimg.com/564x/fd/0a/8f/fd0a8f6f5e405be6cf0b00265d9b9b43.jpg",
    hotelName: "McDonald's",
    description: "Cheeseburger, Fries, Drink",
    rating: "4.3",
    time: "14Min",
    amt: "230",
    offer: "20% Off | Use CHEESE20",
  },

  {
    id: 12,
    src: "https://th.bing.com/th/id/OIP.s8ck1xud-8mWnF-w6WxhjAHaEZ?rs=1&pid=ImgDetMain",
    hotelName: "McDonald's",
    description: "Double Cheeseburger, Fries, Drink",
    rating: "4.6",
    time: "18Min",
    amt: "330",
    offer: "25% Off | Use DOUBLE25",
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
  let input = document.getElementById("search-box");
  let searchValue = input.value.toUpperCase();
  let product = document.getElementById("list-container");
  //product.innerHTML="";
  let card = product.querySelectorAll(".vid-list");
  let vidDiv=document.getElementsByClassName('cardDiv');

  for (i = 0; i < card.length; i++) {
    txtValue = card[i].textContent || card[i].innerText;
    console.log(txtValue);
    if (txtValue.toUpperCase().indexOf(searchValue) > -1) {
      vidDiv[i].style.display = "block";
    } else {
      vidDiv[i].style.display = "none";
    }
  }
}   
