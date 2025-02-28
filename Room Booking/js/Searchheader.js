document.addEventListener("DOMContentLoaded", function() {
  const searchInput1 = document.getElementById('input');
  const suggestionsContainer1 = document.getElementById('suggestions-container1');

  // Mock data for suggestions (this can be replaced with dynamic data from an API)
  const places = ['Shahpura', 'Byepass', 'Medical', 'Bhedaghat', 'Shahpura', 'Bhitoni', 'Kishrot', 'Kudan', 'Tewar'];

  // Function to filter suggestions based on user input
  function filterSuggestions(inputValue) {
      return places.filter(place => place.toLowerCase().includes(inputValue.toLowerCase()));
  }

  // Function to render suggestions in the suggestions container
  function renderSuggestions(suggestions) {
      suggestionsContainer1.innerHTML = '';  // Clear previous suggestions
      suggestions.forEach(suggestion => {
          const suggestionItem = document.createElement('div');
          suggestionItem.classList.add('suggestion-item');
          suggestionItem.textContent = suggestion;
          suggestionItem.addEventListener('click', () => {
              searchInput1.value = suggestion;  // Set the input value to the clicked suggestion
              suggestionsContainer1.style.display = 'none';  // Hide suggestions after selection
          });
          suggestionsContainer1.appendChild(suggestionItem);  // Append to the correct container
      });
      // Display suggestions container based on the number of suggestions
      suggestionsContainer1.style.display = suggestions.length ? 'block' : 'none';
  }

  // Event listener for input changes
  searchInput1.addEventListener('input', function() {
      const inputValue = this.value.trim();
      const suggestions = filterSuggestions(inputValue);
      renderSuggestions(suggestions);
  });

  // Event listener to close suggestions when clicking outside the search container
  document.addEventListener('click', function(event) {
      if (!event.target.closest('#search') && suggestionsContainer1.style.display === 'block') {
          suggestionsContainer1.style.display = 'none';  // Hide suggestions if clicked outside
      }
  });
});
