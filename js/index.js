$(document).ready(function() {

    $('input').click(function() {
        // console.log('message inputs')
        var gato = true
        $(this).addClass('clasein');
        $(this).removeClass('idin');
        if (gato !== true) {
            console.log('es verdad');
        }
    });

    $('.icon-menu').click(function() {
        console.log('input')
            // $("#idna").addClass('clasein');
        $('.idnav').animate({
            width: "toggle"
        });

    });
    $('.idgali').click(function(e) {
        //  e.preventDefault();
        $(this).children('ul').slideToggle();
    })



});