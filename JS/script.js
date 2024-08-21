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

// const list = document.getElementById("list-container");
// const productList = [
//   {
//     id: 1,
//     src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/qwokyvfzdond2snolvzw",
//     hotelName: "Bebe di Rasai",
//     description: "Biryani,Maharashtrian",
//     rating: "4.1",
//     time: "20Min",
//     amt: "350",
//     offer: "50% Off| use WELCOME50",
//   },

//   {
//     id: 2,
//     src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/dmglrqh8j4mxemsdejsb",
//     hotelName: "Oven Story",
//     description: "The Standout Pizza",
//     rating: "4.2",
//     time: "20Min",
//     amt: "350",
//     offer: "50% Off| use WELCOME50",
//   },

//   {
//     id: 3,
//     src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/piohreuutzllhqkzf79d",
//     hotelName: "McDonalds",
//     description: "Burger,Fries...",
//     rating: "4.1",
//     time: "20Min",
//     amt: "350",
//     offer: "50% Off| use WELCOME50",
//   },

//   {
//     id: 4,
//     src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ul9xzko9eliviajj2wft",
//     hotelName: "South House",
//     description: "South Indian Foods",
//     rating: "4.1",
//     time: "50Min",
//     amt: "350",
//     offer: "50% Off| use WELCOME50",
//   },

//   {
//     id: 5,
//     src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/cjpw2f0xk3yprkxl8oxo",
//     hotelName: "MadOver Donuts",
//     description: "Donuts",
//     rating: "4.1",
//     time: "20Min",
//     amt: "350",
//     offer: "50% Off| use WELCOME50",
//   },
//   {
//     id: 6,
//     src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/pzg64dwsbfozjxxrjf4c",
//     hotelName: "PK Biryani House",
//     description: "Biryani,Maharashtrian",
//     rating: "4.1",
//     time: "20Min",
//     amt: "350",
//     offer: "50% Off| use WELCOME50",
//   },
//   {
//     id: 7,
//     src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/cgf7qsoqsvfwletamxt4",
//     hotelName: "PavBhaji Center",
//     description: "PavBhaji",
//     rating: "4.1",
//     time: "20Min",
//     amt: "350",
//     offer: "50% Off| use WELCOME50",
//   },
//   {
//     id: 8,
//     src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/rndbbuntatuzxhyxdq8q",
//     hotelName: "Rolls Mania",
//     description: "Paneer Roll,Veg Roll",
//     rating: "4.1",
//     time: "20Min",
//     amt: "350",
//     offer: "50% Off| use WELCOME50",
//   },
//   {
//     id: 9,
//     src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/mmnvr7hpsr2gumtkukgk",
//     hotelName: "Burger King",
//     description: "Burgers",
//     rating: "4.1",
//     time: "20Min",
//     amt: "350",
//     offer: "50% Off| use WELCOME50",
//   },
//   {
//     id: 10,
//     src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/dc5gwz7oa5gwo3l2dw7y",
//     hotelName: "Veg World",
//     description: "Veg Thali",
//     rating: "4.1",
//     time: "20Min",
//     amt: "350",
//     offer: "50% Off| use WELCOME50",
//   },
//   {
//     id: 11,
//     src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ve8hjh2htgzhfyqsnhsh",
//     hotelName: "Cake House",
//     description: "Cakes",
//     rating: "4.1",
//     time: "20Min",
//     amt: "350",
//     offer: "50% Off| use WELCOME50",
//   },
//   {
//     id: 12,
//     src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/nz4ifkepwxbdsnrrm5gp",
//     hotelName: "Party House",
//     description: "Cakes and lot more",
//     rating: "4.1",
//     time: "20Min",
//     amt: "350",
//     offer: "50% Off| use WELCOME50",
//   },
//   {
//     id: 12,
//     src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/dmglrqh8j4mxemsdejsb",
//     hotelName: "Oven Story",
//     description: "The Standout Pizza",
//     rating: "4.2",
//     time: "20Min",
//     amt: "350",
//     offer: "50% Off| use WELCOME50",
//   },

// ];
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
//searchProducts();

//
//const search = ['Dominos Pizza']
/* function searchProducts()
{
let input = document.getElementById("search-box");
let searchValue = input.value.toUpperCase();
/* let card = product.querySelectorAll(".vid-list");
let vidDiv=document.getElementsByClassName('cardDiv');
 
const searchList = productList.filter((item) => {
  return searchValue.includes(item.hotelName);
});
console.log("search",searchList);
}
 
*/







/* 
     
     let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.list-container .vid-list').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
}); 






 */
