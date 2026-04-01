const weddingDate = new Date("2026-09-21T16:30:00").getTime();

const countdownElements = {
    days: document.getElementById("days"),
    hours: document.getElementById("hours"),
    minutes: document.getElementById("minutes"),
    seconds: document.getElementById("seconds")
};

function updateCountdown() {
    const now = Date.now();
    const distance = weddingDate - now;

    if (distance <= 0) {
        countdownElements.days.textContent = "00";
        countdownElements.hours.textContent = "00";
        countdownElements.minutes.textContent = "00";
        countdownElements.seconds.textContent = "00";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / 1000 / 60) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    countdownElements.days.textContent = String(days).padStart(2, "0");
    countdownElements.hours.textContent = String(hours).padStart(2, "0");
    countdownElements.minutes.textContent = String(minutes).padStart(2, "0");
    countdownElements.seconds.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

const rsvpForm = document.getElementById("rsvpForm");

rsvpForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const guestName = document.getElementById("guestName").value.trim();
    const attendance = document.getElementById("attendance").value;

    if (!guestName || !attendance) {
        alert("Please fill in your name and attendance response.");
        return;
    }

    alert(`${guestName}, thank you for your response: ${attendance}.`);
    rsvpForm.reset();
});

const fadeItems = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

fadeItems.forEach((item) => observer.observe(item));
