var el = document.getElementById('div-03');

var r1 = el.closest("#div-02");
// returns the element with the id=div-02

var r2 = el.closest("div div");
// returns the closest ancestor which is a div in div, here it is the div-03 itself

var r3 = el.closest("article > div");
// returns the closest ancestor which is a div and has a parent article, here it is the div-01

var r4 = el.closest(":not(div)");
// returns the closest ancestor which is not a div, here it is the outmost article
