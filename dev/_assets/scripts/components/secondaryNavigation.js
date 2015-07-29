/*global $ */
$.fn.secondaryNavigation = function (options) {
    'use strict';
    var stickyNav = $(".secondary--nav");
    var mns = "secondary--nav-scrolled";
    var hdr = $('header').height();

    $(window).scroll(function() {
        if( $(this).scrollTop() > hdr ) {
          stickyNav.addClass(mns);
        } else {
          stickyNav.removeClass(mns);
        }
    });

    $('.toggle--sub-menu').on('click', function(e){
        e.preventDefault();
        $('.secondary--nav__ul').toggleClass('show-menu');
    })
};
