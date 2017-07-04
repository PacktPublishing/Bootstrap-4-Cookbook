'use strict';
// Load Grunt
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Tasks
        sass: { // Begin Sass Plugin
            dist: {
                options: {
                    sourcemap: 'inline'
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
        watch: {
            files: ['../main*.scss'],
            tasks: ['sass']
        },
    });
    // Load Grunt plugins
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Register Grunt tasks
    grunt.registerTask('default', ['watch']);

};