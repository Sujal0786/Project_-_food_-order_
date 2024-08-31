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
        src: "https://i.pinimg.com/564x/1d/d0/28/1dd028aff6ba1dfe903a74cd10027c04.jpg",
        hotelName: "BIG-BOWL",
        description: "Spicy Noodles, Vegetables, and Meat",
        rating: "4.8",
        time: "20Min",
        amt: "350",
        offer: "15% Off | Use NOODLES15",
      },
      
      {
        id: 2,
        src: "https://i.pinimg.com/564x/a2/b1/69/a2b1694904f33e8047ad7cf905c677d6.jpg",
        hotelName: "BIG-BOWL",
        description: "Crispy Fried Chicken, Coleslaw, and Fries",
        rating: "4.7",
        time: "25Min",
        amt: "400",
        offer: "20% Off | Use CHICKEN20",
      },
      
      {
        id: 3,
        src: "https://i.pinimg.com/564x/53/d7/d9/53d7d9a180e533b53be5bf9ea6f68631.jpg",
        hotelName: "BIG-BOWL",
        description: "Grilled Fish, Rice, and Steamed Vegetables",
        rating: "4.6",
        time: "22Min",
        amt: "380",
        offer: "10% Off | Use FISH10",
      },
      
      {
        id: 4,
        src: "https://i.pinimg.com/736x/bc/bc/fc/bcbcfcdfe33e514f2140dc69342c9c61.jpg",
        hotelName: "BIG-BOWL",
        description: "Beef and Mushroom Stroganoff, Egg Noodles",
        rating: "4.9",
        time: "30Min",
        amt: "600",
        offer: "20% Off | Use STROGANOFF20",
      },
      
      {
        id: 5,
        src: "https://i.pinimg.com/564x/10/41/f1/1041f159f07d6e610fdf64bb08df9ee3.jpg",
        hotelName: "BIG-BOWL",
        description: "Veggie Burger, Fries, and Coleslaw",
        rating: "4.5",
        time: "18Min",
        amt: "320",
        offer: "15% Off | Use VEGGIE15",
      },
      
      {
        id: 6,
        src: "https://i.pinimg.com/736x/e4/04/2c/e4042c433115f9b6821b707151f4673a.jpg",
        hotelName: "BIG-BOWL",
        description: "Chicken Quesadilla, Sour Cream, and Salsa",
        rating: "4.7",
        time: "20Min",
        amt: "340",
        offer: "25% Off | Use QUESADILLA25",
      },
      
      {
        id: 7,
        src: "https://i.pinimg.com/564x/79/19/7b/79197bf65655eaa588105607fd8c3cb5.jpg",
        hotelName: "BIG-BOWL",
        description: "Egg and Cheese Omelette, Toast, and Hash Browns",
        rating: "4.6",
        time: "15Min",
        amt: "300",
        offer: "20% Off | Use OMELETTE20",
      },
      
      {
        id: 8,
        src: "https://i.pinimg.com/564x/9b/2a/19/9b2a192201060e7362418b7117c31eef.jpg",
        hotelName: "BIG-BOWL",
        description: "Tom Yum Soup, Spring Rolls, and Fried Wontons",
        rating: "4.5",
        time: "12Min",
        amt: "250",
        offer: "10% Off | Use SOUP10",
      },
      
      {
        id: 9,
        src: "https://i.pinimg.com/564x/58/4f/43/584f430dd54f19fd2a36e1391fcf7507.jpg",
        hotelName: "BIG-BOWL",
        description: "Grilled Chicken Caesar Salad, Croutons, and Parmesan",
        rating: "4.7",
        time: "22Min",
        amt: "370",
        offer: "15% Off | Use CAESAR15",
      },
      
      {
        id: 10,
        src: "https://i.pinimg.com/736x/4d/10/a2/4d10a2e18b838baca23a1686aab4b710.jpg",
        hotelName: "BIG-BOWL",
        description: "Fried Chicken Tenders, Dipping Sauce, and Coleslaw",
        rating: "4.8",
        time: "18Min",
        amt: "280",
        offer: "10% Off | Use TENDERS10",
      },
      
      {
        id: 11,
        src: "https://i.pinimg.com/736x/33/cb/5a/33cb5a100c67e44b784cd242de34266f.jpg",
        hotelName: "BIG-BOWL",
        description: "Beef and Broccoli Stir-Fry, Steamed Rice",
        rating: "4.6",
        time: "20Min",
        amt: "350",
        offer: "20% Off | Use STIRFRY20",
      },
      
      {
        id: 12,
        src: "https://i.pinimg.com/564x/99/d1/89/99d18953c16e09bc88119e31aa4ee316.jpg",
        hotelName: "BIG-BOWL",
        description: "Sesame Chicken, Steamed Vegetables, and Fried Rice",
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
