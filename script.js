fetch("data.json")
  .then(res => res.json())
  .then(data => {

    const render = (id, items) => {
      const el = document.getElementById(id);
      items.forEach(item => {
        el.innerHTML += `<div class="card">${item}</div>`;
      });
    };

    render("services", data.services);
    render("process", data.process);
    render("why", data.why);
    render("testimonials", data.testimonials);

    const form = document.getElementById("inquiryForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const formData = new FormData(form);

  fetch("send.php", {
    method: "POST",
    body: formData
  })
  .then(res => res.text())
  .then(data => {
    status.innerText = "✅ Inquiry sent successfully!";
    form.reset();
  })
  .catch(err => {
    status.innerText = "❌ Failed to send. Please try again.";
  });
});
const cards = document.querySelectorAll(".service-card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
});

cards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = "translateY(30px)";
  observer.observe(card);
});
  });