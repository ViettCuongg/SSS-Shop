


let product = document.getElementById("grid__row");
let shopItemsData = [
    {
        id: "item1",
        name: "Basic-TShirt",
        oldPrice: "100.000đ",
        newPrice: "90.000đ",
        brand: "OVA",
        origin: "USA",
        sale: "9%",
        img: "./assets/img/t-shirt.jpg",
        sold: 49,
    },

    {
        id: "item1",
        name: "Basic-TShirt",
        oldPrice: "100.000đ",
        newPrice: "90.000đ",
        brand: "OVA",
        origin: "USA",
        sale: "9%",
        img: "./assets/img/polo_seconhand.jpg",
        sold: 49,
    },

    {
        id: "item2",
        name: "Basic-TShirt",
        oldPrice: "100.000đ",
        newPrice: "90.000đ",
        brand: "OVA",
        origin: "USA",
        sale: "9%",
        img: "./assets/img/somi_seconhand.jpg",
        sold: 49,
    },

    {
        id: "item3",
        name: "Basic-TShirt",
        oldPrice: "100.000đ",
        newPrice: "90.000đ",
        brand: "OVA",
        origin: "USA",
        sale: "9%",
        img: "./assets/img/sweater_2hand.jpg",
        sold: 49,
    },

    {
        id: "item4",
        name: "Adidas",
        oldPrice: "100.000đ",
        newPrice: "90.000đ",
        brand: "OVA",
        origin: "USA",
        sale: "9%",
        img: "./assets/img/adidas_aogio.jpg",
        sold: 49,
    },

    {
        id: "item5",
        name: "Basic-TShirt",
        oldPrice: "100.000đ",
        newPrice: "90.000đ",
        brand: "OVA",
        origin: "USA",
        sale: "9%",
        img: "./assets/img/flanel.jpg",
        sold: 49,
    },

    {
        id: "item6",
        name: "Basic-TShirt",
        oldPrice: "100.000đ",
        newPrice: "90.000đ",
        brand: "OVA",
        origin: "USA",
        sale: "9%",
        img: "./assets/img/aophong_mysi.jpg",
        sold: 49,
    },
]

let genneraeShop = () => {
    return (product.innerHTML = shopItemsData.map((items) => {
        let { id, name, oldPrice, newPrice, brand, origin, sale, img, sold } = items;
        return `
    <div class="grid__column-2-4 " id=product__id-${id}>
    <a class="home-product-item" href="product_detail.html">
        <div class="home-product-item__img "
            style="background-image:url(${img});">
        </div>
        <h4 class="home-product-item-name">${name} </h4>
        <div class="home-product-item__price">
            <span class="home-product-item__price-old">${oldPrice}</span>
            <span class="home-product-item__price-current">${newPrice}</span>

        </div>
        <div class="home-product-item__action">
            <!--Remove class="home-product-item__like-icon--liked " icon like change color-->
            <span class="home-product-item__like home-product-item__like-icon--liked ">
                <i class="home-product-item__like-icon-empty fa-regular fa-heart"></i>
                <i class="home-product-item__like-icon-fill fas fa-heart"></i>

            </span>
            <div class="home-product-item__rating">
                <i class="home-product-item__star--gold fa-solid fa-star"></i>
                <i class="home-product-item__star--gold fa-solid fa-star"></i>
                <i class="home-product-item__star--gold fa-solid fa-star"></i>
                <i class="home-product-item__star--gold fa-solid fa-star"></i>
                <i class="home-product-item__star--gold fa-solid fa-star"></i>

            </div>
            <span class="home-product-item__sold">${sold}</span>

        </div>
        <div class="home-product-item__origin">
            <span class="home-product-item__brand">
                ${brand}
            </span>
            <span class="home-product-item__origin-name">${origin}</span>
        </div>
        <div class="home-product-item__favourite">
            <i class="fa-solid fa-check"></i>
            <span> Yêu thích</span>

        </div>
        <div class="home-product-item__sale-off">
            <span class="home-product-item__sale-off-percent">
            ${sale}
            </span>
            <label for="" class="home-product-item__sale-off-label">Sale</label>
        </div>
    </a>


</div>
        `
    }).join(""));


}

genneraeShop();


/* MODAL  */

function goBack_login() {
    var modal1 = document.getElementById("modal__login");
    var modal2 = document.getElementById("modal__register");
    modal1.style.display = "none";
    modal2.style.display = "none";

}



function register_form() {
    var modal1 = document.getElementById("modal__register");
    var modal2 = document.getElementById("modal__login");

    modal1.style.display = "flex";
    modal2.style.display = "none"


}

function login_form() {
    var modal1 = document.getElementById("modal__login");
    var modal2 = document.getElementById("modal__register");

    modal1.style.display = "flex";
    modal2.style.display = "none";


}





const allHoverImages = document.querySelectorAll('.hover-container div img');
const imgContainer = document.querySelector('.img-container');



allHoverImages.forEach((image) => {
    image.addEventListener('mouseover', () => {
        imgContainer.querySelector('img').src = image.src;
        resetActiveImg();
        image.parentElement.classList.add('active');
    });
});

function resetActiveImg() {
    allHoverImages.forEach((img) => {
        img.parentElement.classList.remove('active');
    });
}





