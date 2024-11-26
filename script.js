
console.log("Scriptet laddades korrekt!");

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


/* Nyhetsbrev */
  const submitBtn = document.getElementById("submitBtn");
  const emailInput = document.getElementById("emailInput");
  const consentCheckbox = document.getElementById("consentCheckbox");
  
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Förhindrar formulärets standardbeteende
  
    if (!consentCheckbox.checked) {
      alert("Du måste godkänna användarvillkoren!");
      return;
    }
  
    emailInput.value = ""; // Rensar fältet efter skickning
    submitBtn.style.backgroundColor = "#005a2f"; // Ändrar färgen till en grönare nyans
  });
  