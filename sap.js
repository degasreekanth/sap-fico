// Update footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Contact Form Validation
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  if (!name.value || !email.value || !message.value) {
    alert("Please fill in all fields.");
    return;
  }

  alert("Message sent successfully!");
  form.reset(); // Optionally clear the form
});

// Smooth Scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
