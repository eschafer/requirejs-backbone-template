(function() {
	"use strict";

	module.exports = function(grunt) {

		// Project configuration.
		grunt.initConfig({
			clean: {
				init: [
					"app/vendor/backbone/!(backbone.js)",
					"app/vendor/jquery/!(jquery.js)",
					"app/vendor/json2/!(json2.js)",
					"app/vendor/modernizr/!(modernizr.js)",
					"app/vendor/requirejs/!(require.js)",
					"app/vendor/underscore/!(underscore.js)",
					"app/vendor/**/.*"
				],
			},

			copy: {
				init: {
					files: [
						{
							"app/vendor/modernizr/modernizr.js": "app/vendor/modernizr/index.js"
						}
					]
				}
			},

			jshint: {
				files: [
					"app/scripts/**/*.js"
				],
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
			},

			requirejs: {
				build: {
					options: {
						appDir: "app",
						baseUrl: "scripts",
						dir: "dist",
						name: "main",
						mainConfigFile: "app/scripts/main.js",
						optimize: "uglify2",
						optimizeCss: "standard",
						generateSourceMaps: true,
						preserveLicenseComments: false
					}
				}
			}
		});

		grunt.loadNpmTasks("grunt-contrib-clean");
		grunt.loadNpmTasks("grunt-contrib-copy");
		grunt.loadNpmTasks("grunt-contrib-jshint");
		grunt.loadNpmTasks("grunt-contrib-requirejs");

		// Default task(s).
		grunt.registerTask("default", [
			"jshint"
		]);

		grunt.registerTask("init", [
			"copy",
			"clean"
		]);

		grunt.registerTask("build", [
			"jshint",
			"requirejs"
		]);
	};
}());
