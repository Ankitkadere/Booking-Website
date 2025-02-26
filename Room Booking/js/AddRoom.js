
const todays = new Date().toISOString().split("T")[0]; // Get today's date
document.getElementById("date").value = todays; // Set today's date
document.getElementById("date").setAttribute("min", todays); // Disable past dates

const today = new Date();
today.setDate(today.getDate()); // Set to tomorrow (future date)
const minDate = today.toISOString().split("T")[0]; // Convert to YYYY-MM-DD format
document.getElementById("date").setAttribute("min", minDate);

const scriptURL =
  "https://script.google.com/macros/s/AKfycbztUUQ0zahqeO6zTRo4vbDkCfi3t9JIzcHl1nLD3BRMsCfb98lKeFEQzooKci7wqqw4/exec";
const form = document.forms["submit-to-google-sheet"];

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        alert("dddddd");
        document.getElementById('form1').style.display = "none";
        document.getElementById('1').style.display = 'block';
        response;
      })
      .catch((error) => console.error("Error!", error.message));
  });
} else {
  console.error("Form not found! Make sure the form exists in your HTML.");
}