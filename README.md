# laravel-elixir-uglify

## Installation
----

```sh
$ npm install elixir-uglify
```

## Usage
----

Require the extension and call it using mix.uglify().  It will output a new file with the extension '.min.js' as well as source maps.

```javascript
var elixir = require('laravel-elixir');
require('elixir-uglify');

elixir(function(mix)
{
	mix.scriptsIn("public/js")
		.uglify(
			"public/js/all.js", 		// File to uglify
			"public/js/"				// Output path
		);	
});
```

Run gulp.

```sh
$ gulp
```