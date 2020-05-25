$(document).ready(function () {
  $(".sidenav").sidenav();
  $(".slider").slider({
    fullWidth: true,
  });
});

//Get the button:
mybutton = document.getElementById("gotopbtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};


function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
