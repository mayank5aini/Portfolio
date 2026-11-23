const toggle = document.getElementById("menu-toggle");
if (toggle) {
  toggle.addEventListener("change", () => {
    document.body.classList.toggle("no-scroll", toggle.checked);
  });
}

const words = [
  "Youtuber",
  "Creator",
  "Network Analyst",
  "Freelancer",
  "Developer",
];

const typingText = document.getElementById("typing-span");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let eraseingDelay = 100;
let nextWordDelay = 1000;

const type = () => {
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(type, nextWordDelay);
    } else {
      setTimeout(type, typingDelay);
    }
  } else {
    typingText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, eraseingDelay);
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  if (words?.length) type();
});
