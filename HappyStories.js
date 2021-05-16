function myFunction() {
    document.getElementById("Demo").classList.toggle("show");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("Demo");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

/*function myFunction() {
     var x = document.getElementById("Demo");
     if (x.className.indexOf("img") == -1) { 
       x.className += " img";
     } 
     else {
       x.className = x.className.replace("img", "");
     }
}*/
 

