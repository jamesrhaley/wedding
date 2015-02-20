! function(a, b) {
    var c = function(a) {
            return a.trim ? a.trim() : a.replace(/^\s+|\s+$/g, "")
        },
        d = function(a, b) {
            return -1 !== (" " + a.className + " ").indexOf(" " + b + " ")
        },
        e = function(a, b) {
            d(a, b) || (a.className = "" === a.className ? b : a.className + " " + b)
        },
        f = function(a, b) {
            a.className = c((" " + a.className + " ").replace(" " + b + " ", " "))
        },
        g = function(a, b) {
            if (a)
                do {
                    if (a.id === b) return !0;
                    if (9 === a.nodeType) break
                } while (a = a.parentNode);
            return !1
        },
        h = b.documentElement,
        i = (a.Modernizr.prefixed("transform"), a.Modernizr.prefixed("transition")),
        j = function() {
            var a = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                msTransition: "MSTransitionEnd",
                transition: "transitionend"
            };
            return a.hasOwnProperty(i) ? a[i] : !1
        }();
    a.App = function() {
        var c = !1,
            k = {},
            l = b.getElementById("inner-wrap"),
            m = !1,
            n = "js-nav";

        return k.init = function() {
            if (!c) {
                c = !0;
                var o = function(a) {
                    a && a.target === l && b.removeEventListener(j, o, !1), m = !1
                };
                k.closeNav = function() {
                    if (m) {
                        var c = j && i ? parseFloat(a.getComputedStyle(l, "")[i + "Duration"]) : 0;
                        c > 0 ? b.addEventListener(j, o, !1) : o(null)
                    }
                    f(h, n), m = !1
                }, k.openNav = function() {
                    m || (e(h, n), m = !0)
                }, k.toggleNav = function(a) {
                    m && d(h, n) ? k.closeNav() : k.openNav(), a && a.preventDefault()
                }, b.getElementById("nav-open-btn").addEventListener("click", k.toggleNav, !1), b.getElementById("nav-close-btn").addEventListener("click", k.toggleNav, !1), b.addEventListener("click", function(a) {
                    m && !g(a.target, "nav") && (a.preventDefault(), k.closeNav())
                }, !0), e(h, "js-ready")
            }
        }, k
    }()
, a.addEventListener && a.addEventListener("DOMContentLoaded", a.App.init, !1)
}(window, window.document)
, $(document).ready(function() {
    $("input[type=radio]").parents("li").addClass("radio")
    
    , $(".back-to-top").click(function() {
        return $("html, body").animate({
            scrollTop: $("body").offset().top
        }, 500), !1
    })
}), $(window).bind("load", function() {
    $(".page-intro").width($(".page-title__l1").width())
});

$(".js-nav-toggle").click(function() {
    return $(".nav--primary").slideToggle().toggleClass("nav--open"), !1
}), 
$(window).resize(function() {
    $(".page-intro").width($(".page-title__l1").width())
});

// $('ul.mainNav li a').on('click', function() {
//     $('ul.mainNav li a').parent().removeClass('active');
//     $(this).parent().addClass('active');
//     var id = $(this).attr('id');
//     var wrapper = $('#wrapper-' + id);

//     $('.body').removeClass('active');
//     $(wrapper).addClass('active');
// });

