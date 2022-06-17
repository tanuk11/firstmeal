import { navbar } from "../components/navbar.js";

 let m=document.getElementById("navbar");
 m.innerHTML = navbar();

 import { footer } from "../components/footer.js";
 let n=document.getElementById("footer")
 n.innerHTML=footer();


 let data=JSON.parse(localStorage.getItem("cartData"))
 if (data.length == null)
 {

    let div0=document.createElement('div')

    let div=document.createElement('div')
    div.setAttribute("id","cart_prod")
    div.innerText="Your cart is currently empty."

    let btn=document.createElement("button")
    btn.setAttribute("id","cartbtn")
    btn.innerText="Return to Shop"
    btn.addEventListener("click",product)

    div0.append(div,btn)


    document.getElementById("cartbody").append(div0)

     
}

 

     function product(){
     
         location.href="products.html"
     }


let sum=0;
data.map(function(el,i){
        var tr=document.createElement("tr");
        tr.setAttribute('class','cart_box3')

        var td1=document.createElement("td");
        td1.innerText="remove";
        td1.addEventListener("click",function(){
            removeprod(i)
        })
    
        var td2=document.createElement("img")
        td2.src=el.img;
        td2.setAttribute("class","img")

        var td3=document.createElement("td");
        td3.innerText=el.name;
    
        var td4=document.createElement("td");
        td4.textContent=el.price;
        td4.style.color="green"

         sum=sum + Number(el.price)
    
        var td5=document.createElement("td");
        td5.textContent="1";
    
        var td6=document.createElement("td");
        td6.textContent=el.price

     tr.append(td1, td2,td3,td4,td5,td6);

     document.querySelector("tbody").append(tr)

     })

// console.log(sum)
     function removeprod(i){
 
        data.splice(i,1)

        localStorage.setItem("cartData",JSON.stringify(data))
        location.reload()

     }


     document.getElementById("purchasebtn").addEventListener("click",checkout)
     function checkout()
     {
         location.href="checkout.html"
     }

     document.getElementById(
        "totalprice"
  ).append(`Grand Total :  ${sum}`);

//   document.getElementById("totalprice").append(total_cartPrice);


     document.getElementById(
        "cartlen"
  ).innerText = `${data.length}`;