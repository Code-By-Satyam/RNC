// --- Review Slider with Smooth Transition ---
const reviews = document.querySelectorAll('.review');
let currentIndex = 0;

function showNextReview() {
  const current = reviews[currentIndex];
  current.classList.remove('active');

  // Fade-out delay before switching
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % reviews.length;
    reviews[currentIndex].classList.add('active');
  }, 200); // Small pause before showing next review
}

setInterval(showNextReview, 4000); // Slide every 4 seconds

// --- Email Form Submission (Fake Example) ---
const form = document.getElementById('email-form');
const message = document.getElementById('form-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  message.textContent = "Thanks for subscribing!";
  form.reset();
  setTimeout(() => (message.textContent = ""), 3000);
});
