// preloader start
$(window).on("load", function () {
  $(".preloader").fadeOut();
});
// preloader end

$(function () {
  //  Banner section js start
  $(".banner_item").slick({
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    dotsClass: "dots_style",
  });
  //  Banner section js end

  //  New Arrivals Products section js start
  $(".nap_slider").slick({
    slidesToShow: 4,
    prevArrow: '<i class="nap_slider_arrow fa-solid fa-angle-left"></i>',
    nextArrow: '<i class="nap_slider_arrow fa-solid fa-angle-right"></i>',
  });
  //  New Arrivals Products section js end

  // The final coundown js start
  $(".deals_timer").countdown("2030/10/10", function (event) {
    var $this = $(this).html(
      event.strftime(
        "" +
          '<div class="deals_timer_param"><span>%D</span><span>Days</span></div>' +
          '<span class="deals_timer_clone">:</span>' +
          '<div class="deals_timer_param"><span>%H</span><span>Hours</span></div>' +
          '<span class="deals_timer_clone">:</span>' +
          '<div class="deals_timer_param"><span>%M</span><span>Minute</span></div>' +
          '<span class="deals_timer_clone">:</span>' +
          '<div class="deals_timer_param"><span>%S</span><span>Sec</span></div>'
      )
    );
  });
  // The final coundown js end

  // deals section js start
  $(".deals_slider").slick({
    prevArrow: false,
    nextArrow: false,
    slidesToShow: 2,
    dots: true,
    dotsClass: "dots_style",
    autoplay: true,
    autoplaySpeed: 2000,
  });
  // deals section js end

  // latest_news section start
  $(".latest_news_slider").slick({
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    dotsClass: "dots_style",
  });
  // latest_news section end

  // counter up js start
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
  // counter up js end

  // leadership section start
  $(".team_slider").slick({
    slidesToShow: 4,
    autoplay: true,
    prevArrow: '<i class="team_slider_arrows fa-solid fa-caret-left"></i>',
    nextArrow: '<i class="team_slider_arrows fa-solid fa-caret-right"></i>',
  });
  // leadership section end

  // Avater section start
  $(".avater_slider").slick({
    arrows: false,
    autoplay: true,
    asNavFor: ".avater_slider_nav",
  });
  $(".avater_slider_nav").slick({
    arrows: false,
    slidesToShow: 5,
    autoplay: true,
    asNavFor: ".avater_slider",
    slideToScroll: 1,
    focusOnSelect: true,
  });
  // Avater section end

  // Aytor instagram section start
  $(".aytor_insta_slider").slick({
    slidesToShow: 5,
    arrows: false,
    dots: true,
    dotsClass: "dots_style",
  });
  // Aytor instagram section end

  // product details section start
  $(".product_thumb_slider").slick({
    slidesToShow: 1,
    // slideToScroll:1,
    arrows: false,
    asNavFor: ".product_thumb_slider_nav",
    autoplay: true,
    fade:true,
  });
  $(".product_thumb_slider_nav").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: ".product_thumb_slider",
    centerMode: true,
    focusOnSelect: true,
    centerPadding: "0px",

    prevArrow: '<i class="product_nav_arrows fa-solid fa-angle-left"></i>',
    nextArrow: '<i class="product_nav_arrows fa-solid fa-angle-right"></i>',
  });

  // $(".xzoom").xzoom({
  //   lens: true,
  //   position: "right",
  // });

  // product details section end

// Releted_Products section start 
  $(".Releted_Products_slider").slick({
    slidesToShow: 4,
    slideToScroll:1,
    prevArrow: '<i class="RP_arrows fa-solid fa-angle-left"></i>',
    nextArrow: '<i class="RP_arrows fa-solid fa-angle-right"></i>',
  });
// Releted_Products section end
  
// country select js start
  $("#country_selector").countrySelect({
    // defaultCountry: "Ban",
  });
// country select js end

// blog silder js start 
  $(".blog_slider_item").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<i class="blog_slider_arrows fa-solid fa-angle-left"></i>',
    nextArrow: '<i class="blog_slider_arrows fa-solid fa-angle-right"></i>',
  });
// blog silder js end 

});
AOS.init({
  // initClassName: "aos-init",
  // animatedClassName: "aos-animate",
});

// use product tooltip
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
// use product tooltip

// cart plus_minus js
// let minus_btn = document.getElementById("cart_minus_btn");
// let plus_btn = document.getElementById("cart_plus_btn");
// let cart_value = document.getElementById("cart_value");

// function minus_btn(btn_id) {
//   if (cart_value.value < 2) {
//     document.getElementById(btn_id).setAttribute("disabled", true);
//   } else {
//     cart_value.value--;
//   }
// }
// function plus_btn() {
//   cart_value.value++;
//   if (cart_value.value > 1) {
//     minus_btn.removeAttribute("disabled");
//   }
// }

// cart plus_minus js
