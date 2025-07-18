function checkOrientation() {
  const warning = document.getElementById("landscape-warning");
  warning.style.display = window.innerWidth < window.innerHeight ? "flex" : "none";
}

window.addEventListener("resize", checkOrientation);
window.addEventListener("load", () => {
  checkOrientation();

  const video = document.getElementById("loading-video");
  const startBtn = document.getElementById("start-btn");
  const loadingScreen = document.getElementById("loading-screen");
  const formSection = document.getElementById("form-section");

  startBtn.addEventListener("click", () => {
    startBtn.style.display = "none";
    video.muted = false;
    video.play().then(() => {
      // Wait for video to finish
      video.onended = () => {
        loadingScreen.style.display = "none";
        formSection.style.display = "flex";
      };
    }).catch((err) => {
      alert("Browser tidak mengizinkan video diputar dengan suara. Silakan klik ulang.");
      startBtn.style.display = "block";
    });
  });
});

document.getElementById("birthday-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const birthdate = document.getElementById("birthdate").value;
  if (!name || !birthdate) {
    alert("Nama dan Tanggal Lahir wajib diisi!");
    return;
  }
  localStorage.setItem("userName", name);
  localStorage.setItem("userBirth", birthdate);
  window.location.href = "game.html";
});
