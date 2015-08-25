// Karma configuration
// Generated on Mon Aug 24 2015 18:56:33 GMT-0400 (EDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],


    // list of files / patterns to load in the browser
    files: [
        // since karma will autoload all sibling node modules starting with 'karma-'. 
        // This means if karma is installed in the node_modules directory, all other modules starting with 'karma-' will be autoloadedd for us.
        // And mocha is feched as the 'karma-mocha' node module. 
        // So nod need to manually load it ourselves. 
        // all test related libraries
        'node_modules/chai/chai.js',
        'vendor/angular/angular.js',
        'vendor/angular-ui-router/release/angular-ui-router.js',
        'vendor/angular-mocks/angular-mocks.js',
        // our source code to test
        'src/**/*.js',
        // the tests themselves
        'test/**/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  })
}
