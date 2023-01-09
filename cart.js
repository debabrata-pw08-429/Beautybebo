var productarr=JSON.parse(localStorage.getItem("cartlist")) || [];

var cart=document.getElementsByClassName("header");

if(productarr.length===0){
    cart.textContent="Cart is empty. Add products to cart"
}else{
    displayproduct(productarr);
    CalculatecartValue(productarr);
}


function CalculatecartValue(){
    var subtotal=productarr.reduce(function(acc,curr){
        return acc.price + curr.price;
    });
    


}

function displayproduct(productarr){
    document.querySelector(".header").textContent="";
   productarr.map(function(element,index){
    
    var div=document.createElement("div");

    var img=document.createElement("img");
     img.setAttribute("src",element.Img_url);
     img.setAttribute("alt",element.id);

     var p_title=document.createElement("p");
     p_title.setAttribute("class","title");
     p_title.textContent=element.title;

     var p_price=document.createElement("p");
     p_price.setAttribute("class","price");
     p_price.textContent=element.price;

     var p_quantity=document.createElement("p");
     p_quantity.setAttribute("class","quantity");
     p_quantity.textContent=element.qty;
     
     var p_total=document.createElement("p");
     p_total.setAttribute("class","total");
     p_total.textContent=element.price;

     var p_delete=document.createElement("p");
     p_delete.setAttribute("class","delete");
     p_delete.textContent="Delete";
     p_delete.addEventListener("click",function(){
        deleterow(index);
     });

    div.append(img,p_title,p_price,p_quantity,p_total,p_delete);

    document.querySelector(".header").append(div);
  


   });
}

 function deleterow(index){
 productarr.splice(index,1);
 localStorage.setItem("productarr",JSON.stringify(productarr));
 displayproduct(productarr);

 }