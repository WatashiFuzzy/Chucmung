const canvas = document.getElementById('fireworks');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function createParticle(x, y) {
  let color = `hsl(${Math.floor(random(0, 360))}, 100%, 60%)`;
  particles.push({
    x: x,
    y: y,
    radius: random(2, 4),
    color: color,
    velocityX: random(-5, 5),
    velocityY: random(-5, 5),
    life: 100
  });
}

function updateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p, index) => {
    p.x += p.velocityX;
    p.y += p.velocityY;
    p.life--;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
    if (p.life <= 0) particles.splice(index, 1);
  });
}

function loop() {
  updateParticles();
  requestAnimationFrame(loop);
}

// Tạo pháo hoa tự động mỗi 300ms
setInterval(() => {
  const x = random(0, canvas.width);
  const y = random(0, canvas.height / 2); // chỉ nổ ở nửa trên
  for (let i = 0; i < 30; i++) {
    createParticle(x, y);
  }
}, 300);

loop();

// Popup gửi lời chúc
function sendWish() {
  const wish = prompt("Nhập lời chúc của bạn cho các bạn đậu cấp 3:");
  if (wish) {
    alert("Lời chúc của bạn: " + wish + "\nĐã gửi thành công!");
  }
}

