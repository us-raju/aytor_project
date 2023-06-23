// preloader start
$(window).on("load", function () {
  $(".preloader").fadeOut();
});
// preloader end

// search bar section js start
var searchBtn = document.getElementById("m-glass");
var searchBox = document.querySelector(".search-box");
var closeBtn = document.querySelector(".close_btn");

searchBtn.addEventListener(
  "click",
  function () {
    searchBox.classList.add("active");
  },
  1000
);
closeBtn.addEventListener(
  "click",
  function () {
    searchBox.classList.remove("active");
  },
  1000
);

// search bar section js end

// scroll button js start
$(window).on("scroll", function () {
  let scrollsize = $(window).scrollTop();
  if (scrollsize > 700) {
    $("#backtoTop").fadeIn();
  } else {
    $("#backtoTop").fadeOut();
  }
});

$("#backtoTop").on("click", function () {
  $("html, body").animate({
    scrollTop: 0,
  });
});
// scroll button js end

$(function () {
  // fixed menu js start
  $(window).on("scroll", function () {
    let scrollsize = $(window).scrollTop();
    if (scrollsize > 100) {
      $("#nav").addClass("active");
    } else {
      $("#nav").removeClass("active");
    }
  });
  // fixed menu js end

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
    fade: true,
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

  $(".xzoom, .xzoom-gallery").xzoom({ tint: "#333", Xoffset: 15 });

  // product details section end

  // Releted_Products section start
  $(".Releted_Products_slider").slick({
    slidesToShow: 4,
    slideToScroll: 1,
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

  // cart plus minus button start
  $(".plus_minus_btn").on("click", function (e) {
    let targetElement = $(e.target).data("behavior");
    console.log(targetElement);
    if (targetElement === "increment") {
      let cartValue = $(this).children("input").val();
      cartValue++;
      $(this).children("input").val(cartValue);
    } else if (targetElement === "decrement") {
      let cartValue = $(this).children("input").val();
      cartValue--;
      $(this)
        .children("input")
        .val(cartValue < 1 ? "1" : cartValue);
    }
  });
  // cart plus minus button end

  // popup hide & show js start
  $(window).on("load", function () {
    $("#popup").addClass("active");
  });
  $(".popup_close").on("click", function () {
    $("#popup").removeClass("active");
  });
  // popup hide & show js end

  // password toggle js start 
  let button =('.password_toggle')
  let input =('.password_filed')
  let icon = ('.password_eye')
  $('.button').on("click", function () {
    if (input.type == 'password') {
      input.type = 'text';
      icon.removeClass("fa-eye-slash");
      icon.addClass("fa-eye");
    } else {
       input.type = "password";
       icon.addClass("fa-eye-slash");
       icon.removeClass("fa-eye");
    }
  });
  // password toggle js end 
});

// aos active start
AOS.init({});
// aos active end

// use product tooltip
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
// use product tooltip

// venobox js start 
new VenoBox();
// venobox js end 

// play icon video js start
new VenoBox({
  selector: ".play-icon",
});
// play icon video js end 

