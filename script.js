// script.js
const canvas = document.getElementById('sparks');
const ctx = canvas.getContext('2d');

// Resize canvas to fill screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Optional: update size on window resize
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Simple background animation (particles effect)
function drawSpark() {
  ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const size = Math.random() * 3 + 1;

  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fill();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < 100; i++) {
    drawSpark();
  }
  requestAnimationFrame(animate);
}

animate();
