// ----------модальное окно-----------
// let call = document.getElementById('call');
let openModal = document.getElementById('openModal');
let openModal2 = document.getElementById('openModalstep2');
let closeModal = document.getElementById('closeModal');



call.onclick= function (){
   openModal.classList.add("open");
   openModalstep2.classList.add("open");
   // /remove
}
closeModal.onclick= function (){
   openModal.classList.remove("open");
   openModalstep2.classList.remove("open");
   // /remove
}



let close = document.getElementById('open-user');
close.onclick= function (){
   alert('ЭТО USER');
   
}


let open = document.getElementById('open-basket');
   open.onclick= function (){
   alert('ЭТО КОРЗИНА');
   
}

// -------------------генератор карт--------------------
let nameProduct = "Фотоаппарат";
let modelProduct = "D3400";
let sale = 5;
let price = "28490.50";
let noprice2 = + price*100/(100 - sale);
noprice = noprice2.toFixed(2);

let  container1 = document.getElementById('card1');
let  container2 = document.getElementById('card2');
let container3 = document.getElementById('card3');
let container4 = document.getElementById('card4');
let container5 = document.getElementById('card5');
let i;
for(i = 1; i < 6; i++){    
   let newcard = "<div class=\"product__item-card\"><div class=\"popular__item\"><div class=\"product__element\"><div class=\"product__top-sale\"><h5 class=\"top-sale\">"+sale+"%</h5></div><img class=\"product__favorit\" src=\"images/Catalog/popular/favorit/favorit.svg\" alt=\"\"><button class=\"ic24-shoping header-icon-btn buy\" id=\"addBasket"+i+"\"><img class=\"img__icon\" src=\"images/Header/basket.svg\" alt=\"basket\"></button></div><a class=\"product__link\" href=\"#\"><img class=\"product__img\" src=\"images/Catalog/popular/photokit.png\" alt=\"photokit\"></a></div><div class=\"product__item-description\"><h5 class=\"product__item-des item__price\">"+price+"₽</h5><h5 class=\"product__item-des item__noprice\">"+noprice+" ₽</h5><h5 class=\"product__item-des item__des\">"+nameProduct+" "+modelProduct+i+"</h5></div></div>";

      container1.innerHTML+= newcard;
      container2.innerHTML+= newcard;
      container3.innerHTML+= newcard;
      container4.innerHTML+= newcard;
      container5.innerHTML+= newcard;

      // card.insertAdjacentHTML("beforeBegin", newcard);
      // card.insertAdjacentHTML("afterEnd", newcard);


};


let addBasket1 = document.getElementById('addBasket1');
let addBasket2 = document.getElementById('addBasket2');
let addBasket3 = document.getElementById('addBasket3');
let addBasket4 = document.getElementById('addBasket4');
     addBasket1.onclick= function (){
       alert(nameProduct+" "+modelProduct+i+ " "+"добавлен в корзину #1!");

     }
     addBasket2.onclick= function (){
      alert(nameProduct+" "+modelProduct+i+ " "+"добавлен в корзину #2!");

    }
    addBasket3.onclick= function (){
      alert(nameProduct+" "+modelProduct+i+ " "+"добавлен в корзину #3!");

    }
    addBasket4.onclick= function (){
      alert(nameProduct+" "+modelProduct+i+ " "+"добавлен в корзину #4!");

    }
    addBasket5.onclick= function (){
      alert(nameProduct+" "+modelProduct+i+ " "+"добавлен в корзину #5!");

    }


