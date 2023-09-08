window.addEventListener('DOMContentLoaded', function() {
  var links = document.querySelectorAll('a');

  for (var i = 0; i < links.length; i++) {
    var url;
    var href = links[i].getAttribute('href'); // Get the href attribute value

    if (href && href.trim().length > 0) { // Check if href value exists and is not empty
      if (!href.startsWith('http') && !href.startsWith('//')) {
        // Handle internal anchor links
        if (href.startsWith('#')) {
          continue; // Skip processing as these are internal anchor links
        }

        var origin = window.location.origin; // Get the current origin

        if (href.startsWith('/')) {
          url = new URL(origin + href);
        } else {
          url = new URL(href, origin);
        }

        // Check if the link has the "button" class
        if (links[i].classList.contains('button')) {
          // Modify the button click behavior without appending hostname
          links[i].addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = href;
          });
        } else {
          // Create a new span element
          var span = document.createElement('span');
          span.classList.add('site-url');

          var hostnameText = ''; // Initialize the hostname text

          if (url.hash) {
            hostnameText += url.hash;
          }

          links[i].textContent += hostnameText;
        }
      } else {
        url = new URL(href);

        // Create a new span element
        var span = document.createElement('span');
        span.classList.add('site-url');
        span.textContent = ' (' + url.hostname + ')' + (url.hash ? url.hash : '');

        links[i].appendChild(span);
      }
    }
  }
});