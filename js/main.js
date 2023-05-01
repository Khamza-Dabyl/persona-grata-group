$(function(){
  $('.top-slider').slick({
    dots: true,
    // infinite: false,
    // speed: 300,
    nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="images/next.svg" alt="next arrow"></button>',
    prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="images/prev.svg" alt="prev arrow"></button>',
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {

        }
      },
      {
        breakpoint: 640,
        settings: {
          arrows: false
        }
      }
    ]
  });
});

$('.results__slider').slick({
  
  infinite: true,
  speed: 500,
  nextArrow: '<button type="button" class="slick-arrow result-next"><img src="images/res-next.svg" alt="next arrow"></button>',
  prevArrow: '<button type="button" class="slick-arrow result-prev"><img src="images/res-prev.svg" alt="prev arrow"></button>',
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 300,
      settings: {
       
      }
    },
    {
      breakpoint: 500,
      settings: {
        arrows: true,
        dots: true,
      }
    }
  ]
});

$('.reviews__slider').slick({
  dots: true,
  infinite: true,
  speed: 500,
  nextArrow: '<button type="button" class="slick-arrow reviews-next"><img src="images/res-next.svg" alt="next arrow"></button>',
  prevArrow: '<button type="button" class="slick-arrow reviews-prev"><img src="images/res-prev.svg" alt="prev arrow"></button>',
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        dots: true,
      }
    }
  ]
});

// Open popup window
document.getElementById("open-modal-btn").addEventListener("click", function(){
  document.getElementById("my-modal").classList.add("open")
});

document.getElementById("open-modal-btn-small").addEventListener("click", function(){
  document.getElementById("my-modal").classList.add("open")
});

// Close popup window
document.getElementById("close-my-modal-btn").addEventListener("click", function(){
  document.getElementById("my-modal").classList.remove("open")
});

// Close popup window by Esc button
window.addEventListener('keydown',(e) => {
  if (e.key === 'Escape') {
    document.getElementById("my-modal").classList.remove("open")
  }
});

// Close popup window by pressing outside of modal box
document.querySelector("#my-modal .modal__box").addEventListener("click", event => {
  event._isClickWithInModal = true;
});

document.getElementById("my-modal").addEventListener("click", event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove("open");
});