document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector('input[type="search"]');

    searchInput.addEventListener("input", function() {
      const query = searchInput.value.toLowerCase();
      const filmSections = document.querySelectorAll('section[id]');
      
      filmSections.forEach(section => {
        const filmCards = section.querySelectorAll('.film-card');
        let foundMatch = false; 

        filmCards.forEach(card => {
          const title = card.getAttribute('data-title').toLowerCase();

          if (title.includes(query)) {
            card.style.display = 'block'; 
            foundMatch = true;
          } else {
            card.style.display = 'none'; 
          }
        });

        if (foundMatch) {
          section.style.display = 'block';
        } else {
          section.style.display = 'none';
        }
      });
      const noResultsMessage = document.getElementById('no-results');
      const anyVisibleSection = Array.from(filmSections).some(section => section.style.display === 'block');
      if (!anyVisibleSection && query.length > 0) {
        noResultsMessage.style.display = 'block';
      } else {
        noResultsMessage.style.display = 'none';
      }
    });
  });

  ///////////////Dark Mode////////////////

document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggle-dark-mode');
  
  if (toggleButton) {
      const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
      if (isDarkMode) {
          document.body.classList.add('dark-mode');
          const navbar = document.querySelector('.navbar');
          if (navbar) navbar.classList.add('dark-mode');
          const cards = document.querySelectorAll('.card');
          cards.forEach(card => card.classList.add('dark-mode'));
      }
      toggleButton.addEventListener('click', () => {
          const isDarkMode = document.body.classList.toggle('dark-mode');
          const navbar = document.querySelector('.navbar');
          if (navbar) navbar.classList.toggle('dark-mode');
          const cards = document.querySelectorAll('.card');
          cards.forEach(card => card.classList.toggle('dark-mode'));

          if (isDarkMode) {
              localStorage.setItem('darkMode', 'enabled');
          } else {
              localStorage.removeItem('darkMode');
          }
      });
  }
});