<div id="div-01">Here is div-01</div>
<div id="div-02">Here is div-02</div>
<li>This is a list item</li>
<li>This is another list item</li>
<div id="div-03">Here is div-03</div>

<script>
  let el = document.getElementById('div-03').previousElementSibling;
  document.write('<p>Siblings of div-03</p><ol>');
  while (el) {
    document.write('<li>' + el.nodeName + '</li>');
    el = el.previousElementSibling;
  }
  document.write('</ol>');
</script>


//Siblings of div-03

  // 1. LI
  // 2. LI
  // 3. DIV
  // 4. DIV
