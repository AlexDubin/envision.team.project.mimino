const button = document.getElementById('scrollToTopBtn');

const displayButton = () => {
  window.addEventListener('scroll', () => {  
    if (window.scrollY > 100) {
      button.classList.add('show-btn');
    } else {
      button.classList.add('remove-btn');
    }
  });
};

const scrollToTop = () => {
  button.addEventListener("click", () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    }); 
  });
};

displayButton();
scrollToTop();