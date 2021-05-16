var a = document.querySelector('input')
//undefined
var l = document.getElementById('last-name')
//undefined
l.getBoundingClientRect()
// DOMRect {x: -20, y: 272.8000183105469, width: 440.4250183105469, height: 32, top: 272.8000183105469, …}
//bottom: 304.8000183105469
//height: 32
//left: -20
//right: 420.4250183105469
//top: 272.8000183105469
//width: 440.4250183105469
//x: -20
//y: 272.8000183105469
//__proto__: DOMRect
// querySelector không sử dụng được .getBoundingClientRect()
