module.exports = function (grunt) {
  // Configuration
  grunt.initConfig({
    sass: {
      // Task
      dist: {
        // Target
        options: {
          style: "expanded",
          loadPath: ['node_modules/gorillass/core']
        },
        files: {
          // Dictionary of files
          "assets/css/main.css": "assets/sass/main.scss", // 'destination': 'source'
        },
      },
    },
    concat: {
      js: {
        src: ["assets/js/*.js"],
        dest: "build/script.js",
      },
      css: {
        src: ["assets/css/*.css"],
        dest: "build/main.css",
      },
    },
  });

  // Load plugins
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-concat");

  //Registering Tasks

  grunt.registerTask("concat-js", ["concat:js"]);
  grunt.registerTask("concat-css", ["concat:css"]);
  grunt.registerTask('default', ["sass"]);

};