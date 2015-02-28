var SIDEMENU = function ( wind ) {
    "use strict";
    var window_Doc = wind.document,
        navScroll,
        diveInDoc = function (wind) {
            return wind.trim ? wind.trim() : wind.replace(/^\s+|\s+$/g, "");
        },
        getClass = function (wind, window_Doc) {
            return -1 !== (" " + wind.className + " ").indexOf(" " + window_Doc + " ");
        },
        getClassSize = function (wind, window_Doc) {
            getClass(wind, window_Doc) || (wind.className = "" === wind.className ? window_Doc : wind.className + " " + window_Doc);
        },
        checkViewPort = function (wind, window_Doc) {
            wind.className = diveInDoc((" " + wind.className + " ").replace(" " + window_Doc + " ", " "));
        },
        checkValue = function (wind, window_Doc) {
            if (wind) {
                do {
                    if (wind.id === window_Doc) {
                        return !0;
                    }
                    if (9 === wind.nodeType) {
                        break;
                    }
                }
                while (wind = wind.parentNode) {
                    return !1;
                }
            }
        },
        element = window_Doc.documentElement,
        modernGroup = ( wind.Modernizr.prefixed("transform"), wind.Modernizr.prefixed("transition") ),// just coming back if it is transition or transform
        venderNames = function () {
            var vederObject = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    msTransition: "MSTransitionEnd",
                    transition: "transitionend"
                };
            return vederObject.hasOwnProperty(modernGroup) ? vederObject[modernGroup] : !1;
        };
        

    navScroll = (function () {
        var navObject = {},
            isOpen = !1,
            innerWrap = window_Doc.getElementById("inner-wrap"),
            m = !1,
            addClassName = "js-nav",
            recall = function ( trans_event ) {
                trans_event && trans_event.target === innerWrap && window_Doc.removeEventListener(venderNames, recall, !1);
                m = !1;
            };

        navObject.closeNav = function () {
                if (m) {
                    var c = venderNames && modernGroup ? parseFloat(wind.getComputedStyle(innerWrap, "")[modernGroup + "Duration"]) : 0;
                    c > 0 ? window_Doc.addEventListener(venderNames, recall, !1) : recall(null);
                }
                checkViewPort(element, addClassName);
                m = !1;
            };

        navObject.openNav = function () {
                m || ( getClassSize(element, addClassName), m = !0 );
            };

        navObject.toggleNav = function ( mouse_toggle ) {
                m && getClass( element, addClassName ) ? navObject.closeNav() : navObject.openNav();
                mouse_toggle && mouse_toggle.preventDefault();
            };
        navObject.init = function () {
            if (!isOpen) {
                isOpen = !0;

                window_Doc.getElementById( "nav-open-btn" ).addEventListener( "click", navObject.toggleNav, !1 );
                window_Doc.getElementById( "nav-close-btn" ).addEventListener( "click", navObject.toggleNav, !1 );
                window_Doc.addEventListener("click", function ( mouse_toggle ) {
                    m && !checkValue( mouse_toggle.target, "nav" ) && ( mouse_toggle.preventDefault(), navObject.closeNav() );
                }, !0);
                getClassSize( element, "js-ready" );
            }
        }

        return navObject;
    })()

    return wind.addEventListener && wind.addEventListener( "DOMContentLoaded", navScroll.init, !1 );
}

SIDEMENU( window );









