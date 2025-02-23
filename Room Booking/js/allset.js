window.onchange = "SearchLoad()";
var locate = document.getElementById("locate");

// Define room arrays for different categories
// Single Room
var androidRooms = [
  {
    id: "001001",
    title: "Faimily Room",
    subtitle: "Excellent Condition || 8GB RAM || 128GB Storage ",
    price: "25,000 Rs ",
    duration: "This is the best room for your best & easy jouarny",
    distance: "Black Color || Used 6 Months || ",
    address: "Bus Stand, Shahpura, Jabalpur, Madhya Pradesh",
    image:
      "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?cs=srgb&dl=pexels-pixabay-271816.jpg&fm=jpg",
  },
  {
    id: "001002",
    title: "Faimily Room",
    subtitle: "Excellent Condition || 8GB RAM || 128GB Storage ",
    price: "5,000 Rs ",
    duration: "This is the best room for your best & easy jouarny",
    distance: "2 km from city center",
    address: "654 Pine Street, Uptown",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYRkCGLPrFBp-oH_bfQ0_Tn1xhKkbyrOv9ww&s",
  },
];

// Family rooms
var keypadRooms = [
  {
    id: "F001",
    title: "Faimily Room",
    subtitle: "Excellent Condition || 8GB RAM || 128GB Storage ",
    price: "28,000 Rs ",
    duration: "This is the best room for your best & easy jouarny",
    distance: "3 km from city center",
    address: "789 Elm Street, Suburbs",
    image:
      "https://media.gettyimages.com/id/1212170511/photo/scandinavian-style-living-room-interior.jpg?s=612x612&w=0&k=20&c=3iI_6kD95u4mDx8wBx8gktvFpvA1rceZfAsC0WCO82c=",
  },
  {
    id: "F002",
    title: "Faimily Room",
    subtitle: "Excellent Condition || 8GB RAM || 128GB Storage ",
    price: "15,000 Rs ",
    duration: "This is the best room for your best & easy jouarny",
    distance: "4 km from city center",
    address: "321 Oak Avenue, Suburbs",
    image:
      "https://media.gettyimages.com/id/1213695544/photo/3d-rendering-of-a-luxurious-bedroom-interior.jpg?s=612x612&w=0&k=20&c=2w5r627b1TkwsLOHm73d2Tc9225TjXzYjaw5iaDX_c0=",
  },
];

// Couple rooms
var vgphoneRooms = [
  {
    id: "C001",
    title: "One Day Room",
    subtitle: "Excellent Condition || 8GB RAM || 128GB Storage ",
    price: "200 Rs ",
    duration: "This is the best room for your best & easy jouarny",
    distance: "1 km from city center",
    address: "987 Cedar Road, Downtown",
    image:
      "https://media.gettyimages.com/id/1216663592/photo/a-modern-stylish-and-bright-living-room.jpg?s=612x612&w=0&k=20&c=ShRyok7GUaQnglI6IGD0QhG9J0AhR__fzHrAvXM2ZNk=",
  },
  {
    id: "C002",
    title: "One Day Room",
    subtitle: "Excellent Condition || 8GB RAM || 128GB Storage ",
    price: "500 Rs ",
    duration: "This is the best room for your best & easy jouarny",
    distance: "2 km from city center",
    address: "654 Pine Street, Uptown",
    image: "https://images6.alphacoders.com/329/thumb-1920-329921.jpg",
  },
];

// Standard rooms
var iphoneRooms = [
  {
    id: "R001",
    title: "Couple's Room",
    subtitle: "Excellent Condition || 8GB RAM || 128GB Storage ",
    price: "1,000 Rs ",
    duration: "This is the best room for your best & easy jouarny",
    duration: "Stay duration: 1-5 nights",
    distance: "2.5 km from city center",
    address: "123 Main Street, Downtown",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjbXlKB89CHsvCHn5sl_qNvtenEQTyaShx-Q&s",
  },
  {
    id: "R002",
    title: "Couple's Room",
    subtitle: "Excellent Condition || 8GB RAM || 128GB Storage ",
    price: "1,000 Rs ",
    duration: "This is the best room for your best & easy jouarny",
    distance: "5 km from city center",
    address: "456 Maple Avenue, Uptown",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST_wmDGykZWXpVJ2USRJm1s--yVhF069xJRQ&s",
  },
];

//482001
var jioRooms = [
  {
    id: "C009999991",
    title: "Per Hour Room",
    subtitle: "Excellent Condition || 8GB RAM || 128GB Storage ",
    price: "1,00 Rs ",
    duration: "This is the best room for your best & easy jouarny",
    distance: "1 km from city center",
    address: "987 Cedar Road, Downtown",
    image:
      "https://img.freepik.com/free-photo/gray-sofa-white-living-room-interior-with-copy-space-3d-rendering_43614-802.jpg",
  },
  {
    id: "C002",
    title: "Per Hour Room",
    subtitle: "Excellent Condition || 8GB RAM || 128GB Storage ",
    price: "1,00 Rs ",
    duration: "This is the best room for your best & easy jouarny",
    distance: "2 km from city center",
    address: "654 Pine Street, Uptown",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn-GJSQlY_OpphwHsh30nQcEKFnjgLGcxyiw&s",
  },
];

// Variable to control display (a == 123 will display rooms)

const roomContainer = document.getElementById("roomContainer");
const fullDetails = document.getElementById("fullDetails");
const closeDetailsBtn = document.getElementById("closeDetails");

// Elements for displaying full room details
const detailsImage = document.getElementById("detailsImage");
const detailsTitle = document.getElementById("detailsTitle");
const detailsSubtitle = document.getElementById("detailsSubtitle");
const detailsPrice = document.getElementById("detailsPrice");
const detailsDuration = document.getElementById("detailsDuration");
const detailsDistance = document.getElementById("detailsDistance");
const detailsAddress = document.getElementById("detailsAddress");
const bookNow = document.getElementById("bookNow");

// Function to load rooms dynamically
function loadRooms(rooms) {
  rooms.forEach((room) => {
    const roomDiv = document.createElement("div");
    roomDiv.classList.add("room");
    roomDiv.innerHTML = `
    <img src="${room.image}" alt="Room Image">
    <div class="room-details">
      <h3 class="room-title">${room.title}</h3>
      <p class="room-subtitle" >${room.subtitle}</p>
      <p class="room-duration"  >${room.duration}</p>
      <p class="room-distance" style="display: none;>${room.distance}</p>
      <p class="room-address">${room.address}</p>
      <div id="prcset">
      <p>Price</p>
      <b style=" color: darkblue"  class="room-price">${room.price}</b>
      </div>

    </div>
  `;
    roomDiv.addEventListener("click", () => displayRoomDetails(room));
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
  fullDetails.style.display = "flex";

  locate.scrollIntoView({
    behavior: "smooth", // Scroll smoothly
    block: "start", // Align the top of the full details with the top of the viewport
  });
}

// Close full room details
closeDetailsBtn.addEventListener("click", () => {
  fullDetails.style.display = "none";
});

// Display rooms based on the condition a == 123

function applyFilters() {
  // Get the selected filter values
  let typeroom = document.getElementById("roomTypeFilter").value;
  let range = document.getElementById("priceRange").value;
  let range1 = document.getElementById("priceRange1").value;
  let range2 = document.getElementById("priceRange2").value;
  let range3 = document.getElementById("priceRange3").value;
  let range4 = document.getElementById("priceRange4").value;
  let dist = document.getElementById("distanceRange").value;

  // Clears all previously displayed rooms
  document.getElementsByClassName("full-details")[0].style.display = "none";

  // Clear current room display
  let roomContainer = document.getElementById("roomContainer");
  roomContainer.innerHTML = ""; // Clears all previously displayed rooms
  locate.scrollIntoView({
    behavior: "smooth", // Scroll smoothly
    block: "start", // Align the top of the full details with the top of the viewport
  });

  // Apply filters based on room type
  if (typeroom === "all") {
    loadRooms(androidRooms); // Load all types of rooms
    loadRooms(keypadRooms);
    loadRooms(vgphoneRooms);
    loadRooms(iphoneRooms);
    loadRooms(jioRooms);
  } else if (typeroom === "android") {
    loadRooms(androidRooms); // Load only single rooms
  } else if (typeroom === "keypad") {
    loadRooms(keypadRooms); // Load only keypad rooms
  } else if (typeroom === "vgphone") {
    loadRooms(vgphoneRooms); // Load only 5G phone rooms (double)
  } else if (typeroom === "iphone") {
    loadRooms(iphoneRooms); // Load only I phone rooms
  } else if (typeroom === "jio") {
    loadRooms(jioRooms); // Load only JIO rooms
  } else {
    roomContainer.innerHTML = "<p>No Mobiles Available At The Moment.</p>"; // Default message when no rooms are available
  }
}

// Variable to control display (a == 123 will display rooms)

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
  fullDetails.style.display = "flex";
  locate.scrollIntoView({
    behavior: "smooth", // Scroll smoothly
    block: "start", // Align the top of the full details with the top of the viewport
  });
}

// Close full room details
closeDetailsBtn.addEventListener("click", () => {
  fullDetails.style.display = "none";
});

//hide room list

// Get all elements with the class 'room'

// Display rooms based on the condition a == 123

//filter out js

document.getElementById("priceRange1").style.display = "none";
document.getElementById("priceRange2").style.display = "none";
document.getElementById("priceRange3").style.display = "none";
document.getElementById("priceRange4").style.display = "none";

function SearchLoad() {
  // Retrieve the selected values
  let typeroom = document.getElementById("roomTypeFilter").value;
  let range = document.getElementById("priceRange").value;
  let dist = document.getElementById("distanceRange").value;

  // Conditional behavior based on the selected room type
  if (typeroom === "all") {
    document.getElementById("priceRange").style.display = "block";
    document.getElementById("priceRange1").style.display = "none";
    document.getElementById("priceRange2").style.display = "none";
    document.getElementById("priceRange3").style.display = "none";
    document.getElementById("priceRange4").style.display = "none";
  } else if (typeroom === "android") {
    document.getElementById("priceRange").style.display = "none";
    document.getElementById("priceRange1").style.display = "block";
    document.getElementById("priceRange2").style.display = "none";
    document.getElementById("priceRange3").style.display = "none";
    document.getElementById("priceRange4").style.display = "none";
  } else if (typeroom === "keypad") {
    document.getElementById("priceRange").style.display = "none";
    document.getElementById("priceRange1").style.display = "none";
    document.getElementById("priceRange2").style.display = "block";
    document.getElementById("priceRange3").style.display = "none";
    document.getElementById("priceRange4").style.display = "none";
  } else if (typeroom === "vgphone") {
    document.getElementById("priceRange").style.display = "none";
    document.getElementById("priceRange1").style.display = "none";
    document.getElementById("priceRange2").style.display = "none";
    document.getElementById("priceRange3").style.display = "block";
    document.getElementById("priceRange4").style.display = "none";
  } else if (typeroom === "iphone") {
    document.getElementById("priceRange").style.display = "none";
    document.getElementById("priceRange1").style.display = "none";
    document.getElementById("priceRange2").style.display = "none";
    document.getElementById("priceRange3").style.display = "none";
    document.getElementById("priceRange4").style.display = "block";
  } else if (typeroom === "jio") {
    document.getElementById("priceRange").style.display = "none";
    document.getElementById("priceRange1").style.display = "none";
    document.getElementById("priceRange2").style.display = "none";
    document.getElementById("priceRange3").style.display = "none";
    document.getElementById("priceRange4").style.display = "block";
  } else {
    alert("Data Not Found");
  }
}
