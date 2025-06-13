const timeEl = document.getElementById('time');
const ampmEl = document.getElementById('ampm');
const dateEl = document.getElementById('date');
const formatToggle = document.getElementById('formatToggle');
const themeToggle = document.getElementById('themeToggle');

let use24Hour = false;

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  let ampm = '';

  if (!use24Hour) {
    ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
  }

  timeEl.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  ampmEl.textContent = use24Hour ? '' : ampm;

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  dateEl.textContent = now.toLocaleDateString(undefined, options);
}

function pad(n) {
  return n < 10 ? '0' + n : n;
}


formatToggle.addEventListener('change', () => {
  use24Hour = formatToggle.checked;
  updateClock();
});


themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  themeToggle.textContent = document.body.classList.contains('light') ? '☀️' : '🌙';
});

setInterval(updateClock, 1000);
updateClock();
