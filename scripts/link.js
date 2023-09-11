window.addEventListener('DOMContentLoaded', function() {
  var links = document.querySelectorAll('a');

  for (var i = 0; i < links.length; i++) {
    var url;
    var href = links[i].getAttribute('href');

    if (href && href.trim().length > 0) {
      if (!href.startsWith('http') && !href.startsWith('//')) {
        if (href.startsWith('#')) {
          continue;
        }

        var origin = window.location.origin;
        var isButton = links[i].classList.contains('button'); // Check if the link has the "button" class

        if (isButton) {
          // Ignore links with the "button" class
          continue;
        }

        if (href.startsWith('/')) {
          url = new URL(origin + href);
        } else {
          url = new URL(href, origin);
        }

        var span = document.createElement('span');
        span.classList.add('site-url');

        var hostnameText = '';

        if (url.hash) {
          hostnameText += url.hash;
        }

        links[i].textContent += hostnameText;
      } else {
        url = new URL(href);

        var span = document.createElement('span');
        span.classList.add('site-url');
        span.textContent = ' (' + url.hostname + ')' + (url.hash ? url.hash : '');

        links[i].appendChild(span);
      }
    }
  }
});
