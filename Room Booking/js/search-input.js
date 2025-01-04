 
document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById('distanceRange');
 
  const suggestionsContainer = document.getElementById('suggestions-container');

  // Mock data for suggestions (can be replaced with dynamic data from API)
  const places = [
      'Adhartal Jabalpur 482004',
      'Agasaud Jabalpur 482002',
      'Amkhera Jabalpur 482004',
      'Anand Nagar Jabalpur 482004',
      'Anandnagar Jabalpur 482004',
      'Archha Jabalpur 482002',
      'Badhaiyakheda Jabalpur 483113',
      'Badkheda Jabalpur 483220',
      'Badkhera Jabalpur 483110',
      'Baghraji Jabalpur 482001',
      'Bai Ka Bagicha Jabalpur 482001',
      'Bandhi Jabalpur 483440',
      'Barbati Jabalpur 482021',
      'Barela Jabalpur 483001',
      'Bargi IPC Jabalpur 483050',
      'Bargi Jabalpur 483225',
      'Bargi Nagar Jabalpur 482056',
      'Bargi Jabalpur 482051',
      'Baroda Jabalpur 483220',
      'Baroda Chhedi Jabalpur 483053',
      'Basendi Jabalpur 483119',
      'Belkhadu Jabalpur 482002',
      'Belkheda Jabalpur 483119',
      'Bhaironghat Pipariya Jabalpur 483119',
      'Bheeta Jabalpur 483119',
      'Bheraghat Jabalpur 483053',
      'Bhuwara Jabalpur 483119',
      'Bilhari Jabalpur 482020',
      'Boria Jabalpur 483105',
      'Chargawan Jabalpur 482003',
      'Chaurai Kala Jabalpur 483110',
      'Chhaparhat Jabalpur 483119',
      'Chhartarpur Jabalpur 483220',
      'Dadargawan Jabalpur 483110',
      'Dehri Khurd Jabalpur 482001',
      'Deori Patpara Jabalpur 483001',
      'Dhanpuri Jabalpur 483001',
      'Dhanwahi Jabalpur 482001',
      'Dharampura Jabalpur 482003',
      'Dixitpura Jabalpur 482002',
      'Engineering College Jabalpur 482011',
      'Gadaghat Jabalpur 483113',
      'Gadar Pipariya Jabalpur 483119',
      'Gangai Badkheda Jabalpur 482003',
      'Gangai Bijori Jabalpur 482003',
      'Gangai Padaria Jabalpur 482001',
      'Ganjipura Jabalpur 482002',
      'Garha Bazar Jabalpur 482003',
      'Garha Phatak Jabalpur 482002',
      'Garha Jabalpur 482003',
      'Gauraiyaghat Jabalpur 482021',
      'Gauri Jabalpur 483110',
      'Ghat Piparia Jabalpur 482003',
      'Ghughara Jabalpur 483110',
      'Gohalpur Jabalpur 482002',
      'Gokulpur Jabalpur 482011',
      'Gubra Kala Jabalpur 483119',
      'Gun Shop Jabalpur 482005',
      'Gupteshwar Jabalpur 482001',
      'Gurandi Bazar Jabalpur 482002',
      'Gwarighat Jabalpur 482008',
      'H.R.Lines Jabalpur 482001',
      'Hanumantal Jabalpur 482002',
      'Harduli Jabalpur 483110',
      'Harrai Jabalpur 482051',
      'Hathital Jabalpur 482001',
      'High Court Jabalpur 482007',
      'Hinotia Bhoi Jabalpur 483001',
      'Howbagh Jabalpur 482001',
      'I.T.I. Jabalpur 482002',
      'Imlai Jabalpur 483220',
      'Imlai Jabalpur 482001',
      'Jabalpur Cantt Jabalpur 482001',
      'Jabalpur City Jabalpur 482002',
      'Jabalpur Factory Jabalpur 482011',
      'Jabalpur H.O Jabalpur 482001',
      'Jeewan Bima Nigam Jabalpur 482001',
      'Jhiria Jabalpur 483110',
      'Jhirmila Jabalpur 483110',
      'Jonesganj Jabalpur 482002',
      'Kailwas Jabalpur 482021',
      'Kaladehi Jabalpur 482051',
      'Kaladumar Jabalpur 483220',
      'Kamala Nehru Nagar Jabalpur 482002',
      'Kanchanpur Jabalpur 482004',
      'Karmeta Jabalpur 482002',
      'Kastara Jabalpur 483110',
      'Kasturba Nagar Jabalpur 482001',
      'Katangi Jabalpur 483105',
      'Katra Belkheda Jabalpur 483113',
      'Khairi Jabalpur 483113',
      'Khajri Jabalpur 482004',
      'Khamaria Market Jabalpur 482005',
      'Khamaria Neemkheda Jabalpur 482021',
      'Khamaria Jabalpur 482005',
      'Khinni Jabalpur 483222',
      'Khirahani Jabalpur 483220',
      'Khukkham Jabalpur 483001',
      'Konikala Jabalpur 483113',
      'Kosam Dongari Jabalpur 483110',
      'Kundam Jabalpur 483110',
      'Kutchery Jabalpur 482001',
      'Kymore Jabalpur 483880',
      'Kymori Jabalpur 483113',
      'Lac Lines Jabalpur 482001',
      'Lamheta Ghat Jabalpur 482003',
      'Lordganj Jabalpur 482002',
      'Luhkari Jabalpur 482001',
      'Magarmuha Jabalpur 483119',
      'Maharajpur Jabalpur 482004',
      'Majhita Jabalpur 483053',
      'Mangela Jabalpur 482002',
      'Mankedi Jabalpur 483119',
      'Marha Jabalpur 483225',
      'Medical College Jabalpur 482003',
      'Miloniganj Jabalpur 482002',
      'Mohas Jabalpur 482051',
      'Mohniya Jabalpur 483222',
      'Motinala Jabalpur 482002',
      'Murrai Jabalpur 483105',
      'Nagar Nigam Jabalpur 482002',
      'Napier Lines Jabalpur 482001',
      'Napier Town Jabalpur 482001',
      'Natwara Jabalpur 483119',
      'Nichi Jabalpur 482003',
      'Nigri Jabalpur 482051',
      'Nirandpur Jabalpur 483105',
      'Nunsar Jabalpur 483113',
      'Pachkuiyan Jabalpur 482002',
      'Padaria Jabalpur 483220',
      'Padwar Jabalpur 483001',
      'Panagar Jabalpur 483220',
      'Patan Jabalpur 483113',
      'Pawla Jabalpur 483119',
      'Perfect Pottories Jabalpur 482008',
      'Pindrai Barha Jabalpur 482021',
      'Piparia Jabalpur 482001',
      'Polipahar Jabalpur 482008',
      'Prem Nagar Jabalpur 482001',
      'R.F.R.C. Jabalpur 482021',
      'Raipura Jabalpur 483220',
      'Ramkhiria Jabalpur 483222',
      'Ramkhiria Thutha Jabalpur 483119',
      'Rampuri Turka Jabalpur 483110',
      'Ranjhi Azad Nagar Jabalpur 482005',
      'Ranjhi Jabalpur 482011',
      'Reewan Jabalpur 482051',
      'Regimental Bazar Jabalpur 482001',
      'Richhai Jabalpur 482010',
      'Riyana Jabalpur 483113',
      'Roberts Line Jabalpur 482001',
      'Sagada Jhapni Jabalpur 482021',
      'Sahajpur Jabalpur 483119',
      'Sahajpuri Jabalpur 482056',
      'Sahshan Jabalpur 483119',
      'Sakra Jabalpur 483113',
      'Salaiya Jabalpur 483110',
      'Sarauli Jabalpur 483110',
      'Saroli Majhgawan Jabalpur 483334',
      'Sarond Jabalpur 483113',
      'Sarsawa Jabalpur 483220',
      'Sarswati Vihar Jabalpur 482001',
      'Shahpura Jabalpur 483119',
      'Shobhapur Jabalpur 482009',
      'Sihora Khitola Bazar Jabalpur 483225',
      'Simaria Jabalpur 482002',
      'Singod Jabalpur 483220',
      'Sonpur Jabalpur 482005',
      'Subhas Nagar Jabalpur 482004',
      'Sukha Jabalpur 482002',
      'Sukha Bharatpur Jabalpur 482003',
      'Sukri Jabalpur 482051',
      'Sundarpur Jabalpur 482005',
      'Supawara Jabalpur 483110',
      'Surtalai Jabalpur 482002',
      'T.T.C. Jabalpur 482001',
      'Telegraph Work Shop Jabalpur 482002',
      'Temarbhita Jabalpur 482001',
      'Tilsani Jabalpur 482001',
      'Tilwara Ghat Jabalpur 482003',
      'Tinsi Jabalpur 482051',
      'Tripuri Jabalpur 483053',
      'Udna Jabalpur 483113',
      'Umaria Choubey Jabalpur 483220',
      'Umaria Kudari Jabalpur 483001',
      'Umaria Patan Jabalpur 483119',
      'Umaria Pathra Jabalpur 483220',
      'Urdua Kala Jabalpur 483220',
      'Vehicle Factory Jabalpur 482009',
      'Vidyut Nagar Jabalpur 482008',
      'Vijay Nagar Colony Jabalpur 482002',
      'Wright Town Jabalpur 482002'
    ];
    
  

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
 


