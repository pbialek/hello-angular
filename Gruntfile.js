module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['node_modules/angular/angular.min.js', 'app/**/*.js'],
                dest: 'dist/js/<%= pkg.name %>.js'
            }
        },
        copy: {
            main: {
                src: 'app/css/main.css',
                dest: 'dist/css/main.css',
            },
        },
        targethtml: {
            dist: {
                files: {
                    'dist/index.html': 'app/index.html'
                }
            }
        },
        karma: {
            unit: {
                configFile: 'conf/karma.conf.js',
                singleRun: true
            }
        },
        protractor: {
            e2e: {
                options: {
                    configFile: 'conf/protractor.conf.js'
                }
            }
        },
        eslint: {
            target: ['app/**/*.js', 'test/**/*.js']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-targethtml');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-protractor-runner');
    grunt.loadNpmTasks('grunt-eslint');

    grunt.registerTask('test', ['eslint', 'karma', 'protractor']);
    grunt.registerTask('dist', ['test', 'concat',
        'targethtml', 'copy']);
};
