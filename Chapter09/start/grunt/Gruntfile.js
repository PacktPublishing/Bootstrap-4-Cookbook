'use strict';
// Load Grunt
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Tasks
        sass: { // Begin Sass Plugin
            dist: {
                options: {
                    sourcemap: 'inline',
//                  style: 'compressed' // this is the newly aded line                    
                },
                files: [{
                    expand: true,
                    cwd: '../',
                    src: ['main*.scss'],
                    dest: '../app/css',
                    ext: '.css'
                }]
            }
        },
        copy: { // Run 'grunt copy' to copy the js files
            main: {
                files: [{
                    cwd: '../bower_components/bootstrap/dist/js/',
                    expand: true,
                    src: ['**'],
                    dest: '../app/js/'
                },
				{
                    cwd: '../bower_components/jquery/dist/',
                    expand: true,
                    src: ['jquery.js'],
                    dest: '../app/js/'
                },
				{
                    cwd: '../bower_components/tether/dist/js/',
                    expand: true,
                    src: ['**'],
                    dest: '../app/js/'
                }]
            }
        },
        // Remove CSS that is not used
/*
        uncss: {
            dist: {
                files: [
                    { src: '../app/www/*.html', dest: '../app/www/css/main.css'}
                ]
            },
            options: {
                compress: true
            }
        },
        stripCssComments: {
            dist: {
                files: {
                    '../app/www/css/main.css': '../app/www/css/main.css'
                }
            }
        },     
*/   
        watch: {
            grunt: { files: ['Gruntfile.js'] },
            files: ['../main*.scss'],
            tasks: ['sass']
        },
    });
    // Load Grunt plugins
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-strip-css-comments');
    // Register Grunt tasks
    grunt.registerTask('default', ['watch']);

};