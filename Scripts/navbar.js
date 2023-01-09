// Page Linking and ahrefs -

document.querySelector("#MyProfile > p").addEventListener("click", link_to_acc);
function link_to_acc() {
  window.location.href = "account.html";
}

// Favourite section =
document
  .querySelector("#aboveNavBar img")
  .addEventListener("click", link_to_homepage);
function link_to_homepage() {
  window.location.href = "index.html";
}
document
  .querySelector("#parentNavBar div:last-child")
  .addEventListener("click", sentToCart);
function sentToCart() {
  window.location.href = "cart.html";
}
// document
//   .querySelector("#favourites div")
//   .addEventListener("click", SendToFavourite);
// function SendToFavourite() {
//   window.location.href = "favourites.html";
// }
document
  .querySelector("#MyProfile > div")
  .addEventListener("click", addProfile);
function addProfile() {
  window.location.href = "login.html";
}

// Cart Total -

var cart = JSON.parse(localStorage.getItem("cartlist")) || [];
window.onload = function Subtotal() {
  var total = cart.reduce((acc, curr) => {
    return (acc + curr.price) * curr.qty;
  }, 0);
  document.querySelector("#Cart_Total").innerHTML = "₹" + Number(total);
  document.querySelector("#Cart_Total").style.backgroundColor = "black";
};
