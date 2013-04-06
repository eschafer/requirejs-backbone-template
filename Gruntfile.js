(function() {
	"use strict";

	module.exports = function(grunt) {

		// Project configuration.
		grunt.initConfig({
			jshint: {
				files: "app/scripts/**/*.js",
				options: {

					// Enforcing options.
					bitwise: true,
					camelcase: true,
					curly: true,
					eqeqeq: true,
					forin: true,
					immed: true,
					//indent
					latedef: true,
					newcap: true,
					noarg: true,
					noempty: true,
					nonew: true,
					// plusplus
					quotmark: "double",
					undef: true,
					unused: true,
					strict: true,
					trailing: true,
					// maxparams
					// maxdepth
					// maxstatements
					// maxcomplexity
					// maxlen

					// Environments.
					devel: true,

					globals: {
						require: true,
						define: true
					}
				}
			}
		});

		grunt.loadNpmTasks("grunt-contrib-jshint");

		// Default task(s).
		grunt.registerTask("default", [
			"jshint"
		]);
	};
}());
