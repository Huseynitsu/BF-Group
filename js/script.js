document.addEventListener("DOMContentLoaded", () => {
  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const odometerEl = entry.target.querySelector(".odometer");
        const value = odometerEl.getAttribute("data-value");
        odometerEl.innerHTML = value;
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, {
    threshold: 0.5,
  });

  document
    .querySelectorAll(".adv_card")
    .forEach((card) => observer.observe(card));
});

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

  $(".filter-menu-active button").on("click", function () {
    $(".filter-menu-active button").removeClass("active");
    $(this).addClass("active");

    // İlgili içerik filtreleme
    const filter = $(this).data("filter");
    $(".filter-item").removeClass("active");
    $(filter).addClass("active");
  });

  $("#brands .owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    responsiveClass: true,
    dots: false,
    nav: true,
    responsive: {
      0: {
        items: 2,
      },
      1000: {
        items: 4,
      },
      1200: {
        items: 6,
      },
    },
  });
});
