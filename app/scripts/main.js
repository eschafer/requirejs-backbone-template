require.config({
	paths: {
		"jquery": "../vendor/jquery/jquery",
		"backbone": "../vendor/backbone/backbone",
		"underscore": "../vendor/underscore/underscore",
		"json2": "../vendor/json2/json2",
		"h5bp-plugins": "../vendor/h5bp/js/plugins"
	},
	shim: {
		"backbone": {
			deps: [
				"underscore",
				"jquery"
			],
			exports: "Backbone"
		},
		"underscore": {
			exports: "_"
		},
		"json2": {
			exports: "JSON"
		},
		"h5bp-plugins": {
			exports: "console"
		}
	}
});

require(["jquery", "backbone", "underscore", "json2", "h5bp-plugins"], function(jq, bb, us, j2, hp) {
	"use strict";

	console.log(jq);
	console.log(bb);
	console.log(us);
	console.log(j2);
	console.log(hp);
});
