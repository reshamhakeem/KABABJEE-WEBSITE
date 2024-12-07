//NAV BAR
const menuIcon = document.getElementsByClassName("icon")[0];
const navLinksContainer = document.querySelector(".nav-links");

menuIcon.addEventListener("click", ()=> {
navLinksContainer.classList.toggle("active");
});


window.addEventListener("scroll",()=>{
  const navLinks = document.querySelector(".nav-links");

  if(window.scrollY > 50){
    navLinks.classList.add("sticky");
    navLinks.classList.remove("transparent");
  } else{
    navLinks.classList.add("transparent");
    navLinks.classList.remove("sticky");
  }
});



//SPECIALITIES & BANK SWIPER
const swiper = new Swiper(".slide-content", {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  speed: 800,
  // Autoplay settings
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next-1",
    prevEl: ".swiper-button-prev-1",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});


// GALLERY
const swiper2 = new Swiper(".slide-content-gallery", {
  // Optional parameters
  slidesPerView: 4,
  spaceBetween: 15,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  speed: 800,
  // Autoplay 
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  // pagination
  navigation: {
    nextEl: ".swiper-button-next-2",
    prevEl: ".swiper-button-prev-2",
  },

  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    450: {
      slidesPerView: 3,
    },
    950: {
      slidesPerView: 4,
    },
  },
});


// BEGIN TESTIMONIALS

const swiper3 = new Swiper(".slide-content-testimonials", {
  slidesPerView: 1,
  loop: true,
  speed: 800,
  // Autoplay 
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  // pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});





