const scriptURL =
  "https://script.google.com/macros/s/AKfycbwY96I_SFXuOmUjkfbw3FNTZhAbkLWw2LXxj_-zgDkbwTy_NCsCApNa71IlLceJFq_D/exec";
const form = document.forms["contactForm"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));

  form.reset();
});
