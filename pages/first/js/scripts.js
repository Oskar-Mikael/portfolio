function goback()  {
    document.getElementById("demo").style.color="black"
    document.getElementById("demo").innerHTML="Noooo!"
  }
  function heart() {
    document.getElementById("demo").style.color="red";
    document.getElementById("demo").innerHTML="That's better"
  }
$(document).ready(function() {
  $('#navbarbutton').on('click', function() {
$('#navbar').hide();
});
});
