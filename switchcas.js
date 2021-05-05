var color = prompt("nhap gi do")
switch(color){
  case 'red' :   {
     document.write("mau ban vua nhap la do");
     break;
  }
  case "xanh", "vang":{
    document.write("ban nhap mau" + color + "roi");
    break;
  }
  default:
    document.write("m nhap cm j the");
}
// khi thiếu break ở cuối mỗi case, nó sẽ nhận tiếp case bên dưới nó
