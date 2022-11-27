/* Mobile Navigation */
const header = document.querySelector(".header");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");

menuBtn.onclick = function () {
   header.classList.add("show");
   menuBtn.classList.add("hide");
};
closeBtn.onclick = function () {
   header.classList.remove("show");
   menuBtn.classList.remove("hide");
};
window.onscroll = function () {
   this.scrollY
      ? header.classList.add("sticky")
      : header.classList.remove("sticky");
};

/* slider testimony */
const swiper = new Swiper(".mySwiper", {
   slidesPerView: 3,
   fadeEffect: true,
   grabCursor: true,
   slidesPerGroup: 1,
   loop: true,
   loopFillGroupWithBlank: true,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   breakpoints: {
      0: {
         slidesPerView: 1,
         spaceBetween: 20,
      },
      525: {
         slidesPerView: 2,
         spaceBetween: 40,
      },
      950: {
         slidesPerView: 3,
         spaceBetween: 30,
      },
   },
});

/* accordion FAQ show */
const labels = document.querySelectorAll(".label");
labels.forEach((labelBox) => {
   labelBox.addEventListener("click", (event) => {
      labelBox.classList.contains("active");
      const tabAnswer = labelBox.nextElementSibling;
      if (labelBox.classList.toggle("active")) {
         tabAnswer.style.maxHeight = tabAnswer.scrollHeight + "px";
      } else {
         tabAnswer.style.maxHeight = "0";
      }

      const currentlyLabelBox = document.querySelector(".label.active");
      if (currentlyLabelBox && currentlyLabelBox !== labelBox) {
         currentlyLabelBox.classList.toggle("active");
         currentlyLabelBox.nextElementSibling.style.maxHeight = "0";
      }

      event.preventDefault();
   });
});
