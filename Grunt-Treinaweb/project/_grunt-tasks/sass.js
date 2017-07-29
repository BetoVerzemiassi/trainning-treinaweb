module.exports = function(grunt) {

	var CONFIG = grunt.file.readJSON('./_grunt-tasks/_config.json');
	var sassConfig = {};
	sassConfig.options = {
		sourceMap: true,
		outputStyle: 'compressed'
	};

	sassConfig.dist = {};
	sassConfig.dist.files = {};
	sassConfig.dist.files[CONFIG.sass.minfile] = CONFIG.sass.mainfile;

	grunt.config('sass', sassConfig);

	grunt.registerTask('css', ['sass']);
	grunt.loadNpmTasks('grunt-sass');

};


