# gulp-apimocker  [![Build Status](https://travis-ci.org/kent-wu/gulp-apimocker.svg?branch=master)](https://api.travis-ci.org/kent-wu/gulp-apimocker.svg)
[![NPM](https://nodei.co/npm/gulp-apimocker.svg?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/gulp-apimocker/)

> gulp plugin to run apimocker server to mock service responses.

## Getting Started
Gulp requires `~3.8.11`

Please check out this [Getting Started](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) to install gulp if you haven't used gulp before.
Then you may install this plugin with this command:

```shell
npm install gulp-apimocker --save-dev
```

## Add "apimocker" task

### Overview
Once the plugin has been installed, add a 'apimocker' task to your project's gulpfile.js.

```js
var mocker = require('gulp-apimocker');

gulp.task('apimocker', function(){
  return mocker.start({
    config: '/path/to/config/file',
    mockDirectory: '/path/to/mock/files'
  });
});
```

### Options

#### options.config
Set the path to your apimocker config.json file.  Path can be absolute, or relative to the gulpfile.js.

#### options.mockDirectory
Set the path to your mock files.  Path can be absolute, or relative to the gulpfile.js.

## License
This projected is licensed under the terms of the MIT license.

## Versions
#### 0.0.1
first version

