window.onchange="SearchLoad()";
var locate = document.getElementById("locate");
var androidRooms = [
  {
    id: '001001',
    title: 'Samsung S24',
    subtitle: 'Excellent Condition || 8GB RAM || 128GB Storage ',
    price: '25,000 Rs ',
    duration: '4GB ROM || Battery 5000mAh || Camera Quality 64MP',
    distance: 'Black Color || Used 6 Months || ',
    address: 'Bus Stand, Shahpura, Jabalpur, Madhya Pradesh',
    image: 'https://via.placeholder.com/300x200'
},
  {
    id: '001002',
    title: 'Single with Balcony',
    subtitle: 'Cozy room with a private balcony.',
    price: '$160 per night',
    duration: 'Stay duration: 1-3 nights',
    distance: '2 km from city center',
    address: '654 Pine Street, Uptown',
    image: 'https://via.placeholder.com/300x200'
}
];


// Family rooms
var keypadRooms = [
  {
    id: 'F001',
    title: 'Family Suite',
    subtitle: 'Spacious suite perfect for families.',
    price: '$250 per night',
    duration: 'Stay duration: 1-10 nights',
    distance: '3 km from city center',
    address: '789 Elm Street, Suburbs',
    image: 'https://via.placeholder.com/300x200'
},
  {
    id: 'F002',
    title: 'Large Family Room',
    subtitle: 'Comfortable room for the whole family.',
    price: '$220 per night',
    duration: 'Stay duration: 1-7 nights',
    distance: '4 km from city center',
    address: '321 Oak Avenue, Suburbs',
    image: 'https://via.placeholder.com/300x200'
}
];

// Couple rooms
var vgphoneRooms = [
  {
    id: 'C001',
    title: 'Romantic Couple Suite',
    subtitle: 'Perfect for a romantic getaway.',
    price: '$180 per night',
    duration: 'Stay duration: 1-5 nights',
    distance: '1 km from city center',
    address: '987 Cedar Road, Downtown',
    image: 'https://via.placeholder.com/300x200'
},
  {
    id: 'C002',
    title: 'Couple Room with Balcony',
    subtitle: 'Cozy room with a private balcony.',
    price: '$160 per night',
    duration: 'Stay duration: 1-3 nights',
    distance: '2 km from city center',
    address: '654 Pine Street, Uptown',
    image: 'https://via.placeholder.com/300x200'
}
];

// Standard rooms
var iphoneRooms = [
  {
    id: 'R001',
    title: 'Luxury Suite',
    subtitle: 'Experience the best comfort and elegance.',
    price: '$200 per night',
    duration: 'Stay duration: 1-5 nights',
    distance: '2.5 km from city center',
    address: '123 Main Street, Downtown',
    image: 'https://via.placeholder.com/300x200'
},
  {
    id: 'R002',
    title: 'Standard Room',
    subtitle: 'Cozy and affordable.',
    price: '$100 per night',
    duration: 'Stay duration: 1-7 nights',
    distance: '5 km from city center',
    address: '456 Maple Avenue, Uptown',
    image: 'https://via.placeholder.com/300x200'
}
];

//482001
var jioRooms = [
  {
    id: 'C009999991',
    title: 'RRrrrrrrrrrrromantic Couple Suite',
    subtitle: 'Perfect for a romantic getaway.',
    price: '$180 per night',
    duration: 'Stay duration: 1-5 nights',
    distance: '1 km from city center',
    address: '987 Cedar Road, Downtown',
    image: 'https://via.placeholder.com/300x200'
},
  {
    id: 'C002',
    title: 'Couple Room with Balcony',
    subtitle: 'Cozy room with a private balcony.',
    price: '$160 per night',
    duration: 'Stay duration: 1-3 nights',
    distance: '2 km from city center',
    address: '654 Pine Street, Uptown',
    image: 'https://via.placeholder.com/300x200'
}
];

// Variable to control display (a == 123 will display rooms)


const roomContainer = document.getElementById('roomContainer');
const fullDetails = document.getElementById('fullDetails');
const closeDetailsBtn = document.getElementById('closeDetails');

// Elements for displaying full room details
const detailsImage = document.getElementById('detailsImage');
const detailsTitle = document.getElementById('detailsTitle');
const detailsSubtitle = document.getElementById('detailsSubtitle');
const detailsPrice = document.getElementById('detailsPrice');
const detailsDuration = document.getElementById('detailsDuration');
const detailsDistance = document.getElementById('detailsDistance');
const detailsAddress = document.getElementById('detailsAddress');
const bookNow = document.getElementById('bookNow');

// Function to load rooms dynamically
function loadRooms(rooms) {
  rooms.forEach(room => {
    const roomDiv = document.createElement('div');
    roomDiv.classList.add('room');
    roomDiv.innerHTML = `
    
    <img src="${room.image}" alt="Room Image">
    <div class="room-details">
      <h3 class="room-title">${room.title}</h3>
      <p class="room-subtitle">${room.subtitle}</p>
       <br>
      <p class="room-duration">${room.duration}</p>
      <p class="room-distance">${room.distance}</p>
      <p class="room-address">${room.address}</p>
      <div id="prcset">
      <p>Price</p>
      <b style=" color: darkblue"  class="room-price">${room.price}</b>
      </div>

    </div>
  `;
    roomDiv.addEventListener('click', () => displayRoomDetails(room));
    roomContainer.appendChild(roomDiv);
  });
}

// Display full details of the clicked room
function displayRoomDetails(room) {

  detailsImage.src = room.image;
  detailsTitle.textContent = room.title;
  detailsSubtitle.textContent = room.subtitle;
  detailsPrice.textContent = room.price;
  detailsDuration.textContent = room.duration;
  detailsDistance.textContent = room.distance;
  detailsAddress.textContent = room.address;
  bookNow.href = `/book/${room.id}`;
  fullDetails.style.display = 'flex';
  locate.scrollIntoView({
    behavior: 'smooth',  // Scroll smoothly
    block: 'start'       // Align the top of the full details with the top of the viewport
  });

}

// Close full room details
closeDetailsBtn.addEventListener('click', () => {
  fullDetails.style.display = 'none';
});

//hide room list
 
  // Get all elements with the class 'room'
  
// Display rooms based on the condition a == 123 
function applyFilters() {
  document.getElementsByClassName("container")[0].style.display="block";
  // Get the selected filter values
  
  let typeroom = document.getElementById('roomTypeFilter').value;
  let range = document.getElementById('priceRange').value;
  let range1 = document.getElementById('priceRange1').value;
  let range2 = document.getElementById('priceRange2').value;
  let range3 = document.getElementById('priceRange3').value;
  let range4 = document.getElementById('priceRange4').value;
  let dist = document.getElementById('distanceRange').value;
 
  // Clear current room display
  let roomContainer = document.getElementById('roomContainer');
  roomContainer.innerHTML = ''; 
  locate.scrollIntoView({
    behavior: 'smooth',  // Scroll smoothly
    block: 'start'       // Align the top of the full details with the top of the viewport
  });

  // Clears all previously displayed rooms
    document.getElementsByClassName("full-details")[0].style.display="none";
  // Apply filters based on room type
  
  if (typeroom === "all") {
    loadRooms(androidRooms); // Load all types of rooms
    loadRooms(keypadRooms);
    loadRooms(vgphoneRooms);
    loadRooms(iphoneRooms);
    loadRooms(jioRooms);
  }
  else if (typeroom === "android") {
    loadRooms(androidRooms); // Load only single rooms

  }
  else if (typeroom === "keypad") {
    loadRooms(keypadRooms); // Load only keypad rooms
  }
  else if (typeroom === "vgphone") {
    loadRooms(vgphoneRooms); // Load only 5G phone rooms (double)
  }
  else if (typeroom === "iphone") {
    loadRooms(iphoneRooms); // Load only I phone rooms
  } else if (typeroom === "jio") {
    loadRooms(jioRooms); // Load only JIO rooms
  }
  else {
    roomContainer.innerHTML = '<p>No Mobiles Available At The Moment.</p>'; // Default message when no rooms are available
  }
}
 




//filter out js

 
    document.getElementById('priceRange1').style.display = 'none';
    document.getElementById('priceRange2').style.display = 'none';
    document.getElementById('priceRange3').style.display = 'none';
    document.getElementById('priceRange4').style.display = 'none';

    function SearchLoad() {
      // Retrieve the selected values
      let typeroom = document.getElementById('roomTypeFilter').value;
      let range = document.getElementById('priceRange').value;
      let dist = document.getElementById('distanceRange').value;

      // Conditional behavior based on the selected room type
      if (typeroom === "all") {
        document.getElementById('priceRange').style.display = 'block';
        document.getElementById('priceRange1').style.display = 'none';
        document.getElementById('priceRange2').style.display = 'none';
        document.getElementById('priceRange3').style.display = 'none';
        document.getElementById('priceRange4').style.display = 'none';

      }
      else if (typeroom === "android") {
        document.getElementById('priceRange').style.display = 'none';
        document.getElementById('priceRange1').style.display = 'block';
        document.getElementById('priceRange2').style.display = 'none';
        document.getElementById('priceRange3').style.display = 'none';
        document.getElementById('priceRange4').style.display = 'none';
      }
      else if (typeroom === "keypad") {
        document.getElementById('priceRange').style.display = 'none';
        document.getElementById('priceRange1').style.display = 'none';
        document.getElementById('priceRange2').style.display = 'block';
        document.getElementById('priceRange3').style.display = 'none';
        document.getElementById('priceRange4').style.display = 'none';
      }
      else if (typeroom === "vgphone") {
        document.getElementById('priceRange').style.display = 'none';
        document.getElementById('priceRange1').style.display = 'none';
        document.getElementById('priceRange2').style.display = 'none';
        document.getElementById('priceRange3').style.display = 'block';
        document.getElementById('priceRange4').style.display = 'none';
      }
      else if (typeroom === "iphone") {
        document.getElementById('priceRange').style.display = 'none';
        document.getElementById('priceRange1').style.display = 'none';
        document.getElementById('priceRange2').style.display = 'none';
        document.getElementById('priceRange3').style.display = 'none';
        document.getElementById('priceRange4').style.display = 'block';
      }
      else if (typeroom === "jio") {
        document.getElementById('priceRange').style.display = 'none';
        document.getElementById('priceRange1').style.display = 'none';
        document.getElementById('priceRange2').style.display = 'none';
        document.getElementById('priceRange3').style.display = 'none';
        document.getElementById('priceRange4').style.display = 'block';
      }
      else {
        alert('Data Not Found');
      }
    }
   