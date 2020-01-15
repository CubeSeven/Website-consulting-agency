$(function(){
    $('.brands').slick({
        // dots: true,
        infinite: true,
        autoplay:true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            //   dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 550,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 4,
              centerMode: true,
              variableWidth: true
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
    
})

$(document).ready(function(){
    $("button").click(function(){
      $("body").toggleClass("open");
    });
});

function myFunction(x) {
    x.classList.toggle("fa-times");
  }

