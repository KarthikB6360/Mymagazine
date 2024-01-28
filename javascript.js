searchForm = document.querySelector('.search-from');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
}

document.querySelector('#colse-login-btn').onclick = () =>{
    loginForm.classList.remove('active');
}


window.onscroll = () =>{

    searchForm.classList.remove('active');


    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
    
}

window.onload = () =>{

    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
   
}

// var loader = document.querySelector(".loader")
// window.addEventListener("load",vanish);
// function vanish() {
//   loader.classList.add("disppear");
// }

const fadeOut = () => {
  const loader = document.querySelector('.loader');
  loader.classList.add('fade');
}
window.addEventListener('load',fadeOut);



var swiper = new Swiper(".books-slider", {
   loop:true,
   centeredSlides:true,
   autoplay:{
    delay:9500,
    disableonInteraction: false,
   },
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
       
      },
      1024: {
        slidesPerView: 3,
        
      },
    },
  });

  var swiper = new Swiper(".featured-slider", {
    spaceBetween:10,
    loop:true,
    centeredSlides:true,
    autoplay:{
     delay:9500,
     disableonInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
     breakpoints: {
       0: {
         slidesPerView: 1, 
       },
       450: {
        slidesPerView: 2, 
      },
       768: {
         slidesPerView: 3,
       },
       1024: {
         slidesPerView: 4, 
       },

     },
   });

   var swiper = new Swiper(".arrivals-slider", {
    spaceBetween:10,
    loop:true,
    centeredSlides:true,
    autoplay:{
     delay:9500,
     disableonInteraction: false,
    },
     breakpoints: {
       0: {
         slidesPerView: 1, 
       },
       768: {
         slidesPerView: 2,
       },
       1024: {
         slidesPerView: 3, 
       },

     },
   });

   var swiper = new Swiper(".reviews-slider", {
    spaceBetween:10,
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay:{
     delay:9500,
     disableonInteraction: false,
    },
     breakpoints: {
       0: {
         slidesPerView: 1, 
       },
       768: {
         slidesPerView: 2,
       },
       1024: {
         slidesPerView: 3, 
       },

     },
   });

   var swiper = new Swiper(".blogs-slider", {
    spaceBetween:10,
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay:{
     delay:9500,
     disableonInteraction: false,
    },
     breakpoints: {
       0: {
         slidesPerView: 1, 
       },
       768: {
         slidesPerView: 2,
       },
       1024: {
         slidesPerView: 3, 
       },

     },
   });