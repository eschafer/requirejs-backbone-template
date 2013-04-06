(function() {
	"use strict";

	define(["backbone"], function(Backbone) {
		var App = Backbone.View.extend({
			initialize: function() {
				console.log("Woot!");
			}
		});

		return App;
	});
}());
