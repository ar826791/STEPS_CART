let wrapper = document.querySelector(".sliderWrapper")
let menuItems = document.querySelectorAll(".menuitem")

const products = [
    {
        id:1,
        title:"Air Force",
        price: 119,
        colors: [
            {
                code: "black",
                img: "./img/air.png"
            },
            {
                code: "darkblue",
                img: "./img/air2.png"
            },
        ],
    },
    {
        id:1,
        title:"Air Jordan",
        price: 169,
        colors: [
            {
                code: "lightgrey",
                img: "./img/jordan.png"
            },
            {
                code: "green",
                img: "./img/jordan2.png"
            },
        ],
    },
    {
        id:1,
        title:"Blazer",
        price: 149,
        colors: [
            {
                code: "lightgrey",
                img: "./img/blazer.png"
            },
            {
                code: "green",
                img: "./img/blazer2.png"
            },
        ],
    },
    {
        id:1,
        title:"Crater",
        price: 109,
        colors: [
            {
                code: "black",
                img: "./img/crater.png"
            },
            {
                code: "lightgrey",
                img: "./img/crater2.png"
            },
        ],
    },
    {
        id:1,
        title:"Hippie",
        price: 129,
        colors: [
            {
                code: "grey",
                img: "./img/hippie.png"
            },
            {
                code: "black",
                img: "./img/hippie2.png"
            },
        ],
    },

    
];

let choosenProduct = products[0];

let currentProductTitle = document.querySelector(".productTitle")
let currentProductPrice = document.querySelector(".productPrice")
let currentProductColors = document.querySelectorAll(".color")
let currentProductImg  = document.querySelector(".productImg")
let currentProductSizes = document.querySelectorAll(".size")

menuItems.forEach((item,index) => {
    item.addEventListener("click", ()=>{

        //change the curret slide
        wrapper.style.transform = `translatex(${-100 * index}vw)`


        //change the choosen product
        choosenProduct = products[index];

        //change the description of feature box
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;


        //assigning new colors
        currentProductColors.forEach((color,index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        })
    });
});

currentProductColors.forEach((color,index) => {
    color.addEventListener("click", ()=>{
        currentProductImg.src = choosenProduct.colors[index].img;
    })
})

currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click", ()=>{
        currentProductSizes.forEach((size)=>{
            size.style.backgroundColor = "white"
            size.style.color = "black"
        });
        size.style.backgroundColor = "black"
        size.style.color = "white"
    })
})

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", ()=>{
    payment.style.display = "flex"
})

close.addEventListener("click", ()=>{
    payment.style.display = "none"
})