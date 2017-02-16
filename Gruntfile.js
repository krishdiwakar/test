module.exports = function(grunt) {

  grunt.initConfig({
	"jsbeautifier" : {
		files : ["js/*.js", "*.html"],
		options : {
		}
	},
	"less": {
		development: {
			options: {
				
			},
			files: {
				'css/new.css': 'less/style.less'
			}
		},
		production: {
			options: {
				compress: true
			},
			files: {
				'css/new.min.css': 'less/style.less'
			}
		}
	},
    watch: {
      files: ['<%= jsbeautifier.files %>', 'less/*.less'],
      tasks: ['jsbeautifier', 'less']
    }
  });

  grunt.loadNpmTasks('grunt-jsbeautifier');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', ['jsbeautifier', 'less:development']);
  grunt.registerTask('production', ['less:production']);

};