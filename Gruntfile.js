module.exports = function(grunt) {
  // Configuration

  grunt.initConfig({
    //pass in options to plugins
  });

  // Load plugins
  //grunt.loadNpmTasks('')

  //Register Tasks
  grunt.registerTask('run', function() {
    console.log("I'm running Grunt!");
  });

  grunt.registerTask('sleep', function () {
    console.log("I'm sleeping!");
  });

}