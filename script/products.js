import { navbar } from "../components/navbar.js";

let m=document.getElementById("navbar");
m.innerHTML = navbar();

import { footer } from "../components/footer.js";
let n=document.getElementById("footer")
n.innerHTML=footer();


// let prodetail=[]
let data=[
    {
        img:"https://www.fitmeals.co.in/wp-content/uploads/2021/06/25.jpg",
        name:"Almond Date Chocolate",
        des:"Delicious Dates stuffed with a Almonds and covered in dark chocolate. With the finest golden almonds at the ...",
        price:"1200",
    },
    {
        img:"https://www.fitmeals.co.in/wp-content/uploads/2021/06/23-360x360.jpg",
        name:"Coco Rush",
        des:"Coco Rush is made with dates, nuts, premium grade cacao and wholesome ingredients. A delicious, healthy ...",
        price:"550",
    },
    {
        img:"https://www.fitmeals.co.in/wp-content/uploads/2021/06/veganhomemadeenergybarsh-360x360.jpg",
        name:"Energy Bars",
        des:"Each bar brings a great texture with the energy and nutrients you need.  We keep things sweet by using only ...",
        price:"750",
    },
    {
        img:"https://www.fitmeals.co.in/wp-content/uploads/2021/06/24-360x361.jpg",
        name:"Flex Seed Balls",
        des:"A crunchy, chocolaty dessert for hunger pangs, Flax Seeds will provide you instant energy. About This Product ...",
        price:"550",
    },
    {
        img:"https://www.fitmeals.co.in/wp-content/uploads/2021/06/snack-nuttyBuddy-300x300-1.jpg",
        name:"Nutty Buddy",
        des:"Nutty Buddy – These Nutrient-packed nutty treats make for the perfect guilt-free snack … and ...",
        price:"650",
    },
    {
        img:"https://www.fitmeals.co.in/wp-content/uploads/2021/06/peanut-butter-balls-2-360x360.jpg",
        name:"Peanut Butter Truffles",
        des:"Creamy peanut butter completely coated in dark chocolate — The ultimate snack for those who love all things ...",
        price:"1050",
    }
]

console.log(data)
data.map(function (el){
     let div=document.createElement('div')
     div.setAttribute("class","probox")

     let image=document.createElement("img")
     image.src=el.img;
     image.setAttribute("class" ,"img")

     let name=document.createElement("h2")
     name.innerText=el.name;

     let des=document.createElement("p")
     des.innerText=el.des;

     let price=document.createElement("h2")
     price.innerText=el.price;
     price.style.color="red"

     let btn=document.createElement("button")
     btn.innerText="Select Options"
     btn.setAttribute("class","probtn")
     btn.addEventListener("click",function(){
        prodetail(el)
     })

     let read=document.createElement("p")
     read.innerText="Read More"
     read.style.color="green"

     div.append(image,name,des,price,btn,read)

     document.getElementById("prodcontain").append(div)
})



function prodetail(el){

    // prodetail.push(el)
    localStorage.setItem("prodetail",JSON.stringify(el))
   location.href="prodetail.html" 
}



