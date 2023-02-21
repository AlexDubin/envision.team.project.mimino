var textAnimate = document.getElementById("first-text");

setTimeout( function() {
    textAnimate.classList.add("innerAnimated");
}), 300;

window.setTimeout

function reveal() {
  var reveals = document.querySelectorAll(".text--turning, .fadeInLeft, .fadeInRight");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("innerAnimated");
    }
  }
}

window.addEventListener("scroll", reveal);

// splitting chars init

Splitting();
