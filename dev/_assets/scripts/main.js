/*global requirejs:false */
'use strict';

requirejs.config({
    baseUrl: '/scripts',
    paths: {
        jquery: '../../bower_components/jquery/dist/jquery.min',
        vgrid: 'vgrid-plugin',
        'jquery-easing': '../../bower_components/jquery-easing/jquery.easing.min'
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

require(['tree-menu'], function(){
	var html = buildList(JSON.menu, false);
	if (document.getElementById('JSON')) {
	    document.getElementById("JSON").innerHTML = html;
	}
});

// vgrid
// -------------------

require(['jquery', 'jquery-easing', 'vgrid'], function($){
	$("#grid-content").vgrid({
		easing: "easeOutQuint",
		time: 400,
		delay: 20,
		wait: 500
	});
	// layout vgrid again after all images have loaded
    $(window).load(function(){
        $("#grid-content").vgrid();
    });
});