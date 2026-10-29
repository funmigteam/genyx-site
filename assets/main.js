document.documentElement.classList.add("js");

const revealed = document.querySelectorAll(".reveal");
const showAll = () => revealed.forEach((element) => element.classList.add("is-visible"));

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }
  }, { rootMargin: "0px 0px -8% 0px" });
  revealed.forEach((element) => observer.observe(element));
  setTimeout(showAll, 2500);
} else {
  showAll();
}

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});
