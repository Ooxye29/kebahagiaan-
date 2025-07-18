function checkOrientation() {
  const warning = document.getElementById("landscape-warning");
  if (window.innerWidth < window.innerHeight) {
    warning.style.display = "flex";
  } else {
    warning.style.display = "none";
  }
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
    video.play();

    video.addEventListener("ended", () => {
      loadingScreen.style.display = "none";
      formSection.style.display = "flex";
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
