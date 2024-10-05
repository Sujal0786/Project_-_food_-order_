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

document.querySelector('#login-btn').onclick = () => {
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
        src: "https://i.pinimg.com/564x/d0/86/8e/d0868e756f4d113a60c1ed5487590d0b.jpg",
        hotelName: "Lapinoz - Pizza",
        description: "Margherita, Fresh Basil, Mozzarella",
        rating: "4.8",
        time: "20Min",
        amt: "350",
        offer: "15% Off | Use PIZZA15",
    },

    {
        id: 2,
        src: "https://i.pinimg.com/564x/84/5e/9e/845e9ecfd60acc42ad0a7019c0f001f2.jpg",
        hotelName: "Lapinoz - Pizza",
        description: "Meat Lover's, Pepperoni, Sausage, Bacon",
        rating: "4.7",
        time: "25Min",
        amt: "400",
        offer: "20% Off | Use MEATLOVER20",
    },

    {
        id: 3,
        src: "https://i.pinimg.com/736x/b0/96/23/b09623357dd96f64242e391b00fae7fe.jpg",
        hotelName: "Lapinoz - Pizza",
        description: "Veggie Delight, Mushrooms, Onions, Bell Peppers",
        rating: "4.6",
        time: "22Min",
        amt: "380",
        offer: "10% Off | Use VEGGIE10",
    },

    {
        id: 4,
        src: "https://i.pinimg.com/564x/cf/99/33/cf99337925528f1132212ce4ac440728.jpg",
        hotelName: "Lapinoz - Pizza",
        description: "BBQ Chicken, Red Onion, Cilantro",
        rating: "4.9",
        time: "30Min",
        amt: "600",
        offer: "20% Off | Use BBQ20",
    },

    {
        id: 5,
        src: "https://i.pinimg.com/564x/f5/90/d6/f590d6d8be8d29ce06495ba0f1b17c84.jpg",
        hotelName: "Lapinoz - Pizza",
        description: "Four Cheese, Mozzarella, Parmesan, Gouda, Ricotta",
        rating: "4.5",
        time: "18Min",
        amt: "320",
        offer: "15% Off | Use CHEESE15",
    },

    {
        id: 6,
        src: "https://i.pinimg.com/736x/d7/37/76/d73776813e32ab1a957ed68b4dbfd0c1.jpg",
        hotelName: "Lapinoz - Pizza",
        description: "Hawaiian, Ham, Pineapple",
        rating: "4.7",
        time: "20Min",
        amt: "340",
        offer: "25% Off | Use HAWAIIAN25",
    },

    {
        id: 7,
        src: "https://i.pinimg.com/564x/6c/b2/bd/6cb2bdfa638c6fad49bea59f33624c6f.jpg",
        hotelName: "Lapinoz - Pizza",
        description: "Greek, Feta, Olives, Sun-dried Tomatoes",
        rating: "4.6",
        time: "15Min",
        amt: "300",
        offer: "20% Off | Use GREEK20",
    },

    {
        id: 8,
        src: "https://i.pinimg.com/564x/ac/81/e8/ac81e85a30da82f86edc05d908ae3493.jpg",
        hotelName: "Lapinoz - Pizza",
        description: "Pepperoni, Sausage, Mushrooms",
        rating: "4.5",
        time: "12Min",
        amt: "250",
        offer: "10% Off | Use PEPPERONI10",
    },
    {
        id: 9,
        src: "https://i.pinimg.com/564x/77/c8/98/77c8987dc432f3215899f51e89a1ffbb.jpg",
        hotelName: "Lapinoz - Pizza",
        description: "Shrimp Scampi, Garlic, Parsley",
        rating: "4.7",
        time: "22Min",
        amt: "370",
        offer: "15% Off | Use SHRIMP15",
    },
    { 
        id: 10, 
        src: "https://i.pinimg.com/564x/3d/ad/52/3dad52ed586d9a59bd291f93597712f5.jpg", 
        hotelName: "Lapinoz - Pizza", 
        description: "Meatball, Marinara, Mozzarella", 
        rating: "4.8", 
        time: "18Min", 
        amt: "280", 
        offer: "10% Off | Use MEATBALL10",
     },

    { 
        id: 11, 
        src:"https://i.pinimg.com/564x/e6/79/14/e679148ee6e9e26f4488f6b75719ff9a.jpg", 
        hotelName: "Lapinoz - Pizza", 
        description: "Italian Sausage, Peppers, Onions",
         rating: "4.6", 
         time: "20Min", 
         amt: "350", 
         offer: "20% Off | Use SAUSAGE20", 
        },

    { 
        id: 12, 
        src: "https://i.pinimg.com/564x/eb/3e/ce/eb3ece14bd6522dba35064d9d1a3fc36.jpg", 
        hotelName: "Lapinoz - Pizza", 
        description: "Chicken Bacon Ranch, Bacon, Ranch Dressing", 
        rating: "4.7", 
        time: "22Min", 
        amt: "360",
        offer: "25% Off | Use RANCH25", 
    },






];

console.log(typeof id);
function renderProdcuts() {
    productList.forEach((product) => {
        //const{src,hotelName,description,rating,time,amt,offer}= productList[product]

        const vidDiv = document.createElement("div");
        vidDiv.className = 'cardDiv';
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
let btnAdd = document.querySelector('button');
btnAdd.addEventListener('click', () => {
    btnAdd.innerText = "Go To cart";
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
  
  
 