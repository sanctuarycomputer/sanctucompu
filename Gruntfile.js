'use strict';
module.exports = function(grunt) {

  // ----------------------------------------------------------
  // WARNING, BRAVE DEVELOPER
  // ----------------------------------------------------------
  // Webhook allows you to use local grunt tasks and files.
  // However, these tasks are ONLY RUN LOCALLY and not when
  // your live site needs to be rebuilt. This means you should
  // only use grunt for pre-processing tasks like building
  // Sass, less or coffescript files, not for reading things
  // from your templates and making dynamic changes during
  // the build process. Doing so will cause your live site
  // not to regenerate.
  //
  // You have been warned!

  grunt.initConfig({
    browserify: {
      dist: {
        options: {
          transform: [['babelify', { presets: ['es2015', 'react'] }]]
        },
        files: { './static/javascript/main.js': ['./javascript/index.js'] }
      }
    },
    watch: {
      scripts: {
        files: ['./javascript/**/*.js'],
        tasks: ['browserify', 'build']
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['watch']);

  // NEVER REMOVE THESE LINES, OR ELSE YOUR PROJECT MAY NOT WORK
  require('./options/generatorOptions.js')(grunt);
  grunt.loadTasks('tasks');
};
