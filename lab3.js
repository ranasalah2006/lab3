let cartQuantity = 0;

let h2= document.getElementById("cartQuantity");
let b1= document.getElementById("show Quantity");
let b2= document.getElementById("add to cart");
let b3= document.getElementById("+2");
let b4= document.getElementById("+3");
let b5= document.getElementById("reset");

b1.addEventListener("click", function1 );
b2.addEventListener("click", function2 );
b3.addEventListener("click", function3 );
b4.addEventListener("click", function4 );
b5.addEventListener("click", function5 );

function function1() {

   h2.textContent= cartQuantity;
}

function function2() {
   cartQuantity++;
   h2.textContent= cartQuantity;
}


function function3() {

   cartQuantity+=2;
   h2.textContent= cartQuantity;
}
function function4() {
   
   cartQuantity+=3;
   h2.textContent= cartQuantity;

}

function function5() {
   cartQuantity = 0;
   h2.textContent= cartQuantity;
}

