$(document).ready(function () {
  let menu = document.querySelector("#sidebar .menu");

  $(menu).click(function () {
    $("#nav-icon4").toggleClass("open");
  });
});

function navBarWithSideAnimation() {
  let menu = document.querySelector("#sidebar .menu");
  let closeBtn = document.querySelector("#close-button-sidebar");
  let sidebar = document.querySelector("#sidebar");
  let hiddenDiv = document.querySelector("#hide-div-menu");
  let logoImage = document.querySelector("#header-section #logo-img");
  let hideDivMenu = document.querySelector("#hide-div-menu .menuList");

  menu.addEventListener("click", () => {
    hiddenDiv.classList.toggle("hide-div-menu");

    sidebar.classList.toggle("border-sider");
  });
}

navBarWithSideAnimation();

// Gallery Home page

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

// Hompage Clients

function ClientHomePage() {
  let SwiperTop = new Swiper(".swiper--top", {
    spaceBetween: 0,
    // slidesPerView: 3,

    centeredSlides: true,
    speed: 6000,
    autoplay: {
      delay: 1,
    },
    loop: true,
    slidesPerView: "auto",
    allowTouchMove: false,
    disableOnInteraction: true,
  });

  let SwiperBottom = new Swiper(".swiper--bottom", {
    spaceBetween: 0,
    centeredSlides: true,
    speed: 6000,
    autoplay: {
      delay: 1,
      reverseDirection: true,
    },
    loop: true,
    loopedSlides: 4,
    slidesPerView: "auto",
    allowTouchMove: false,
    disableOnInteraction: true,
  });
}

ClientHomePage();



function movingCursorFunctionality() {
  let cursor = document.querySelector("#cursorDiv");

  window.addEventListener("mousemove", (dets) => {
    gsap.to(cursor, {
      left: `${dets.clientX}+20px`,
      top: `${dets.clientY}`,
      duration: 0.5,
      ease: "power4.out",
    });
  });
}

movingCursorFunctionality();

function swiperJsFun() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    speed:1000,
     navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      400: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
    },
  });
}

swiperJsFun();






function logoAndSidebarAnimation() {
  let tildeLogo = document.querySelector(".tilde-logo");
  let menuItem = document.querySelectorAll("#sidebar .menu #nav-icon4 span");
  let sidebar = document.querySelector("#sidebar");
  let headerSectionImg = document.querySelector("#header-section img");

  menuItem.forEach((item) => {


    gsap.to(item, {
      backgroundColor: "white",
      duration: 1,
      scrollTrigger: {
        scroller: "body",
        trigger: '.about-section',
        scrub: true,
        start: "top 0%",
        end:"bottom 0%",
      },
    });



    gsap.to(sidebar, {
      backgroundColor: "#885220",
      color:"white",
      duration: 1,
      scrollTrigger: {
        scroller: "body",
        trigger: '.about-section',
        scrub: true,
        start: "top -15%",
        end:"bottom 0%",
      },
    });





    gsap.to(tildeLogo, {
      opacity:1,
      duration: 1,
      scrollTrigger: {
        scroller: "body",
        trigger: '.about-section',
        scrub: true,
        start: "top 20%",
        end:"bottom 0%",
      },
    });



    gsap.to(headerSectionImg, {
      opacity:0,
      duration: 1,
      scrollTrigger: {
        scroller: "body",
        trigger: '.about-section',
        scrub: true,
        start: "top 20%",
        end:"bottom 0%",
      },
    });







  });


}
logoAndSidebarAnimation();





$(window).resize(function(){location.reload();});