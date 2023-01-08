document.querySelector("#MyProfile > p").addEventListener("click", link_to_ac);
function link_to_ac() {
  window.location.href = "account.html";
}

// Favourite section =
document
  .querySelector("#aboveNavBar img")
  .addEventListener("click", link_to_homepage);
function link_to_homepage() {
  window.location.href = "index.html";
}
document.querySelector("#parentNavBar div:last-child").addEventListener("click",sentToCart);
 function sentToCart(){
    window.location.href = "cart.html";
 }
//  document.querySelector("#favourites div").addEventListener("click",SendToFavourite)
 function SendToFavourite(){
  window.location.href = "product page.html";
}
document.querySelector("#MyProfile").addEventListener("click",addProfile);
function addProfile(){
    window.location.href = "product page.html"
}