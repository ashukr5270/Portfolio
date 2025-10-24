// ========== Sliding Animation on Mouse Move ==========
const introContent = document.querySelector(".intro-content");
const profileImg = document.querySelector(".intro-img img");

// Slide effect on mouse move
document.addEventListener("mousemove", (e) => {
  const moveX = (e.clientX / window.innerWidth - 0.5) * 20;
  const moveY = (e.clientY / window.innerHeight - 0.5) * 20;

  introContent.style.transform = `translate(${moveX}px, ${moveY}px)`;
  profileImg.style.transform = `translate(${-moveX}px, ${-moveY}px) scale(1.05)`;
});

// Reset when mouse leaves
document.addEventListener("mouseleave", () => {
  introContent.style.transform = "translate(0px, 0px)";
  profileImg.style.transform = "translate(0px, 0px) scale(1)";
});


// ========== Typed.js (with color + sliding-in text effect) ==========
const typedElement = document.querySelector(".multiple-text");
const colors = ["#ff4d5a"]; 
let colorIndex = 0;

const typed = new Typed(".multiple-text", {
  strings: ["Software Engineer", "Frontend Developer", "Web Designer"],
  typeSpeed: 80,
  backSpeed: 60,
  backDelay: 2000,
  loop: true,
  preStringTyped: () => {
    // Trigger slide animation before typing each phrase
    typedElement.classList.remove("slide-in");
    void typedElement.offsetWidth; // Reset animation
    typedElement.classList.add("slide-in");
  },
  onStringTyped: () => {
    // Change color after typing each phrase
    colorIndex = (colorIndex + 1) % colors.length;
    typedElement.style.color = colors[colorIndex];
  }
});


// ========== Scroll Reveal ==========
ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal(".intro-content, .heading", { origin: "top" });
ScrollReveal().reveal(".intro-img, .skills-box, .projects-box, .experience-box", { origin: "bottom" });
ScrollReveal().reveal(".achievements-box, .education-box", { origin: "right" });
ScrollReveal().reveal(".contact form", { origin: "left" });
