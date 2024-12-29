 
document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById('distanceRange');
 
  const suggestionsContainer = document.getElementById('suggestions-container');

  // Mock data for suggestions (can be replaced with dynamic data from API)
  const places = ['Shahpura', 'Byepass', 'Medical', 'Bhedaghat', 'Shahpura', 'Bhitoni', 'Kishrot', 'Kudan', 'Tewar'];

  // Function to filter suggestions based on user input
  function filterSuggestions(inputValue) {
    return places.filter(place => place.toLowerCase().includes(inputValue.toLowerCase()));
  }

  // Function to display suggestions in the suggestions container
  function renderSuggestions(suggestions) {
    suggestionsContainer.innerHTML = '';
    suggestions.forEach(suggestion => {
      const suggestionItem = document.createElement('div');
      suggestionItem.classList.add('suggestion-item');
      suggestionItem.textContent = suggestion;
      suggestionItem.addEventListener('click', () => {
        searchInput.value = suggestion;
        suggestionsContainer.style.display = 'none';
      });
      suggestionsContainer.appendChild(suggestionItem);
    });
    suggestionsContainer.style.display = suggestions.length ? 'block' : 'none';
  }

  // Event listener for input changes
  searchInput.addEventListener('input', function() {
    const inputValue = this.value.trim();
    const suggestions = filterSuggestions(inputValue);
    renderSuggestions(suggestions);
  });

  // Event listener to close suggestions when clicking outside the search container
  document.addEventListener('click', function(event) {
    if (!event.target.closest('.search-box') && suggestionsContainer.style.display === 'block') {
      suggestionsContainer.style.display = 'none';
    }
  });
});
 



//  Second Main -Input Suggestion 

document.addEventListener("DOMContentLoaded", function() {

    const searchInput = document.getElementById('input');
    const suggestionsContainer = document.getElementById('suggestions-container1');
  
    // Mock data for suggestions (can be replaced with dynamic data from API)
    const places = ['Shahpura', 'Byepass', 'Medical', 'Bhedaghat', 'Shahpura', 'Bhitoni', 'Kishrot', 'Kudan', 'Tewar'];
  
    // Function to filter suggestions based on user input
    function filterSuggestions(inputValue) {
      return places.filter(place => place.toLowerCase().includes(inputValue.toLowerCase()));
    }
  
    // Function to display suggestions in the suggestions container
    function renderSuggestions(suggestions) {
      suggestionsContainer.innerHTML = '';
      suggestions.forEach(suggestion => {
        const suggestionItem = document.createElement('div');
        suggestionItem.classList.add('suggestion-item');
        suggestionItem.textContent = suggestion;
        suggestionItem.addEventListener('click', () => {
          searchInput.value = suggestion;
          suggestionsContainer.style.display = 'none';
        });
        suggestionsContainer.appendChild(suggestionItem);
      });
      suggestionsContainer.style.display = suggestions.length ? 'block' : 'none';
    }
  
    // Event listener for input changes
    searchInput.addEventListener('input', function() {
      const inputValue = this.value.trim();
      const suggestions = filterSuggestions(inputValue);
      renderSuggestions(suggestions);
    });
  
    // Event listener to close suggestions when clicking outside the search container
    document.addEventListener('click', function(event) {
      if (!event.target.closest('.search-box') && suggestionsContainer.style.display === 'block') {
        suggestionsContainer.style.display = 'none';
      }
    });
  });
   