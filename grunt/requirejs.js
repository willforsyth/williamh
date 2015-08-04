module.exports = {
    compile: {
        options: {
            baseUrl: 'dev/_assets/scripts',
            paths: {
                requireLib: '../../../bower_components/requirejs/require',
                jquery: '../../../bower_components/jquery/dist/jquery.min',
                vgrid: 'vgrid-plugin',
                'jquery-easing': '../../../bower_components/jquery-easing/jquery.easing.min'
            },
            name: 'main',
            out: 'web/scripts/main.js',
            include: ['requireLib'],
        }
    }
};