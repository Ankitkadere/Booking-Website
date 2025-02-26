const todays = new Date().toISOString().split("T")[0];
document.getElementById("datebox").value = todays;
alert("fefefefe");
const scriptURL =
  "https://script.google.com/macros/s/AKfycbztUUQ0zahqeO6zTRo4vbDkCfi3t9JIzcHl1nLD3BRMsCfb98lKeFEQzooKci7wqqw4/exec";
const form = document.forms["submit-to-google-sheet"];

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        document.getElementById("1").style.display = "block";
        document.getElementById("form2").style.display = "none";
        response;
      })
      .catch((error) => console.error("Error!", error.message));
  });
} else {
  console.error("Form not found! Make sure the form exists in your HTML.");
}
