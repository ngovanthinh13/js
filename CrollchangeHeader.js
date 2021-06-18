var _top = $(window).scrollTop();
  window.onscroll = function (e) {  
    var _cur_top = $(window).scrollTop();
    _top = _cur_top;
    console.log(_top)
    var backroundColor = _top ? 'white': 'none';
    $('.header').css('background',backroundColor);
  } 
