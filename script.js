// Animate skill bars when visible
document.addEventListener("DOMContentLoaded", () => {
  const skillLevels = document.querySelectorAll(".skill-level");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const width = bar.getAttribute("data-skill");
        bar.style.width = width;
      }
    });
  }, { threshold: 0.5 });

  skillLevels.forEach(skill => observer.observe(skill));
});
