// === Falling Hearts Background ===
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "❤️";
  document.body.appendChild(heart);

  // Posisi acak di atas layar
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 2 + "s";
  heart.style.fontSize = 15 + Math.random() * 25 + "px";

  // Hapus setelah selesai jatuh
  setTimeout(() => {
    heart.remove();
  }, 5000);
}

// Buat hati baru setiap 200ms
setInterval(createHeart, 200);

// === Glow & Exploding Hearts on Click ===
const bigHeart = document.querySelector(".big-heart");

bigHeart.addEventListener("click", (e) => {
  bigHeart.classList.add("glow");

  // buat partikel love kecil meledak
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement("div");
    particle.classList.add("explode-heart");

    // posisi awal di tengah love besar
    const rect = bigHeart.getBoundingClientRect();
    particle.style.left = rect.left + rect.width / 2 + "px";
    particle.style.top = rect.top + rect.height / 2 + "px";

    // arah acak love kecil
    const x = (Math.random() - 0.5) * 300 + "px";
    const y = (Math.random() - 0.5) * 300 + "px";
    particle.style.setProperty("--x", x);
    particle.style.setProperty("--y", y);

    document.body.appendChild(particle);
    setTimeout(() => particle.remove(), 1000);
  }

  // hapus glow setelah 2 detik
  setTimeout(() => bigHeart.classList.remove("glow"), 2000);
});
