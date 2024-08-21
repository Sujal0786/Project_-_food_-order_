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
      src: "https://example.com/images/dim-sum.jpg",
      hotelName: "Golden Dragon",
      description: "Dim Sum, Spring Rolls, Tea",
      rating: "4.8",
      time: "20Min",
      amt: "350",
      offer: "15% Off | Use DIMSUM15",
    },
  
    {
      id: 2,
      src: "https://example.com/images/sweet-sour-pork.jpg",
      hotelName: "Golden Dragon",
      description: "Sweet and Sour Pork, Rice, Soup",
      rating: "4.7",
      time: "25Min",
      amt: "400",
      offer: "20% Off | Use SWEET20",
    },
  
    {
      id: 3,
      src: "https://example.com/images/kung-pao-chicken.jpg",
      hotelName: "Golden Dragon",
      description: "Kung Pao Chicken, Rice, Drink",
      rating: "4.6",
      time: "22Min",
      amt: "380",
      offer: "10% Off | Use KUNGP10",
    },
  
    {
      id: 4,
      src: "https://example.com/images/peking-duck.jpg",
      hotelName: "Golden Dragon",
      description: "Peking Duck, Pancakes, Sauce",
      rating: "4.9",
      time: "30Min",
      amt: "600",
      offer: "20% Off | Use PEKING20",
    },
  
    {
      id: 5,
      src: "https://example.com/images/mapo-tofu.jpg",
      hotelName: "Golden Dragon",
      description: "Mapo Tofu, Rice, Soup",
      rating: "4.5",
      time: "18Min",
      amt: "320",
      offer: "15% Off | Use TOFU15",
    },
  
    {
      id: 6,
      src: "https://example.com/images/chow-mein.jpg",
      hotelName: "Golden Dragon",
      description: "Chow Mein, Spring Rolls, Drink",
      rating: "4.7",
      time: "20Min",
      amt: "340",
      offer: "25% Off | Use MEIN25",
    },
  
    {
      id: 7,
      src: "https://example.com/images/egg-fried-rice.jpg",
      hotelName: "Golden Dragon",
      description: "Egg Fried Rice, Dumplings, Tea",
      rating: "4.6",
      time: "15Min",
      amt: "300",
      offer: "20% Off | Use EGGFRIED20",
    },
  
    {
      id: 8,
      src: "https://example.com/images/hot-and-sour-soup.jpg",
      hotelName: "Golden Dragon",
      description: "Hot and Sour Soup, Spring Rolls",
      rating: "4.5",
      time: "12Min",
      amt: "250",
      offer: "10% Off | Use SOUP10",
    },
  
    {
      id: 9,
      src: "https://example.com/images/orange-chicken.jpg",
      hotelName: "Golden Dragon",
      description: "Orange Chicken, Rice, Soup",
      rating: "4.7",
      time: "22Min",
      amt: "370",
      offer: "15% Off | Use ORANGE15",
    },
  
    {
      id: 10,
      src: "https://example.com/images/fried-dumplings.jpg",
      hotelName: "Golden Dragon",
      description: "Fried Dumplings, Rice, Drink",
      rating: "4.8",
      time: "18Min",
      amt: "280",
      offer: "10% Off | Use DUMPLING10",
    },
  
    {
      id: 11,
      src: "https://example.com/images/beef-broccoli.jpg",
      hotelName: "Golden Dragon",
      description: "Beef with Broccoli, Rice, Soup",
      rating: "4.6",
      time: "20Min",
      amt: "350",
      offer: "20% Off | Use BEEF20",
    },
  
    {
      id: 12,
      src: "https://example.com/images/sesame-chicken.jpg",
      hotelName: "Golden Dragon",
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
