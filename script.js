// --- Typing Effect ---
const typingText = document.querySelector(".typing-text");
const text = "New way to enhance your spiritual journey";
let i = 0;

function type() {
  if (i < text.length) {
    typingText.textContent += text.charAt(i);
    i++;
    setTimeout(type, 90); // speed of typing
  } else {
    typingText.style.borderRight = "none"; // remove cursor after done
  }
}

type();



// --- Smooth Review Slider ---
const reviews = document.querySelectorAll(".review");
let currentIndex = 0;

function showNextReview() {
  const current = reviews[currentIndex];
  current.classList.remove("active");

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % reviews.length;
    reviews[currentIndex].classList.add("active");
  }, 200);
}
setInterval(showNextReview, 4000);

// --- Sticky Header Scroll Effect ---
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// --- Email Form Submission ---
const form = document.getElementById("email-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  message.textContent = "Thanks for subscribing!";
  form.reset();
  setTimeout(() => (message.textContent = ""), 3000);
});
