console.log('methods js');

define(['jquery'],
function ($) {
    var methods = {};

    // method to change text
    methods.changeHeading = function(newText) {
        $('#heading').text(newText);
    };

    // method to show alert box
    methods.alertMe = function(message) {
        alert(message);
    };

    return methods;
});
