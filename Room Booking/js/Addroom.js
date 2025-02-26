const today = new Date().toISOString().split("T")[0];
document.getElementById("date").value = today;
document.getElementById("date").setAttribute("min", today);

const scriptURL =
  "https://script.google.com/macros/s/AKfycbztUUQ0zahqeO6zTRo4vbDkCfi3t9JIzcHl1nLD3BRMsCfb98lKeFEQzooKci7wqqw4/exec";
const form = document.forms["submit-to-google-sheet"];

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        document.getElementById("15").style.display = "block";
        document.getElementById("form1").style.display = "none";
        response;
      })
      .catch((error) => console.error("Error!", error.message));
  });
} else {
  console.error("Form not found! Make sure the form exists in your HTML.");
}
