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

 // Ensure to call the initial render function to display products on page load

// ... (rest of your existing code)


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

// window.onscroll = () => {
//   // searchForm.classList.remove("active");
//   shoppingCart.classList.remove("active");
//   loginForm.classList.remove("active");
//   navbar.classList.remove("active");
// };

const list = document.getElementById("list-container");
const productList = [
  {
      name: "Chinese WOK",
      src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597",
      description: "Hakka Noodles, Veg Manchurian etc.",
      rating: "3.9",
      time: "40 Mins",
      amt: "300",
      offer: "50% off | Use WELCOLME50",
      href:"product2.html"
  },
  {
      name: "Lapinoz - Pizza",
      src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/qt2ojkafzprlgpdl4a4y",
      description: "Margherita, Veg Extravaganza, etc.",
      rating: "3.9",
      time: "40 Mins",
      amt: "300",
      offer: "50% off | Use WELCOLME50",
       href:"product3.html"
  },
  {
      name: "The Belgian-Waffle",
      src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/5116a385bac0548e06c33c08350fbf11",
      description: "Classic Waffle, Chocolate Chip Waffle, etc.",
      rating: "3.9",
      time: "40 Mins",
      amt: "300",
      offer: "50% off | Use WELCOLME50",
       href:"product4.html"
  },
  {
      name: "Barbeque",
      src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e2ej0ob56z47oylq9mkb",
      description: "Grilled Chicken, BBQ Paneer, etc.",
      rating: "3.9",
      time: "40 Mins",
      amt: "300",
      offer: "50% off | Use WELCOLME50"
      ,
       href:"product5.html"
  },
  {
      name: "BIG - BOWL",
      src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/deff0d02-ca1d-4ef9-9d62-b0cbeabf33d3_296658.JPG",
      description: "Greek Salad, Caesar Salad, etc.",
      rating: "3.9",
      time: "40 Mins",
      amt: "300",
      offer: "50% off | Use WELCOLME50",
       href:"product6.html"
  },
  {
      name: "KFC",
      src: "https://static.vecteezy.com/system/resources/previews/024/693/620/original/kfc-logo-transparent-free-png.png",
      description: "Shrimp Cocktail, Fish Tacos, etc.",
      rating: "3.9",
      time: "40 Mins",
      amt: "300",
      offer: "50% off | Use WELCOLME50",
       href:"product7.html"
  },
  {
      name: "BURGER KING",
      src: "https://logos-world.net/wp-content/uploads/2020/04/Burger-King-Logo-1969-1994.png",
      description: "Vegan Burger, Avocado Toast, etc.",
      rating: "3.9",
      time: "40 Mins",
      amt: "300",
      offer: "50% off | Use WELCOLME50",
       href:"product8.html"
  },
  {
      name: "MC DONALD",
      src: "https://logolook.net/wp-content/uploads/2021/06/McDonalds-Logo.png",
      description: "Tacos, Burritos, Nachos, etc.",
      rating: "3.9",
      time: "40 Mins",
      amt: "300",
      offer: "50% off | Use WELCOLME50",
       href:"product.html"
  }
];

console.log(typeof id);
function renderProdcuts() {
  productList.forEach((product) => {
    const vidDiv = document.createElement("div");
    vidDiv.className = 'cardDiv';

    vidDiv.innerHTML = `<div class="vid-list" data-name="p-1">
             <img src="${product.src}" class="img-class" alt="Product Image">
             
         <div class="flex-div">
           <div class="vid-info">
             <a href="${product.href}" class="title">${product.name}</a>
             <p>${product.description}</p>
             <p>Desserts, Beverages and more...</p>
             <div class="btns flex-div">
                 <div class="rating"> <span class="fas fa-star">${product.rating}</span> </div> 
                 <div class="time">${product.time}</div> 
                 <div class="amt">RS.${product.amt}</div>
             </div>
             <div class="offers">
             <p>${product.offer}</p>
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


function searchProducts() {
  let input = document.getElementById("search-box").value.toUpperCase(); // Get search input
  let productList = document.getElementById("list-container");
  let cards = productList.getElementsByClassName("cardDiv"); // Select the product cards

  // Loop through all the product cards
  for (let i = 0; i < cards.length; i++) {
    let descriptionElement = cards[i].querySelector("a"); // The element that holds the description (first <p> tag in the card)
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
           <a href="${product.href}" class="title">${product.name}</a>
           <p>${product.description}</p>
           <p>Desserts, Beverages and more...</p>
           <div class="btns flex-div">
               <div class="rating"> <span class="fas fa-star">${product.rating}</span> </div> 
               <div class="time">${product.time}</div> 
               <div class="amt">RS.${product.amt}</div>
           </div>
           <div class="offers">
           <p>${product.offer}</p>
       </div>
         </div>
       </div>
     </div>`;

      list.appendChild(vidDiv);
  });
}

renderProdcuts();