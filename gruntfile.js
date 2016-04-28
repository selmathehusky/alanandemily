module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    jade: {
      compile: {
        options: {
          pretty: true,
        },
        files: {
          'build/index.html': 'src/views/index.jade'
        }
      }
    },

    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: ['css/**'],
            dest: 'build/'
          },
          {
            expand: true,
            cwd: 'src/',
            src: ['js/*'],
            dest: 'build/'
          },
          {
            expand: true,
            cwd: 'src/',
            src: ['img/*'],
            dest: 'build/'
          },
          {
            expand: true,
            src: ['CNAME'],
            dest: 'build/'
          }
        ],
      },
    }
  });
  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task.
  grunt.registerTask('build', ['jade', 'copy:main']);
};