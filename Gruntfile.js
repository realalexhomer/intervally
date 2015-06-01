module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.initConfig({
    wiredep: {
      task: {
        src: ['public/index.html']
      }
    },

    express: {
      dev: {
        options: {
          script: 'app.js',
          livereload: true,
          args: []
        }
      }
    }, 

    handlebars: {
      compile: {
        options: {
          namespace: "JST",
          partialsUseNamespace: "true"
        },
        files: {
          "public/templates/templates.js": ["public/templates/layouts/*.hbs", "public/templates/partials/*.hbs"]

        }
      }
    },

    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded',
          sourcemap: 'inline'
        },
        files: [{
          expand: true,
          cwd: 'public/styles',
          src: ['*.scss'],
          dest: 'public/styles',
          ext: '.css'
        }]
      }
  },

    watch: {
      files: ['public/bower_components/*', 'public/templates/layouts/*.hbs', 'public/templates/partials/*.hbs', 'public/styles/*.scss'],
      tasks: ['wiredep', 'handlebars', 'sass'] 
    }
    

  });

  grunt.registerTask('default', ['wiredep']);
  grunt.registerTask('serve', ['sass', 'express', 'watch'])


  // loggin
  grunt.event.on('watch', function(action, filepath, target) {
    grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
  });

};

