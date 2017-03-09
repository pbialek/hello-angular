module.exports = function(config) {
    config.set({
        preprocessors: {
            'app/**/*.html': ['ng-html2js']
        },
        basePath : '../',
        files : [
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'app/**/*.js',
            'test/unit/**/*.js',
            'app/**/*.html'
        ],
        autoWatch: true,
        frameworks: ['jasmine'],
        browsers : ['Chrome'],
        plugins : [
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-ng-html2js-preprocessor'
        ],
        ngHtml2JsPreprocessor: {
            stripPrefix: 'app/'
        }
})};
