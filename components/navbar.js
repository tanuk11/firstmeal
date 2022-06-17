
function navbar(){
    return `
    <div id="upper-navbar">
    <div id="info1">
        <div id="location">
            <div><i style="color:green" class="fa-lg fa-solid fa-location-dot"></i></div>
            <div>Food delivery only in Hyderabad
            </div>
        </div>
        <div id="phone">
            <div><i style="color:green" class="fa-lg fa-solid fa-phone"></i></div>
            <div>9100347480
            </div>
        </div>
        <div id="mail">
            <div><i style="color:green" class="fa-lg fa-solid fa-envelope"></i></div>
            <div>fitmealsindia@gmail.com</div>
        </div>
    </div>
    <div id="info2">
    <div id="user">
        <div><i class="fa-lg fa-solid fa-magnifying-glass"></i></div>
        <div><a href="login.html" style="text-decoration:none; color:grey"><i class="fa-lg fa-solid fa-user"></i></a></div>
        <div><a href="cart.html" style="text-decoration:none; color:grey"><i class="fa-lg fa-solid fa-bag-shopping"></i></a></div>
        <div id="cartlen">0</div>
    </div>
</div>
</div>

<hr>
<div id="middle-navbar">


    <div>
       <img src="https://www.fitmeals.co.in/wp-content/uploads/2019/06/logo-black.png" alt="">
    </div>
    <div id="pages">
        <li class="pages_a"><a href="index.html" style="text-decoration:none; color:black">Home</a></li>
        <li class="pages_a">Meal Plans >
             <div class="sub-menu-1">
                <ul>
                    <li><a href="weightLoss.html" style="text-decoration:none; color:black">Weight Loss Meal Plan</a></li>
                    <li>Maintenance Meal Plan</li>
                    <li>Athelatic Meal Plan</li>
                    <li>Ket Meal Plan</li>
                    <li>Transformation Challenges</li>
                </ul>
             </div>
        </li>
        <li class="pages_a"><a href="healthCoaching.html" style="text-decoration:none; color:black">Health Coaching</a></li>
        <li class="pages_a">products >
            <div class="sub-menu-1">
                <ul>
                    <li><a href="products.html" style="text-decoration:none; color:black">Vegan Sweets</a></li>
                    <li>Lal-Cal Sauces</li>
                    <li>Nut Butters</li>
                    <li>Fresh cakes</li>
                   
                </ul>
             </div>

        </li>
        <li class="pages_a">Blogs</li>
        <li class="pages_a">About Us >
            <div class="sub-menu-1">
                <ul>
                    <li>Our Story</li>
                    <li>FAQ</li>
                    <li>Testimonials</li>
                   
                   
                </ul>
             </div>

        </li>
    </div>
    <div id="callbox">
        call :9100347480

    </div>

</div>
    
    
 
    `;
}

export {navbar}


function homebox1(){

    return `
    <div id="home_box_a">
    <h1>It's not just food,</h1>
    <h1 style="color: green;">It's a lifestyle!</h1>
    <p>We break the stereotype ‘healthy eating 
     is boring”. Reach your weight, health and 
     workout goals with deliciously healthy food.
      We have various diet plans customised to 
      suit your specific health and weight 
      requirements. With a new changing menu
       every week, we bring to you food from various 
       cuisines, with a healthy twist. We make 
       healthy eating fun and effortless!</p>
       <button>Read more</button>
 </div>

 <div id="home_box_b">
   <img src="https://www.fitmeals.co.in/wp-content/uploads/2019/10/health-bottle-cut.jpg" alt="">
 </div>
  
 <div id="home_box_c">
   <h3>Custom tailored diet plans.</h3>

     <h3>Free from refined sugars & trans fats.</h3>
    <h3>Different menu every day.</h3> 
      <h3>Flexibility of plans</h3>
      <h3>nutritionist support. </h3>
 </div>
    `
}

export {homebox1}