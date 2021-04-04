$('.content').click(function () {
    $(this).children('.answer').fadeToggle();
    $(this).children('.answer').css("display", "block");
    /*For Chevro Animation*/
    $(this).children('.Heading').children('.Show').toggleClass('rot180');

    /*For Bootstrap + - toggle*/
    if ($(this).children('.Heading').children('.Show').hasClass('fa-plus')) {
        $(this).children('.Heading').children('.Show').removeClass('fa-plus');
        $(this).children('.Heading').children('.Show').addClass('fa-minus');
    }
    else {
        $(this).children('.Heading').children('.Show').removeClass('fa-minus');
        $(this).children('.Heading').children('.Show').addClass('fa-plus');
    }
    /*For Closing other Option if only one is to be shown*/
    $(this).siblings('.content').children('.answer').fadeOut();
    $(this).siblings('.content').children('.Heading').children('.Show').removeClass('fa-minus');
    $(this).siblings('.content').children('.Heading').children('.Show').addClass('fa-plus');
    $(this).siblings('.content').children('.Heading').children('.Show').removeClass('rot180');
});