document.addEventListener('DOMContentLoaded', () => {
  // Get all language buttons
  const languageButtons = document.querySelectorAll('.language-button');

  // Retrieve the selected language from localStorage
  const selectedLanguage = localStorage.getItem('selectedLanguage');

  // Add 'active' class to the button representing the selected language
  languageButtons.forEach((button) => {
    if (button.dataset.lang === selectedLanguage) {
      	button.classList.add('active');
      	button.disabled = true;
    } else {
        button.disabled = false;
    }
  });

// Add click event listener to each button
languageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Get the selected language from the button's data attribute
    const selectedLanguage = button.dataset.lang;

    // Update the selectedLanguage variable and store it in localStorage
    localStorage.setItem('selectedLanguage', selectedLanguage);

    // Translate the elements with the new language
    translateElements();

    // Update the active button and disabled state
    languageButtons.forEach((button) => {
      if (button.dataset.lang === selectedLanguage) {
        button.classList.add('active');
        button.disabled = true;
      } else {
        button.classList.remove('active');
        button.disabled = false;
      }
    });
  });
});


  // Function to translate elements
function translateElements() {
  let selectedLanguage = localStorage.getItem('selectedLanguage');
  if (!selectedLanguage) {
    selectedLanguage = 'ru';
  // Add 'active' class to the button representing the selected language
  languageButtons.forEach((button) => {
    if (button.dataset.lang === selectedLanguage) {
      //button.classList.add('active');
      button.disabled = true;
    } else {
        button.disabled = false;
    }
  });
  }
  fetch(`/langs/${selectedLanguage}.json`)
    .then((response) => response.json())
    .then((translation) => {
      const elementsToTranslate = document.querySelectorAll('.translatable');
      elementsToTranslate.forEach((element) => {
        const key = element.dataset.translationkey;
        if (translation.hasOwnProperty(key)) {
          element.innerHTML = translation[key];
        }
      });
    })
    .catch((error) => {
      console.error('Error fetching translation file:', error);
    });
}


  // Call the translateElements function on page load
  translateElements();
});