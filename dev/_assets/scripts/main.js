/*global requirejs:false */
'use strict';

requirejs.config({
    baseUrl: '/scripts',
    paths: {
        jquery: '../../bower_components/jquery/dist/jquery',
        vgrid: 'http://blog.xlune.com/2009/09/vgrid/js/jquery.vgrid.min',
        'jquery-easing': 'http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min'
    }
});

// Responsive navigation
// ----------
require(['jquery', 'navigation'], function($){
	$('.toggle-menu').navigation();
});
// Secondary navigation
// ----------

require(['jquery', 'secondaryNavigation'], function($){
	$('.toggle--sub-menu').secondaryNavigation();
});

// Masonary grid test
// -------------
// require('../../../bower_components/masonry/dist/masonry.pkgd.min.js');
// $('.grid--masonry').masonry({
//   itemSelector: '.grid-item',
//   columnWidth: 200
// });

// vgrid
// -------------------

require(['jquery', 'jquery-easing', 'vgrid'], function($){
	$("#grid-content").vgrid({
		easing: "easeOutQuint",
		time: 400,
		delay: 20,
		wait: 500
	});
});