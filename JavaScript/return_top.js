const mybutton = document.getElementById("top-button");

function scrollFunction() {
  if (document.documentElement.scrollTop < 95%) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}

window.addEventListener("scroll", scrollFunction);

mybutton.addEventListener("click", topFunction);