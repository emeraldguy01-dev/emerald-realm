document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.style.transform = "scale(0.95)";
    setTimeout(() => {
      btn.style.transform = "scale(1)";
    }, 120);
  });
});

window.addEventListener("scroll", () => {
  const mountains = document.querySelector(".mountains");
  mountains.style.transform = `translateY(${window.scrollY * 0.08}px)`;
});
