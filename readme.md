# RequireJS Backbone Template

## Prerequisites

- [npm] - Node.js package manager

## Setup

- `npm install` - Installs [Bower] globally, and [Grunt] locally.
- `bower install` - Downloads files for [RequireJS], [Backbone.js], etc., and places them in app/vendor/.  See component.json for all packages that are loaded.
- `grunt init` - Removes unnecessary files from app/vendor/.

## Build for production

- `grunt build` - Uses [r.js] to concatenate and minify files, and create source maps.

[npm]: http://nodejs.org/download/
[Bower]: http://twitter.github.io/bower/
[Grunt]: http://gruntjs.com/
[jQuery]: http://jquery.com/
[Modernizr]: http://modernizr.com/
[RequireJS]: http://requirejs.org/
[Backbone.js]: http://backbonejs.org/
[r.js]: http://requirejs.org/docs/optimization.html
