function myFunction() {
   document.querySelector(".dropdown-content").classList.toggle("display");
}

window.onmouseenter = function() {
  if (target.matches("button")) {
    var dropdown_content = document.querySelector(".dropdown-content");
      if (dropdown_content.classList.contains('display')) {
        dropdown_content.classList.remove('display');
      }
  }
}
	