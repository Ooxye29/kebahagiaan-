document.querySelectorAll(".color-box").forEach(box => {
  box.addEventListener("click", () => {
    const color = box.dataset.color;
    localStorage.setItem("favoriteColor", color);
    window.location.href = "surprise.html";
  });
});
