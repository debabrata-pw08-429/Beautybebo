var productList = [
  {
    Img_url:
      "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/b/bbj0001565-1.jpg",
    title: "Aroma Magic Activated Bamboo Charcoal Face Wash",
    price: 210,
    strikeOffPrice: 399,
    discount: 10,
    rating: 3,
  },
  {
    Img_url:
      "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/u/n/untitled-89.jpg",
    title: "Ponds white beauty antispot fairness day cream",
    price: 450,
    strikeOffPrice: 599,
    discount: 12,
    rating: 9,
  },
  {
    Img_url:
      "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/1/_/1_210_4.jpg",
    title: "Himalaya Herbals Anti-Wrinkle Cream",
    price: 550,
    strikeOffPrice: 699,
    discount: 17,
    rating: 5,
  },
  {
    Img_url:
      "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/3/b/3b741delotaa00000044_nv1.jpg",
    title:
      "Lotus Professional Retemin Plant Retinol & Vitamin C Brightening Boost Night Cream",
    price: 360,
    strikeOffPrice: 399,
    discount: 11,
    rating: 6,
  },
  {
    Img_url:
      "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/9/f/9f1b98c8904352000683_1.jpg",
    title:
      "Biotique Bio Green Apple Fresh Daily Purifying Shampoo & Conditioner",
    price: 299,
    strikeOffPrice: 499,
    discount: 20,
    rating: 5,
  },
  {
    Img_url:
      "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/p/o/ponds_super_light_gel_oil_free_moisturiser_with_hyaluronic_acid_vitamin_e2.jpg",
    title:
      "Ponds Super Light Gel Oil Free Moisturiser With Hyaluronic Acid + Vitamin E",
    price: 299,
    strikeOffPrice: 499,
    discount: 20,
    rating: 15,
  },
  {
    Img_url:
      "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/u/n/untitled-140.jpg",
    title: "Blue Heaven Candy Matte Lip Color",
    price: 159,
    strikeOffPrice: 299,
    discount: 23,
    rating: 18,
  },
  {
    Img_url:
      "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/7/c/7c1a8e9o3xxx00000057_new1.jpg",
    title: "O3+ Derma Cult Vitamin-C Tonic Solution",
    price: 533,
    strikeOffPrice: 599,
    discount: 11,
    rating: 5,
  },
  {
    Img_url:
      "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/f/f/ff360238903487002210_1.jpg",
    title: "Miss Claire M14 - Eyeshadow Blending Brush",
    price: 428,
    strikeOffPrice: 475,
    discount: 10,
    rating: 9,
  },
  {
    Img_url:
      "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/6/8/68caf778903487000186_1.jpg",
    title: "Miss Claire Eyeshadow Kit 3716-11-1",
    price: 395,
    strikeOffPrice: 395,
    discount: 0,
    rating: 1,
  },
  {
    Img_url:
      "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/a/a/aaa_3.jpg",
    title: "Gillette Venus Breeze Razor With Avocado Oil",
    price: 286,
    strikeOffPrice: 325,
    discount: 12,
    rating: 5,
  },
  {
    Img_url:
      "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/f/6/f658864trese00000061_1.jpg",
    title: "Tresemme Pro Pure Damage Recovery Shampoo & Mask Combo",
    price: 1116,
    strikeOffPrice: 1200,
    discount: 7,
    rating: 15,
  },
];

var id = 1;
var qty = 1;
console.log(productList);

displayproducts(productList);
function displayproducts(list) {
  document.querySelector("#card_container").textContent = "";
  list.map(function (elem) {
    elem["id"] = id;
    id++;
    elem["qty"] = qty;
    var div = document.createElement("div");
    div.setAttribute("class", "item");

    var image = document.createElement("img");
    image.setAttribute("src", elem.Img_url);
    image.setAttribute("alt", elem.id);

    var title = document.createElement("p");
    title.textContent = elem.title;

    var Icon_p = document.createElement("p");
    var Icon1 = document.createElement("i");
    Icon1.setAttribute("class", "fa-solid fa-star");
    var Icon2 = document.createElement("i");
    Icon2.setAttribute("class", "fa-solid fa-star");
    var Icon3 = document.createElement("i");
    Icon3.setAttribute("class", "fa-solid fa-star");
    var Icon4 = document.createElement("i");
    Icon4.setAttribute("class", "fa-solid fa-star");
    var Icon5 = document.createElement("i");
    Icon5.setAttribute("class", "fa-solid fa-star");
    var rating = document.createElement("span");
    rating.innerText = "(" + elem.rating + ")";
    Icon_p.append(Icon1, Icon2, Icon3, Icon4, Icon5, rating);

    var price_p = document.createElement("p");
    var strikeOff = document.createElement("span");
    strikeOff.innerText = "₹" + elem.strikeOffPrice + ".00";
    strikeOff.setAttribute("class", "strike_off_price");

    var mrp = document.createElement("span");
    mrp.innerText = "₹" + elem.price + ".00";
    mrp.setAttribute("class", "price");

    var discount_per = document.createElement("span");
    discount_per.innerText = elem.discount + "%";
    discount_per.setAttribute("class", "discount_per");
    price_p.append(strikeOff, mrp, discount_per);

    var button = document.createElement("button");
    button.setAttribute("class", "btn_add");
    button.textContent = "Add to cart";

    var icon_add = document.createElement("i");
    icon_add.setAttribute("class", "fa-solid fa-bucket");
    button.append(icon_add);

    var button_fav = document.createElement("button");
    button_fav.setAttribute("class", "btn_fav");

    var icon_fav = document.createElement("i");
    icon_fav.setAttribute("class", "fa-solid fa-heart");
    button_fav.append(icon_fav);

    div.append(image, title, Icon_p, price_p, button, button_fav);
    document.querySelector("#card_container").append(div);
  });
}
function handleFilter() {
  var selected = document.getElementById("FilterCate").value;

  if (selected === "htl") {
    productList.sort(function (a, b) {
      return b.price - a.price;
    });
  } else if (selected === "lth") {
    productList.sort(function (a, b) {
      return a.price - b.price;
    });
  }
  displayproducts(productList);
}
// for dropdown content
function myFunction() {
  document.getElementById("SkinType").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

document
  .querySelector("#aboveNavBar img")
  .addEventListener("click", link_to_homepage);
function link_to_homepage() {
  window.location.href = "index.html";
}
