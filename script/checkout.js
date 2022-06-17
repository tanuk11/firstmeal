import { navbar } from "../components/navbar.js";

 let m=document.getElementById("navbar");
 m.innerHTML = navbar();

 import { footer } from "../components/footer.js";
 let n=document.getElementById("footer")
 n.innerHTML=footer();


 document.getElementById("placebtn").addEventListener("click",placed)
  function placed()
  {
    location.href="thanks.html"
  }
