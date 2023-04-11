const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.target.id === "hero") {
      if (!entry.isIntersecting) {
        document.querySelector(".back-to-top")?.classList.add("reveal");
        return;
      } else {
        document.querySelector(".back-to-top")?.classList.remove("reveal");
        return;
      }
    }

    if (entry.isIntersecting) {
      entry.target.classList.remove("hidden");
    } else {
      entry.target.classList.add("hidden");
    }
  });
});

export default observer;
