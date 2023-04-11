const observer = new IntersectionObserver((entries, classList) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("hidden");
    } else {
      entry.target.classList.add("hidden");
    }
  });
});

export default observer;
