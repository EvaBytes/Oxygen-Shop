const mybutton = document.getElementById("top-button");

function scrollFunction() {
  if (document.documentElement.scrollTop >= 300) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}

mybutton.addEventListener('click', () => {
  setTimeout(() => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  }, 200);
});

window.addEventListener("scroll", scrollFunction);

mybutton.addEventListener("click", topFunction);