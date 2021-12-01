$(document).ready(function() {

    $(".btn").click(function() {
        $('.list').toggle();
    });

});

$(window).resize(function() {
    if ($(document).innerWidth() < 600) {
        $('.list').css('display', 'none')
    } else {
        $('.list').css('display', 'flex');
    }
});