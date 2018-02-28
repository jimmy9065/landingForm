module.exports = function (grunt) {
var pkg = grunt.file.readJSON('package.json');
  grunt.initConfig({
    pkg: pkg,
    concat: {
      options: {
        separator: ';',
      },
      pop: {
        src: ['src/pop/config.js', 'src/pop/form.js', 'src/pop/exec.js'],
        dest: 'dist/bundle.js',
      },
      landing:{
        src: ['src/landing/config.js', 'src/landing/form.js', 'src/landing/exec.js'],
        dest: 'dist/bundle.js',
      }
    },
    removelogging:{
      build: {
        src:'dist/bundle.js',
        dest:'dist/bundle.nolog.js'
      },
      options:{
        namespace:['console']
      }
    },
    uglify:{
      options:{
        banner: '//compressed version of sp_setup.js'
      },
      build:{
        src: 'dist/bundle.nolog.js',
        dest: 'dist/bundle.min.js',
      },
    },
    anonymous: {
      pop: {
        options: {
          params : [['window','w']]
        },
        files: {
          'dist/pop.js':'dist/bundle.min.js',
        }
      },
      landing: {
        options: {},
        files: {
          'dist/langding.js':'dist/bundle.min.js',
        }
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify-es');
  grunt.loadNpmTasks('grunt-remove-logging');
  grunt.loadNpmTasks('grunt-anonymous');

  grunt.registerTask('pop', ['concat:pop', 'removelogging', 'uglify', 'anonymous:pop']);
  grunt.registerTask('landing', ['concat:landingForm', 'removelogging', 'uglify', 'anonymous:landing']);
  grunt.registerTask('default', ['concat:pop', 'removelogging', 'uglify', 'anonymous:pop', 'concat:landingForm', 'removelogging', 'uglify', 'anonymous:landing']);
};
