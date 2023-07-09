window.addEventListener('DOMContentLoaded', function() {
  var links = document.querySelectorAll('a');

  for(var i = 0; i < links.length; i++) {
    var url;

    if (!links[i].href.startsWith('http') && !links[i].href.startsWith('//')) {
      // Handle internal anchor links
      if(links[i].href.startsWith('#')){
        continue; // Skip processing as these are internal anchor links
      }
      
       // Prepend current origin to relative URLs/paths

       if (links[i].getAttribute('href').startsWith('/')) {
         url = new URL(window.location.origin + links[i].getAttribute('href'));
       } else {
         url = new URL(links[i].getAttribute('href'), window.location.origin);
       }
    } else {
      url = new URL(links[i].getAttribute('href'));
    }

    // Create a new span element
    var span = document.createElement('span');
    span.classList.add('site-url');
    
     // Append the site domain/subdomain to existing link text
     
     var hostnameText;

     if(url.hash) { 
       hostnameText = ' (' + url.hostname + ')' + url.hash;
     } else{
       hostnameText = ' (' + url.hostname + ')';
     }
     
     links[i].textContent += hostnameText;
   }
});