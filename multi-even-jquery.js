var vi_tri_cuoi = 0;
$('input').on('focus keypress', function(){
    var field_focus = $(this);
    var value_footer_window = $(window).height() - 120
    var value_middle_window = $(window).height()/2
    // var gia_tri_cuon =$(window).scrollTop()
    var field_focus_height= $(this).outerHeight(true)
    var value_footer_document = $(document).height()
    console.log(vi_tri_cuoi + " vi tri cuoi")
    if((field_focus.offset().top + field_focus_height) > ((value_footer_document/(value_footer_document/value_footer_window)))){
        console.log("gia tri trung gian 0:")
        if((field_focus.offset().top - vi_tri_cuoi) > (value_middle_window/2)){
            $('html, body').animate({
                scrollTop: field_focus.offset().top - value_middle_window
            }, 500);
            vi_tri_cuoi = field_focus.offset().top + field_focus_height;
        }
    } else{
        if(Math.abs(field_focus.offset().top - vi_tri_cuoi) > (value_middle_window)){
            $('html, body').animate({
                scrollTop: field_focus.offset().top - value_middle_window
            }, 500);
            vi_tri_cuoi = field_focus.offset().top + field_focus_height;
            console.log("vong else")
        }
    }
});
