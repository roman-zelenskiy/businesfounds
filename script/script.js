!function(){const e=document.querySelector(".btn_accept");if(localStorage.getItem("cookiesAccepted")){document.querySelector(".cookies_accept").style.display="none"}e.addEventListener("click",(function(){localStorage.setItem("cookiesAccepted","true");const e=document.querySelector(".cookies_accept");e.classList.add("hide"),setTimeout((function(){e.style.display="none"}),500)}))}();
const swiper=new Swiper(".swiper",{autoplay:{delay:1e3},slidesPerView:1,loop:!0,breakpoints:{320:{slidesPerView:1,spaceBetween:20},576:{slidesPerView:2,spaceBetween:30},768:{slidesPerView:3,spaceBetween:40},992:{slidesPerView:4,spaceBetween:50}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),swiperTeacher=new Swiper(".swiper_teach",{pagination:{el:".swiper-pagination"},slidesPerView:1,spaceBetween:30,loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});