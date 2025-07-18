const name = localStorage.getItem("userName");
const birthdate = new Date(localStorage.getItem("userBirth"));
const today = new Date();

const title = document.getElementById("birthday-title");
const countdown = document.getElementById("birthday-countdown");

title.innerText = `🎉 HAPPY BIRTHDAY ${name?.toUpperCase() || ""} 🎉`;

const birthThisYear = new Date(today.getFullYear(), birthdate.getMonth(), birthdate.getDate());

if (
  today.getMonth() === birthdate.getMonth() &&
  today.getDate() === birthdate.getDate()
) {
  countdown.innerText = "Selamat! Hari ini adalah ulang tahunmu 🎂";
} else {
  const timeDiff = birthThisYear - today;
  const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  const nextBirthday = days < 0 ? 365 + days : days;

  countdown.innerText = `Ulang tahunmu dalam ${nextBirthday} hari. Sampai hari itu tiba, kamu belum bisa lanjut ke kejutan selanjutnya!`;
}
