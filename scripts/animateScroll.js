window.addEventListener('scroll', function() {
  var elements = document.querySelectorAll('.animate-on-scroll');
  
  elements.forEach(function(element) {
    var elementTop = element.getBoundingClientRect().top;
    var elementBottom = elementTop + element.offsetHeight;
    var viewportTop = window.pageYOffset || document.documentElement.scrollTop;
    var viewportBottom = viewportTop + window.innerHeight;

    if (elementBottom > viewportTop && elementTop < viewportBottom) {
      element.classList.add('animate');
    }
  });
});
