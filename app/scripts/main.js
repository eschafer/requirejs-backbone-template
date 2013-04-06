require.config({
	paths: {
		"jquery": "../vendor/jquery/jquery"
	}
});

require(["jquery"], function($) {
	"use strict";
	console.log($);
});
