module.exports = function(grunt) {

// Project configuration.
grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  sass: {
      dist: {
        files: {
          'styles/main.css': 'styles/main.scss'
        }
      }
    },
  jade: {
    compile: {
     	   files: [{
            src: "**/*.jade",
            dest: "html/",
            ext: ".html",
            expand: true,  
            cwd: "jade/"
         }]
    }
  },
  watch: {
    css: {
      files: 'styles/*.scss',
      tasks: ['sass'],
      },
      jade:{
      	files:['jade/*.jade'],
      	tasks:['jade']
      },
      options: {
        livereload: true,
      
    }
  }

});
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-jade');
// Default task(s).
grunt.registerTask('default', ['sass','jade','watch']);
};

