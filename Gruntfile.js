module.exports = function(grunt) {

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
    	pkg: grunt.file.readJSON('package.json'),

    	htmlhint: {
    		build: {
    		    'tag-pair': true,
    		    'tagname-lowercase': true,
    		    'attr-lowercase': true,
    		    'attr-value-double-quote': true,
    		    'doctype-first': true,
    		    'spec-char-escape': true,
    		    'src-not-empty': true,
    		    'id-unique': true,
    		    'img-alt-require': true
            },
            src: ['*.html']
    	},

    	sass: {
    		build: {
    			files: {
                    'css/glyphicons.css': 'glyphicons/stylesheets/glyphicons.scss',
                    'css/main.css': 'scss/base.scss'
    			}
    		},
    		options: {
    			style: 'compressed'
    		}
    	},

    	jshint: {
    		build: {
    			options: {
    				'strict': true,
    				'eqeqeq': true,
    				'quotmark': 'single',
    				'globals': {
    					'angular': true
    				}
    			},
    			files: {
    				src: ['js/*.js']
    			}
    		}
    	},
        
        watch: {
        	html: {
        		files: ['*.html'],
        		tasks: ['htmlhint']
        	},

        	css: {
        		files: ['glyphicons/stylesheets/glyphicons.scss', 'scss/**/*.scss'],
        		tasks: ['sass']
        	},

        	js: {
        		files: ['js/*.js'],
        		tasks: ['jshint']
        	}
        }
    });

    grunt.registerTask('default', []);
};