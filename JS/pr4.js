
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
        src: "https://i.pinimg.com/736x/14/49/57/1449576d24b22cdadd16e2ce97d306bf.jpg", 
        hotelName: "The Belgian-Waffle", 
        description: "Fresh Fruit Waffle, Whipped Cream, Syrup", 
        rating: "4.8", 
        time: "20Min", 
        amt: "350", 
        offer: "15% Off | Use WAFFLE15", 
    
    },
    {
        id: 2,
        src: "https://i.pinimg.com/564x/df/f2/51/dff2516ddf36ad731d8ad6accbb9079e.jpg",
        hotelName: "The Belgian-Waffle",
        description: "Cinnamon Apple Waffle, Caramel Sauce, Fresh Fruit",
        rating: "4.7",
        time: "25Min",
        amt: "400",
        offer: "20% Off | Use CINNAMON20",
      },
      
      {
        id: 3,
        src: "https://i.pinimg.com/736x/79/a1/48/79a1483bccad5095d319517a71368ebf.jpg",
        hotelName: "The Belgian-Waffle",
        description: "Chocolate Chip Waffle, Whipped Cream, Chocolate Sauce",
        rating: "4.6",
        time: "22Min",
        amt: "380",
        offer: "10% Off | Use CHOCOLATE10",
      },
      
      {
        id: 4,
        src: "https://i.pinimg.com/564x/92/30/50/923050ada8669029641cea3a62012552.jpg",
        hotelName: "The Belgian-Waffle",
        description: "Belgian Waffle, Fresh Berries, Whipped Cream",
        rating: "4.9",
        time: "30Min",
        amt: "600",
        offer: "20% Off | Use BELGIAN20",
      },
      
      {
        id: 5,
        src: "https://i.pinimg.com/564x/be/d0/4d/bed04d1570b1ea61dd818ac69382c405.jpg",
        hotelName: "The Belgian-Waffle",
        description: "Banana Foster Waffle, Caramel Sauce, Whipped Cream",
        rating: "4.5",
        time: "18Min",
        amt: "320",
        offer: "15% Off | Use BANANA15",
      },
      
      {
        id: 6,
        src: "https://i.pinimg.com/564x/65/e9/52/65e952a41ce3bb30b24d839f20446062.jpg",
        hotelName: "The Belgian-Waffle",
        description: "Strawberry Waffle, Whipped Cream, Fresh Fruit",
        rating: "4.7",
        time: "20Min",
        amt: "340",
        offer: "25% Off | Use STRAWBERRY25",
      },
      
      {
        id: 7,
        src: "https://i.pinimg.com/564x/70/c2/42/70c24238053e05e4c2b4d94962d55826.jpg",
        hotelName: "The Belgian-Waffle",
        description: "Cinnamon Roll Waffle, Caramel Sauce, Whipped Cream",
        rating: "4.6",
        time: "15Min",
        amt: "300",
        offer: "20% Off | Use CINNAMONROLL20",
      },
      
      {
        id: 8,
        src: "https://i.pinimg.com/564x/b9/f4/9c/b9f49c82fdb0a1e49c19ced00c903c4b.jpg",
        hotelName: "The Belgian-Waffle",
        description: "Peanut Butter Waffle, Banana, Honey",
        rating: "4.5",
        time: "12Min",
        amt: "250",
        offer: "10% Off | Use PEANUTBUTTER10",
      },
      {
        id: 9,
        src: "https://i.pinimg.com/736x/c8/74/cf/c874cf4a09fe634e8cffa3e1cee305d5.jpg",
        hotelName: "The Belgian-Waffle",
        description: "Blueberry Waffle, Whipped Cream, Fresh Fruit",
        rating: "4.7",
        time: "22Min",
        amt: "370",
        offer: "15% Off | Use BLUEBERRY15",
      },
      
      {
        id: 10,
        src: "https://i.pinimg.com/564x/22/f6/10/22f6101dffa7bae05eb101a023b5a882.jpg",
        hotelName: "The Belgian-Waffle",
        description: "Chocolate Banana Waffle, Whipped Cream, Chocolate Sauce",
        rating: "4.8",
        time: "18Min",
        amt: "280",
        offer: "10% Off | Use CHOCOBANANA10",
      },
      
      {
        id: 11,
        src: "https://i.pinimg.com/564x/a5/8f/93/a58f93818564b86913b002342660516f.jpg",
        hotelName: "The Belgian-Waffle",
        description: "Caramel Pecan Waffle, Whipped Cream, Caramel Sauce",
        rating: "4.6",
        time: "20Min",
        amt: "350",
        offer: "20% Off | Use CARAMEL20",
      },
      
      {
        id: 12,
        src: "https://i.pinimg.com/564x/c0/09/44/c00944416884557a8d6fccc1051c7d27.jpg",
        hotelName: "The Belgian-Waffle",
        description: "Red Velvet Waffle, Whipped Cream, Fresh Fruit",
        rating: "4.7",
        time: "22Min",
        amt: "360",
        offer: "25% Off | Use REDVELVET25",
      }
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