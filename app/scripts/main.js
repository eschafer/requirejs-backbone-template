require.config({
	paths: {
		"jquery": "vendor/jquery/jquery",
		"underscore": "vendor/underscore/underscore",
		"backbone": "vendor/backbone/backbone"
	},
	shim: {
		"backbone": {

			// These script dependencies should be loaded before loading backbone.js.
			deps: [
				"underscore",
				"jquery"
			],

			// Once loaded, use the global `Backbone` as the module value.
			exports: "Backbone"
		},
		"underscore": {
			exports: "_"
		}
	}
});

require(["views/app"], function(AppView) {
	new AppView;
});
