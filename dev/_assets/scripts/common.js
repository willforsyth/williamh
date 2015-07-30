/*jshint unused:false*/
// var $ = global.window.$ = window.jQuery = require('../../../bower_components/jquery/dist/jquery');
//     encode = require('../../../bower_components/js-md5/js/md5');

// Show Me The Code
// ----------
require('./components/testPlugin');
$('body').logWidth();

// Responsive navigation
// ----------
require('./components/navigation');
$('.toggle-menu').navigation();

// Secondary navigation
// ----------
require('./components/secondaryNavigation');
$('.toggle--sub-menu').secondaryNavigation();

// Masonary grid
// -------------
$('.grid--masonry').masonry({
  itemSelector: '.grid-item',
  columnWidth: 200
});
