module.exports = {
    compile: {
        options: {
            baseUrl: 'dev/_assets/scripts',
            paths: {
                requireLib: '../../../bower_components/requirejs/require',
                jquery: '../../../bower_components/jquery/dist/jquery',
                vgrid: 'http://blog.xlune.com/2009/09/vgrid/js/jquery.vgrid.min',
                'jquery-easing': 'http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min'
            },
            name: 'main',
            out: 'web/scripts/main.js',
            include: ['requireLib'],
        }
    }
};