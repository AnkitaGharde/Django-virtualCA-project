! function(a) {
    "use strict";
    var e = a(window);
    if (e.on("load", function() {
            a("#preloader").fadeOut("1000", function() {
                a(this).remove()
            })
        }), e.on("scroll", function() {
            e.scrollTop() > 0 ? a(".header-area").addClass("sticky") : a(".header-area").removeClass("sticky")
        }), a.fn.owlCarousel) {
        var t = a(".welcome_slides");
        t.owlCarousel({
            items: 1,
            loop: !0,
            autoplay: !0,
            smartSpeed: 1500,
            nav: !0,
            navText: ["<i class='ti-angle-left'</i>", "<i class='ti-angle-right'</i>"],
            dots: !0,
            animateIn: "fadeIn",
            animateOut: "fadeOut"
        }), t.on("translate.owl.carousel", function() {
            a("[data-animation]").each(function() {
                var e = a(this).data("animation");
                a(this).removeClass("animated " + e).css("opacity", "0")
            })
        }), a("[data-delay]").each(function() {
            var e = a(this).data("delay");
            a(this).css("animation-delay", e)
        }), a("[data-duration]").each(function() {
            var e = a(this).data("duration");
            a(this).css("animation-duration", e)
        }), t.on("translated.owl.carousel", function() {
            t.find(".owl-item.active").find("[data-animation]").each(function() {
                var e = a(this).data("animation");
                a(this).addClass("animated " + e).css("opacity", "1")
            })
        }), a(".client_slides").owlCarousel({
            responsive: {
                0: {
                    items: 1
                },
                991: {
                    items: 2
                },
                767: {
                    items: 1
                }
            },
            loop: !0,
            autoplay: !0,
            smartSpeed: 700,
            dots: !0
        }), a(".client_slides .owl-dot").each(function() {
            var e = a(this).index() + 1;
            e < 10 ? a(this).html("0").append(e) : a(this).html(e)
        })
    }
    a.fn.magnificPopup && (a("#videobtn").magnificPopup({
        type: "iframe"
    }), a(".gallery_img").magnificPopup({
        type: "image",
        gallery: {
            enabled: !0
        },
        removalDelay: 300,
        mainClass: "mfp-fade",
        preloader: !0
    })), a.fn.imagesLoaded && a(".dream-portfolio").imagesLoaded(function() {
        a(".portfolio-menu").on("click", "button", function() {
            var t = a(this).attr("data-filter");
            e.isotope({
                filter: t
            })
        });
        var e = a(".dream-portfolio").isotope({
            itemSelector: ".single_gallery_item",
            percentPosition: !0,
            masonry: {
                columnWidth: ".single_gallery_item"
            }
        })
    }), a(".portfolio-menu button.btn").on("click", function() {
        a(".portfolio-menu button.btn").removeClass("active"), a(this).addClass("active")
    }), a.fn.scrollUp && a.scrollUp({
        scrollSpeed: 1500,
        scrollText: "Scroll Top"
    }), a.fn.onePageNav && a("#nav").onePageNav({
        currentClass: "active",
        scrollSpeed: 1500,
        easing: "easeOutQuad"
    }), a.fn.counterUp && a(".counter").counterUp({
        delay: 10,
        time: 2e3
    }), e.width() > 767 && (new WOW).init(), a.fn.jarallax && a(".jarallax").jarallax({
        speed: .2
    }), a("a[href='#']").on("click", function(a) {
        a.preventDefault()
    }), a("dd").filter(":nth-child(n+3)").hide(), a("dl").on("click", "dt", function() {
        a(this).next().slideDown(500).siblings("dd").slideUp(500)
    }), a.fn.classyNav && a("#dreamNav").classyNav({
        theme: "dark"
    }), a.fn.niceScroll && a(".timelineBody").niceScroll(), a(".simple_timer").syotimer({
        year: 2019,
        month: 11,
        day: 9,
        hour: 20,
        minute: 30
    })
}(jQuery);