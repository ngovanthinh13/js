$('input').focus(function() {
    var field_focus = $(this);
    var value_footer_window = $(window).height() - 120
    var field_focus_height= $(this).outerHeight(true)
    if((field_focus.offset().top + field_focus_height)>value_footer_window){
        $('html, body').animate({
            scrollTop: field_focus.offset().top - 90
        }, 500);
    }
});
$('textarea').focus(function(){
    var field_focus = $(this);
    var field_focus_height= field_focus.outerHeight(true)
    if((field_focus.offset().top+field_focus_height)>$(window).height()-120){
        $('html, body').animate({
            scrollTop: field_focus.offset().top
        }, 500);
    }
});

//if you need height of div excluding margin/padding/border
$('#someDiv').height();

//if you need height of div with padding but without border + margin
$('#someDiv').innerHeight();

// if you need height of div including padding and border
$('#someDiv').outerHeight();

//and at last for including border + margin + padding, can use
$('#someDiv').outerHeight(true);
