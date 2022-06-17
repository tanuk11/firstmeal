import { navbar } from "../components/navbar.js";

 let m=document.getElementById("navbar");
 m.innerHTML = navbar();

 import { footer } from "../components/footer.js";
 let n=document.getElementById("footer")
 n.innerHTML=footer();



 document.getElementById("loginbtn").addEventListener("click",login)

 let data=[]
 function login(){

    let obj={
        email:document.getElementById("user_email").value ,
        pass:document.getElementById("user_pass").value
    }

    data.push(obj)

    localStorage.setItem("userData",JSON.stringify(data))
    location.href="index.html"
 }
 