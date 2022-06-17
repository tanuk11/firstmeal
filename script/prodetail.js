import { navbar } from "../components/navbar.js";

 let m=document.getElementById("navbar");
 m.innerHTML = navbar();

 import { footer } from "../components/footer.js";
 let n=document.getElementById("footer")
 n.innerHTML=footer();

let cart=JSON.parse(localStorage.getItem("cartData")) ||[]
 let data=JSON.parse(localStorage.getItem("prodetail"))
console.log(data)
let prodata=[];
prodata.push(data)

 prodata.map(function(el){

     let div=document.createElement('div')
     div.setAttribute("id","prodata_box1")
     
     let image=document.createElement('img')
     image.src=el.img;

 let div1=document.createElement('div')
 div1.setAttribute("id","prodata_box2")

 let price=document.createElement("div")
 price.innerText=el.price;
 price.style.color="red"

 let quantity=document.createElement('div')
 quantity.innerText="Quantity - 500gm"
 quantity.style.marginTop="10px"

 let btn=document.createElement("button")
 btn.innerText="Add to Cart"
 btn.setAttribute("id","prodatabtn")
 btn.addEventListener("click",function(){
    addToCart(el)
 })

 div1.append(price,quantity,btn)

 div.append(image,div1)
 
 document.getElementById("prodetail_box1").append(div)
 
})

function addToCart(el){
    cart.push(el)

    localStorage.setItem("cartData",JSON.stringify(cart))
    location.href="cart.html"
}

