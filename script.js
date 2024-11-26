
document.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  if (window.scrollY > 0) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});



  function startCountdown(targetDate) {
    const timerElement = document.getElementById('countdown-timer');

    function updateCountdown() {
      const now = new Date().getTime();
      const timeLeft = targetDate - now;

      if (timeLeft < 0) {
        timerElement.innerHTML = "Countdown Complete!";
        clearInterval(interval);
        return;
      }

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

      timerElement.innerHTML = `
        ${days}
      `;
    }

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();
  }

  // Set the target date (YYYY-MM-DD format)
  const targetDate = new Date("2025-02-01T23:59:59").getTime();

  // Start the countdown
  startCountdown(targetDate);



 
// Referenser till knappar och språkrutan
const languageBtn = document.getElementById("languageBtn");
const languageBox = document.getElementById("languageBox");
const backBtn = document.getElementById("backBtn");

// Öppna språkrutan när språkknappen klickas
languageBtn.addEventListener("click", () => {
  languageBox.style.display = "block";
});

// Stäng språkrutan när tillbaka-knappen klickas
backBtn.addEventListener("click", () => {
  languageBox.style.display = "none";
});
