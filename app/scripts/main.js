require.config({
	paths: {
		"backbone": "vendor/backbone/backbone",
		"jquery": "vendor/jquery/jquery",
		"json2": "vendor/json2/json2",
		"underscore": "vendor/underscore/underscore"
	},
	shim: {
		"backbone": {

			// These script dependencies should be loaded before loading backbone.js.
			deps: [
				"underscore",
				"jquery",
				"json2"
			],

			// Once loaded, use the global `Backbone` as the module value.
			exports: "Backbone"
		},
		"json2": {
			exports: "JSON"
		},
		"underscore": {
			exports: "_"
		}
	}
});

require(["views/app"], function(AppView) {
	new AppView;
});
