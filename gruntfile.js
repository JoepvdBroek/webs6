module.exports = function(grunt) {
	grunt.initConfig({
		browserify: {
			js: {
				src: 'app/app.js',
				dest: 'dist/app.js',
				options: {
				 external: ['angular'],
				 debug: true,
				 browserifyOptions: { debug: true }
				}
			}
		},
		copy: {
			all: {
				// This copies all the html and css into the dist/ folder
				expand: true,
				cwd: 'app/',
				src: ['**/*.html', '**/*.css', '**/*.png'],
				dest: 'dist/',
			}
		},
		sass: {
			dist: {
				options: {
					style: 'expanded'
				},
				files: {
					'dist/css/app.css': 'app/css/app.scss',
					'dist/css/tiles1.css':'app/css/tiles1.scss',
					'dist/css/tiles2.css':'app/css/tiles2.scss'
				}
			}
		},
		watch: {
			js: {
				files: "app/**/*.js",
				tasks: "browserify"
			},
			html: {
				files: 'app/**/*.html',
				tasks: 'copy'
			},
			css: {
				files: 'app/**/*.scss',
				tasks: 'sass'
			}
		}
	});

	// Load the npm installed tasks
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');

	// The default tasks to run when you type: grunt
	grunt.registerTask('default', ['browserify', 'copy', 'sass', 'watch']);
};