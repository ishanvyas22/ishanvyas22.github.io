console.log('admin js loaded');

define(['jquery', 'methods'],    // Define script dependencies in array
function ($, methods) {
    // change heading on click
    $('#changeHeading').click(function (e) {
        methods.changeHeading('Yes! You changed me.');
    });
});
