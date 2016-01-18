module.exports = function (grunt){
    
    var files = require('./files').files;

    // Configuración del Proyecto
    grunt.initConfig({
        builddir: 'dist',
        pkg: grunt.file.readJSON('package.json'),
        meta: {
            banner: '/**\n'+
                ' * <%= pkg.description %>\n' +
                ' * @version v<%= pkg.version %>\n' +
                ' * @link <%= pkg.homepage %>\n' +
                ' */'
        },

        clean: [ '<%= builddir %>' ],

        concat: {
            options: {
                banner: '(function(window, angular, undefined){\n\n\n',
                footer: '})(window, window.angular);'
            },
            build: {
                src: files.src,
                dest: '<%= builddir %>/<%= pkg.name %>.js'
            }
        },

        less: {
            production: {
                src: "src/less/galeria-imagenes.less",
                dest: "<%= builddir %>/<%= pkg.name %>.css"
            }
        },

        watch: {
            javascript: {
                files: ['src/*.js'],
                tasks: ['default']
            },
            less: {
                files: 'src/less/*.less',
                tasks: 'less'
            }
        }
    });

    grunt.registerTask('default', 'Perform a normal build', ['concat']);

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
};