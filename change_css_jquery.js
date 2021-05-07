$(document).on('click', function(){
    $('.footer').css('visibility','')
})
$(document).on('focus keypress','input', function(){    
    // var field_focus = $(this);
    $('.footer').css('visibility','hidden')
});
$(document).on('focus keypress','textarea', function(){
    var field_focus = $(this);
    var field_focus_height= field_focus.outerHeight(true)
    if((field_focus.offset().top+field_focus_height)>$(window).height()-120){
        $('html, body').animate({
            scrollTop: field_focus.offset().top
        }, 500);
    }
});
