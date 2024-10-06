
 // Ensure that the content is updated after the page is loaded
 window.onload = function() {
  document.getElementById('name').innerText = localStorage.getItem('name') || 'Guest';
  document.getElementById('email').innerText = localStorage.getItem('email') || 'No email available';

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
        src: "https://i.pinimg.com/564x/37/94/a8/3794a80d25c569c81ec1b06405841b36.jpg",
        hotelName: "Barbecue",
        description: "Grilled Chicken, BBQ Sauce, Coleslaw",
        rating: "4.8",
        time: "20Min",
        amt: "350",
        offer: "15% Off | Use BBQ15",
      },
      
      {
        id: 2,
        src: "https://i.pinimg.com/736x/bd/7b/bc/bd7bbc03f3f68c36be263b76825dbdb7.jpg",
        hotelName: "Barbecue",
        description: "Pulled Pork, Baked Beans, Cornbread",
        rating: "4.7",
        time: "25Min",
        amt: "400",
        offer: "20% Off | Use PORK20",
      },
      
      {
        id: 3,
        src: "https://i.pinimg.com/564x/45/ca/bc/45cabc24d5cb0d1aaf13e974ba8dec3a.jpg",
        hotelName: "Barbecue",
        description: "Ribs, Coleslaw, Baked Beans",
        rating: "4.6",
        time: "22Min",
        amt: "380",
        offer: "10% Off | Use RIBS10",
      },
      
      {
        id: 4,
        src: "https://i.pinimg.com/564x/d8/39/bf/d839bf03a7c6d1dd72cc85cf6aac843d.jpg",
        hotelName: "Barbecue",
        description: "Brisket, BBQ Sauce, Grilled Vegetables",
        rating: "4.9",
        time: "30Min",
        amt: "600",
        offer: "20% Off | Use BRISKET20",
      },
      
      {
        id: 5,
        src: "https://i.pinimg.com/564x/d5/e2/2f/d5e22f383e70fbc3397272642f2b2637.jpg",
        hotelName: "Barbecue",
        description: "Grilled Sausages, Peppers, Onions",
        rating: "4.5",
        time: "18Min",
        amt: "320",
        offer: "15% Off | Use SAUSAGE15",
      },
      
      {
        id: 6,
        src: "https://i.pinimg.com/564x/ee/3f/42/ee3f4205fdef08f84eb756e4464ec257.jpg",
        hotelName: "Barbecue",
        description: "Burnt Ends, BBQ Sauce, Coleslaw",
        rating: "4.7",
        time: "20Min",
        amt: "340",
        offer: "25% Off | Use BURNT25",
      },
      
      {
        id: 7,
        src: "https://i.pinimg.com/564x/77/73/4a/77734a785ba693c5a838f1835921f5e1.jpg",
        hotelName: "Barbecue",
        description: "Grilled Chicken, BBQ Sauce, Baked Beans",
        rating: "4.6",
        time: "15Min",
        amt: "300",
        offer: "20% Off | Use CHICKEN20",
      },
      
      {
        id: 8,
        src: "https://i.pinimg.com/564x/e3/6e/18/e36e181542e12ed7b09204d8b49c540f.jpg",
        hotelName: "Barbecue",
        description: "Pulled Pork Sandwich, Coleslaw, Pickles",
        rating: "4.5",
        time: "12Min",
        amt: "250",
        offer: "10% Off | Use PORK10",
      },
      
      {
        id: 9,
        src: "https://i.pinimg.com/564x/32/92/26/329226aefba8555f292a0479717429ae.jpg",
        hotelName: "Barbecue",
        description: "Ribs, BBQ Sauce, Grilled Vegetables",
        rating: "4.7",
        time: "22Min",
        amt: "370",
        offer: "15% Off | Use RIBS15",
      },
      
      {
        id: 10,
        src: "https://i.pinimg.com/736x/8d/44/39/8d4439ba92c17a863dd0f6fe6d69b6e3.jpg",
        hotelName: "Barbecue",
        description: "Grilled Steak, Roasted Vegetables, Mashed Potatoes",
        rating: "4.8",
        time: "18Min",
        amt: "280",
        offer: "10% Off | Use STEAK10",
      },
      
      {
        id: 11,
        src: "https://i.pinimg.com/564x/c8/d2/a4/c8d2a4ec2846594edc4085bef1cbfa34.jpg",
        hotelName: "Barbecue",
        description: "Smoked Brisket, BBQ Sauce, Coleslaw",
        rating: "4.6",
        time: "20Min",
        amt: "350",
        offer: "20% Off | Use BRISKET20",
      },
      
      {
        id: 12,
        src: "https://i.pinimg.com/736x/1c/7e/1d/1c7e1dd7b147ab0c28bfa34fd8e7edfa.jpg",
        hotelName: "Barbecue",
        description: "Grilled Chicken Wings, BBQ Sauce, Celery Sticks",
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