const scriptURL =
  "https://script.google.com/macros/s/AKfycbyGp9hGmuzgL7Q5iWCg3vhagJGBVUUQl77n-QYftTnmcm0bb95JGbh8HDLDHWwiLiOyWg/exec";
const form = document.forms["submit-to-google-sheet"];

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        alert("fgfgfgfgfg");
        document.getElementById("15").style.display = "block";
        document.getElementById("form1").style.display = "none";
        response;
      })
      .catch((error) => console.error("Error !", error.message));
  });
} else {
  console.error("Form not found! Make sure the form exists in your HTML.");
}
