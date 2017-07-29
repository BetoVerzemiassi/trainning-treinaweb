module.exports = function(grunt) {

	//config
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),
		config: {
			dev: 'assets/',
			prod: 'public/'
		},

		//Sass
		sass: {
			options: {
				sourceMap: true,
				outputStyle: 'compressed'
			},
	        dist: {
	            files: {
	                '<%= config.prod %>css/style.min.css': '<%= config.dev %>scss/main.scss'
	            }
	        }
	    },

	    //JShint responsável pela validação do código
	    jshint: {
	    	options: {
	    		reporter: require('jshint-stylish'),
	    		'curly': true,
	    		'newcap': true,
	    		'eqeqeq': true,
	    		'undef': true,
	    		'devel': true,
	    		'debug': true,
	    		'globals': {
	    			'$': true,
	    			'jQuery': true,
	    			'document': true
	    		}
	    	},
	    	all: ['<%= config.dev %>js/main.js'],
	    	prod: {
	    		options: {
		    		'devel': false,
		    		'debug': false,
		    	},
		    	files: {
		    		src: ['<%= config.dev %>js/main.js']
		    	}
	    	}
	    },

	    //Uglify responsavel por minificar o arquivo JavaScript
	    uglify:{
	    	my_files: {
	    		options: {
	    			sourceMap: true,
	    			sourceMapName: '<%= config.prod %>js/main.min.map',
	    			banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        					'<%= grunt.template.today("yyyy-mm-dd") %> */'
	    		},
	    		files: {
	    			'<%= config.prod %>js/main.min.js':
	    			[
	    				'components/jquery/dist/jquery.js',
	    				'components/masonry/dist/masonry.pkgd.js',
	    				'<%= config.dev %>js/main.js'
	    			]
	    		}
	    	}
	    },

	    //Jasmine
	    jasmine: {
	    	hello: {
	    		src: '<%= config.dev %>js/hello.js',
	    		options: {
	    			specs: 'spec/*Spec.js'
	    		}
	    	}
	    },

	    //Compress
	    compress: {
	    	main: {
	    		options: {
	    			archive: 'zip/project.zip'
	    		},
	    		files: [{
	    			src: ['index.html', 'public'],
	    			dest: '.'
	    		}]
	    	}
	    },

	    //Imagemin
	    imagemin: {
	    	my_images: {
	    		options: {
	    			progressive: true
	    		},
	    		files: [{
	    			expand: true,
	    			cwd: '<%= config.dev %>img/',
	    			src: ['*.{png,jpg,gif}'],
	    			dest: '<%= config.prod %>img'
	    		}]
	    	}
	    },

	    //Sprite
	    sprite:{
	    	all:{
	    		src: '<%= config.dev %>img/sprite/*.png',
	    		dest: '<%= config.prod %>img/sprite.png',
	    		destCss: '<%= config.dev %>scss/_sprite.scss',
	    		cssFormat: 'scss',
	    		cssTemplate: '<%= config.dev %>scss/icons.mustache'
	    	}
	    },


	    // Watch
	    watch: {
	    	options: {
	    		livereload: true
	    	},
	    	html: {
	    		files: 'index.html'
	    	},
	    	sass: {
	    		files: '<%= config.dev %>scss/*.scss',
	    		tasks: 'css'
	    	},
	    	sprite: {
	    		files: '<%= config.dev %>img/sprite/*.png',
	    		tasks: 'sprite'
	    	},
	    	js: {
	    		files: '<%= config.dev %>js/main.js',
	    		tasks: 'js'
	    	},
	    	js_test: {
	    		files: '<%= config.dev %>js/hello.js',
	    		tasks: 'test'
	    	}
	    },

	    //Connect
	    connect: {
	    	server: {
	    		options: {
	    			port: 9000,
	    			base: '.',
	    			hostname: 'localhost',
	    			livereload: true
	    		}
	    	}
	    }

	});

	//Load plugins
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-spritesmith');
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-contrib-compress');


	//Tasks
	grunt.registerTask('css', 		['sass']);
	grunt.registerTask('live', 		['connect', 'watch']);
	grunt.registerTask('js', 		['jshint:all', 'uglify']);
	grunt.registerTask('images', 	['sprite', 'imagemin']);
	grunt.registerTask('test',		['jasmine']);
	grunt.registerTask('build', 	['sass', 'images', 'jshint:prod', 'uglify', 'jasmine', 'zip']);
	grunt.registerTask('zip',		['compress']);




};