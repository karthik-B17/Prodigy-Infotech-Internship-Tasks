// Animated navigation highlighting and hamburger for small screens
document.querySelectorAll("nav ul li a").forEach((link) => {
  link.addEventListener("click", function (e) {
    // For smooth scroll
    e.preventDefault();
    let sec = document.querySelector(this.getAttribute("href"));
    if (sec) sec.scrollIntoView({ behavior: "smooth" });
    document
      .querySelectorAll("nav ul li a")
      .forEach((a) => a.classList.remove("active"));
    this.classList.add("active");
    // For mobile nav hide
    document.getElementById("nav-toggle").checked = false;
  });
});
