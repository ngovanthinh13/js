  var listItem = document.querySelectorAll('.icon-list')
  var rotated = true;
  // var listLink = document.querySelectorAll('.link')
  Array.from(listItem).forEach(v => v.addEventListener('click', function(){
    // $(this)[0].nextElementSibling.style.display = "block"
    if(rotated){
      $(this)[0].nextElementSibling.style.display = "block"
      
      $(this)[0].style.transform = 'rotate(90deg)';
      rotated = !rotated;
    } else {
      $(this)[0].nextElementSibling.style.display = "none"
      $(this)[0].style.transform = 'rotate(0deg)';
      rotated = !rotated;
    }
