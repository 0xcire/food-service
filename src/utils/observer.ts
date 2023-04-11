const observer = new IntersectionObserver((entries, classList) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // entry.target.classList.add("animate");
      console.log("intersecting...");
      entry.target.classList.remove("hidden");
    } else {
      entry.target.classList.add("hidden");
      console.log("not intersecting...");
    }
  });
});

export default observer;
