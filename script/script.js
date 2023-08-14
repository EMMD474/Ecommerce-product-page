const cart = document.querySelector(".mainCart");
const hover = document.querySelector(".hover");

cart.addEventListener("click", () => {
    hover.classList.toggle("active");
});

//increasing and decreasing the number of products
const addMinus  = document.getElementsByClassName("addCart");
for(let i = 0; i < addMinus.length; i++) {
    let target = addMinus[i];
    let minus = target.getElementsByClassName("minus")[0];
    let add = target.getElementsByClassName("increase")[0];
    let number = target.getElementsByClassName("number")[0];
    let num = 1;
    
    add.addEventListener("click", () => {
        number.innerText = num++;
    });
    minus.addEventListener("click", () => {
        number.innerText = number.innerText - 1;
        if(number.innerText <= 0){
            number.innerText = 1;
        };
    });
};

//mobile nav side bar
const mobile = document.getElementsByClassName("mobile")[0];
const mobRem = document.getElementsByClassName("mob-rem")[0];
const mobNav = document.getElementsByClassName("mob-box")[0];
const shadow = document.getElementsByClassName("shadow")[0];

mobile.addEventListener("click", () => {
    mobNav.classList.add("active");
    shadow.classList.add("active");
});
mobRem.addEventListener("click", () => {
    mobNav.classList.remove("active");
    shadow.classList.remove("active");
});

//mobile sliding Gallery
const buttons = document.querySelectorAll("[data-button]");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.button === "next"? 1 : -1;
        const slide = document.getElementsByClassName("slideShow")[0];
        const activeSlide = document.getElementsByClassName("activate")[0];
        let index = [...slide.children].indexOf(activeSlide) + offset;

        if(index < 0){index = slide.children.length - 1};
        if(index >= slide.children.length){index = 0};
        slide.children[index].classList.add("activate");
        activeSlide.classList.remove("activate");
    });
});

//desktop sliding Gallery
const btns = document.querySelectorAll("[data-btn]");
btns.forEach(button => {
    button.addEventListener("click", () => {
        const offset2 = button.dataset.btn === "next"? 1 : -1;
        const slide2 = document.getElementsByClassName("desk")[0];
        const activeSlide2 = document.getElementsByClassName("activate2")[0];
        let index2 = [...slide2.children].indexOf(activeSlide2) + offset2;

        if(index2 < 0){index2 = slide2.children.length - 1};
        if(index2 >= slide2.children.length){index2 = 0};
        slide2.children[index2].classList.add("activate2");
        activeSlide2.classList.remove("activate2");

         //min-gallery
         const slides3 = document.getElementsByClassName("min-gallery")[0];
         const activateSlide3 = document.getElementsByClassName("activating")[0];
         let index3 = [...slides3.children].indexOf(activateSlide3) + offset2;
         if(index3 < 0){index2 = slides3.children.length - 1};
         if(index3 >= slides3.children.length){index2 = 0};
 
         slides3.children[index2].classList.add("activating");
         activateSlide3.classList.remove("activating");
    });
});

const img1 = document.getElementsByClassName("img1")[0];
const img2 = document.getElementsByClassName("img2")[0];
const img3 = document.getElementsByClassName("img3")[0];
const img4 = document.getElementsByClassName("img4")[0];
const list1 = document.getElementsByClassName("list1")[0];
const list2 = document.getElementsByClassName("list2")[0];
const list3 = document.getElementsByClassName("list3")[0];
const list4 = document.getElementsByClassName("list4")[0];
const activateSlide = document.getElementsByClassName("activate2")[0];
const select = (n) => {
    if (n == 1) {
        img1.classList.add("activate2");
        img2.classList.remove("activate2");
        img3.classList.remove("activate2");
        img4.classList.remove("activate2");
        list1.classList.add("activating");
        list2.classList.remove("activating");
        list3.classList.remove("activating");
        list4.classList.remove("activating");
        
    }
    if (n == 2) {
        img2.classList.add("activate2");
        img1.classList.remove("activate2");
        img3.classList.remove("activate2");
        img4.classList.remove("activate2");
        list2.classList.add("activating");
        list1.classList.remove("activating");
        list3.classList.remove("activating");
        list4.classList.remove("activating");
    };
    if (n == 3) {
        img3.classList.add("activate2");
        img1.classList.remove("activate2");
        img2.classList.remove("activate2");
        img4.classList.remove("activate2");
        list3.classList.add("activating");
        list1.classList.remove("activating");
        list2.classList.remove("activating");
        list4.classList.remove("activating");
    };
    if (n == 4) {
        img4.classList.add("activate2");
        img3.classList.remove("activate2");
        img1.classList.remove("activate2");
        img2.classList.remove("activate2");
        list4.classList.add("activating");
        list1.classList.remove("activating");
        list2.classList.remove("activating");
        list3.classList.remove("activating");
    };
};

//open close gallery slide
const model = document.getElementsByClassName("desktop")[0];
const exit = document.getElementsByClassName("exit")[0];
const SelectImg = document.getElementsByClassName("select-img")[0];

SelectImg.addEventListener("click", toggle);
exit.addEventListener("click", close);
//open
function toggle() {
    model.style.display = "flex";
};
//close
function close() {
    model.style.display = "none";
};

const addToCart = document.getElementsByClassName("btn-add-to")[0];
addToCart.addEventListener("click", addItemToCart)


function addItemToCart(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement.parentElement.parentElement.parentElement
    var img = shopItem.getElementsByClassName("display-img")[0].src
    var price1 = shopItem.getElementsByClassName("price-1")[0].innerText;
    var price2 = shopItem.getElementsByClassName("amount")[0].innerText;
    var priceElement = parseFloat(price1.replace("$", ""))
    var total = price2 * priceElement
    var price = "$" + total
    var name = shopItem.getElementsByClassName("edition")[0].innerText;
    add(img, price1, price2, price, name)
}

let main = document.getElementsByClassName("hover")[0];
let cartItems = document.getElementsByClassName("content")[0];
const note = document.getElementsByClassName("note")[0];
function add(img, price1, price2, price, name) {

    var cartContent = `
        <div class="cart-cont">
        <img src="${img}" class="image" />
        <div class="text">
        <p class="title">${name}</p>
        <div class="label">
            <p class="before">${price1} x ${price2} </p>
            <h3 class="after">${price}</h3>
        </div>
        </div>
        <img src="images/icon-delete.svg" alt="svg" class="delete" />
    </div>
    `

    cartItems.innerHTML = cartContent
    cartItems.getElementsByClassName("delete")[0].addEventListener("click", removeItem);
    main.getElementsByClassName("checkout")[0].style.display = "flex";

    //car notification
    note.innerText = price2;
    note.style.display = "block";

}

//remove from cart
function removeItem(event) {
    let button = event.target
    button.parentElement.remove();
    main.getElementsByClassName("checkout")[0].style.display = "none";
    let heading = document.createElement("h5");
    heading.innerText = "Your cart is empty"
    cartItems.innerHTML = heading.innerText;

    //notification full basket
    note.style.display = "none";
}


