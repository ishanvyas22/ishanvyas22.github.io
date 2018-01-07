console.log('requirejs entry point');

requirejs.config({
    baseUrl: '/js',
    paths: {
        // js libraries
        jquery: 'lib/jquery.min',
        // any custom script
        methods: 'app/methods'
    }
});
