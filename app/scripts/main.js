require.config({
	paths: {
		"jquery": "../vendor/jquery/jquery",
		"backbone": "../vendor/backbone/backbone",
		"underscore": "../vendor/underscore/underscore",
		"json2": "../vendor/json2/json2"
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
		}
	}
});

require(["jquery", "backbone", "underscore", "json2"], function(jq, bb, us, j2) {
	"use strict";
	console.log(jq);
	console.log(bb);
	console.log(us);
	console.log(j2);
});
