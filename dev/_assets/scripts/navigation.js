/*global define:false */
define(['jquery'], function ($) {
    'use strict';
     $.fn.navigation = function (options) {
	    $('.toggle-menu, .main--nav__close').on('click', function(e){
	        e.preventDefault();
	        $('.main--nav__inner').toggleClass('menu-hide', 1000);
	    	$('body').toggleClass('menu-open');
	    });
	};
});


