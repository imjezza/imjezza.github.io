$(document).ready(function() {
    $('#nav-list li a').mouseenter(function() {
        $('#nav-list li a').fadeTo('fast', 1);
    });
    $('#nav-list.li').mouseleave(function() {
        $('#nav-list.li').fadeTo('fast', 0.5);
    });
});

