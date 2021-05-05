$('input').focus(function() {
  	var ele = $(this);
    $('html, body').animate({
        scrollTop: ele.offset().top - 180
    }, 800);
});

 $('input').focus(function() {
    var field_focus = $(this);
    var field_focus_height= $(this).outerHeight()
    if((field_focus.offset().top + field_focus_height)>250){
        $('html, body').animate({
            scrollTop: field_focus.offset().top - field_focus_height
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
