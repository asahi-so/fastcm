var swiper = new Swiper('.swiper-container', {
    loop: true,
    speed: 3000,
    cssWidthAndHeight: true,
    spaceBetween: 3,
    autoHeight: false,
    observer: true,
    observeParents: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
});
var swiper5 = new Swiper('.swiper-container5', {
  //loop: true,
  speed: 500,
  //cssWidthAndHeight: true,
  //spaceBetween:20,  
  //slidesPerView: "auto",
  breakpoints: { 
    //当宽度大于等于320
    320: {
      slidesPerView: 1.4,
      spaceBetween: 10
    },
   //当宽度大于等于480
    480: { 
      slidesPerView: 1.4,
      spaceBetween: 20
    },
    //当宽度大于等于640
    640: {
      slidesPerView: 1.4,
      spaceBetween: 30
    }
  },
  on:{
    slideChangeTransitionEnd: function(){
      swiper5.swiperIndex = this.activeIndex
      $(".swiper5 .swiper-slide-prev").css("opacity", "0.4");
      $(".swiper5 .swiper-slide-next").css("opacity", "0.4");
      $(".swiper5 .swiper-slide-active").css("opacity", "");
      //swiper5.init();
      //alert('改变了，activeIndex为'+this.activeIndex);
    },
  },
  //slidesPerView: 1.4
  //spaceBetween: 3,
  //autoHeight: false,
  //observer: true,
  //observeParents: true,
  
});
$(".swiper5 .swiper-slide").css("opacity", "0.4");
$(".swiper5 .swiper-slide-active").css("opacity", "");

var options = {
    useEasing: true, 
    useGrouping: true,
    separator: ',',
    decimal: '.', 
    prefix: '',
    suffix: ''   
   };
    
swiper.on('slideChangeTransitionEnd', function () {
    if (swiper.activeIndex == 2) {
      var count = new CountUp("shuji", 0, 288, 0, 2, options);
      count.start();
    }
});
$('.swiper-container').hover(function () {
      swiper.autoplay.stop();
  },function() {
      swiper.autoplay.start();
});


