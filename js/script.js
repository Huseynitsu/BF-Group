$(document).ready(function () {
  let $menuTrigger = $(".js-menuToggle");
  let $topNav = $(".js-topPushNav");
  let $openLevel = $(".js-openLevel");
  let $closeLevel = $(".js-closeLevel");
  let $closeLevelTop = $(".js-closeLevelTop");
  let $navLevel = $(".js-pushNavLevel");

  function openPushNav() {
    $topNav.addClass("isOpen");
    $("body").addClass("pushNavIsOpen");
  }

  function closePushNav() {
    $topNav.removeClass("isOpen");
    $openLevel.siblings().removeClass("isOpen");
    $("body").removeClass("pushNavIsOpen");
  }

  $menuTrigger.on("click touchstart", function (e) {
    e.preventDefault();
    if ($topNav.hasClass("isOpen")) {
      closePushNav();
    } else {
      openPushNav();
    }
  });

  $openLevel.on("click touchstart", function () {
    $(this).next($navLevel).addClass("isOpen");
  });

  $closeLevel.on("click touchstart", function () {
    $(this).closest($navLevel).removeClass("isOpen");
  });

  $closeLevelTop.on("click touchstart", function () {
    closePushNav();
  });

  $(".screen").click(function () {
    closePushNav();
  });

  var swiper = new Swiper("#hero_slider", {
    loop: 1,
    spaceBetween: 30,
    centeredSlides: !0,
    autoplay: { delay: 5e3, disableOnInteraction: !1 },
    navigation: { nextEl: "#hero_next", prevEl: "#hero_prev" },
    on: {
      transitionEnd: function () {
        checkClasses();
      },
    },
  });
  function checkClasses() {
    $(".swiper-slide .hero_content .line-text").removeClass("animate-line"),
      $(".swiper-slide.swiper-slide-active").each(function () {
        $(this).find(".line-text").addClass("animate-line");
      });
  }
  checkClasses();
});
