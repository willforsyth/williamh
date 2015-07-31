/*jshint unused:false*/
// var $ = global.window.$ = window.jQuery = require('../../../bower_components/jquery/dist/jquery.min');
//     encode = require('../../../bower_components/js-md5/js/md5');

// Show Me The Code
// ----------
require('../../../bower_components/jquery/dist/jquery');
require('./components/testPlugin');
$('body').logWidth();

// Responsive navigation
// ----------
require('../../../bower_components/jquery/dist/jquery');
require('./components/navigation');
$('.toggle-menu').navigation();

// Secondary navigation
// ----------
require('../../../bower_components/jquery/dist/jquery');
require('./components/secondaryNavigation');
$('.toggle--sub-menu').secondaryNavigation();

// Masonary grid test
// -------------
// require('../../../bower_components/masonry/dist/masonry.pkgd.min.js');
// $('.grid--masonry').masonry({
//   itemSelector: '.grid-item',
//   columnWidth: 200
// });

// vgrid
// -------------------
require('../../../bower_components/jquery/dist/jquery');
require('http://blog.xlune.com/2009/09/vgrid/js/jquery.vgrid.min.js');
$("#grid-content").vgrid({
	easing: "easeOutQuint",
	time: 400,
	delay: 20,
	wait: 500
});
