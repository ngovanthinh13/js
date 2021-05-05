setTimeout(function(){
//   thực hiện cái quần đùi gì đó
}, saubaolauthixuathien);

// khi muốn clear
var action = setTimeout(function(){
//   thực hiện cái quần dài gì đó
},saubaolauthixuathien);

clearTimeout(action);

// chú ý: hàm setTimeout chỉ thực hiện đúng 1 lần duy nhất

// khi muốn thực hiện hàm nào đó lặp đi lặp lại ta sử dụng hàm setInterval
setInterval(function(){
//   thực hiện cái áo ngắn tay gì đó
}, saubaonhieugiaylaplai)

// khi muốn dừng nó
var interval_obj = setInterval(function(){
//   thực hiện cái áo dài tay gì đó
}, saubaolau)

function(){
//   thực hiện cái áo sơ mi gì đó
  clearInterval(interval_obj)
}
