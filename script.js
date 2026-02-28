// ===============================
// ELEMENT
// ===============================
const canvas = document.getElementById("wheelCanvas");
const ctx = canvas.getContext("2d");
const spinBtn = document.getElementById("spinBtn");
const resultDiv = document.getElementById("result");
const levelSelect = document.getElementById("levelSelect");
const leaderboardList = document.getElementById("leaderboardList");
const leaderboardContainer = document.getElementById("leaderboardContainer");
const resetLeaderboardBtn = document.getElementById("resetLeaderboardBtn");
const fullscreenBtn = document.getElementById("fullscreenBtn");

let musicPlaying = false;
// ===============================
// GAME STATE
// ===============================
let currentRotation = 0;
let currentScore = 0;
let currentQuestionIndex = null;

let currentKolom = levelSelect.value;
let remainingQuestions = [...gameData[currentKolom]];

// ===============================
// LEADERBOARD PER KOLOM
// ===============================
let leaderboard = JSON.parse(localStorage.getItem("leaderboardData")) || {};

// Pastikan semua kolom punya array leaderboard
Object.keys(gameData).forEach(kolom => {
  if (!leaderboard[kolom]) leaderboard[kolom] = [];
});

// ===============================
// START SESSION
// ===============================
function startSession() {

  currentKolom = levelSelect.value;

  currentScore = 0;
  remainingQuestions = [...gameData[currentKolom]];
  currentRotation = 0;

  canvas.style.transform = "rotate(0deg)";
  resultDiv.innerHTML = "";

  leaderboardContainer.style.display = "none";
}

startSession();

// ===============================
// DRAW WHEEL (DINAMIS + WARNA UNIK)
// ===============================
function drawWheel() {

  const segmentCount = remainingQuestions.length;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (segmentCount === 0) return;

  const segmentAngle = 360 / segmentCount;

  remainingQuestions.forEach((q, i) => {

    const angle = i * segmentAngle;

    const hue = (i * 360 / segmentCount);
    const fillColor = `hsl(${hue}, 70%, 60%)`;

    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.arc(
      200,
      200,
      200,
      (angle * Math.PI / 180),
      ((angle + segmentAngle) * Math.PI / 180)
    );
    ctx.closePath();

    ctx.fillStyle = fillColor;
    ctx.fill();

    // garis pemisah
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#ffffff";
    ctx.stroke();

    // Font dinamis
    let fontSize;
    if (segmentCount >= 10) fontSize = 30;
    else if (segmentCount >= 6) fontSize = 36;
    else if (segmentCount >= 4) fontSize = 42;
    else fontSize = 48;

    ctx.save();
    ctx.translate(200, 200);
    ctx.rotate((angle + segmentAngle / 2) * Math.PI / 180);

    ctx.textAlign = "right";
    ctx.fillStyle = "black";
    ctx.font = `bold ${fontSize}px 'Traditional Arabic'`;
    ctx.fillText(q.text, 180, 5);

    ctx.restore();
  });
}

// ===============================
// HITUNG INDEX DARI ROTASI
// ===============================
function getIndexFromRotation(rotation) {

  const segmentCount = remainingQuestions.length;
  const segmentAngle = 360 / segmentCount;

  const normalized = rotation % 360;
  const pointerAngle = 270;

  const adjusted = (360 - normalized + pointerAngle) % 360;

  return Math.floor(adjusted / segmentAngle);
}

// ===============================
// SPIN WHEEL
// ===============================
function spinWheel() {

  if (remainingQuestions.length === 0) return;

  spinBtn.disabled = true;

  const extraSpin = 360 * 5;
  const randomOffset = Math.random() * 360;
  const finalRotation = currentRotation + extraSpin + randomOffset;

  canvas.style.transition = "transform 4s cubic-bezier(0.33,1,0.68,1)";
  canvas.style.transform = `rotate(${finalRotation}deg)`;

  setTimeout(() => {

    currentRotation = finalRotation;

    const index = getIndexFromRotation(currentRotation);

    currentQuestionIndex = index;

    showQuestion(remainingQuestions[index]);

  }, 4000);
}

// ===============================
// TAMPILKAN SOAL
// ===============================
function showQuestion(question) {

  const quizBox = document.getElementById("quizBox");
  const questionText = document.getElementById("questionText");
  const optionsBox = document.getElementById("optionsBox");

  quizBox.style.display = "block";

  questionText.textContent =
    "Arti dari kata yang ditunjuk di atas adalah ....";

  optionsBox.innerHTML = "";

  question.options.forEach(option => {

    const btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("option-btn");

    btn.onclick = () => checkAnswer(option, btn);

    optionsBox.appendChild(btn);
  });
}

// ===============================
// CEK JAWABAN
// ===============================
function checkAnswer(selected, button) {

  const buttons = document.querySelectorAll(".option-btn");
  buttons.forEach(btn => btn.disabled = true);

  if (selected === remainingQuestions[currentQuestionIndex].correct) {
    button.classList.add("correct");
    currentScore += 10;
    resultDiv.innerHTML = "✅ Benar! +10";
  } else {
    button.classList.add("wrong");
    resultDiv.innerHTML = "❌ Salah!";
  }

  setTimeout(() => {

    remainingQuestions.splice(currentQuestionIndex, 1);

    document.getElementById("quizBox").style.display = "none";

    drawWheel();
    spinBtn.disabled = false;

    checkIfFinished();

  }, 1200);
}

// ===============================
// CEK SEMUA SELESAI
// ===============================
function checkIfFinished() {

  if (remainingQuestions.length === 0) {

    setTimeout(() => {

      const name = prompt("Semua soal selesai! Masukkan Nama:");

      if (name) {
        saveScore(currentKolom, name, currentScore);
      }

      alert("Sesi selesai! Skor Anda: " + currentScore);

      leaderboardContainer.style.display = "block";
      showLeaderboard(currentKolom);

    }, 300);
  }
}

// ===============================
// LEADERBOARD
// ===============================
function saveScore(kolom, name, score) {

  leaderboard[kolom].push({ name, score });

  leaderboard[kolom].sort((a, b) => b.score - a.score);

  leaderboard[kolom] = leaderboard[kolom].slice(0, 5);

  localStorage.setItem("leaderboardData", JSON.stringify(leaderboard));
}

function showLeaderboard(kolom) {

  leaderboardList.innerHTML = "";

  leaderboard[kolom].forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${item.name} - ${item.score}`;
    leaderboardList.appendChild(li);
  });
}

function resetLeaderboard() {

  const confirmReset = confirm("Yakin ingin mengosongkan leaderboard?");

  if (!confirmReset) return;

  leaderboard[currentKolom] = [];

  localStorage.setItem("leaderboardData", JSON.stringify(leaderboard));

  showLeaderboard(currentKolom);
}

// ===============================
// EVENT LISTENER
// ===============================
spinBtn.addEventListener("click", spinWheel);

levelSelect.addEventListener("change", () => {

  // Hentikan animasi jika ada
  canvas.style.transition = "none";

  // Aktifkan kembali tombol spin
  spinBtn.disabled = false;

  // Reset sesi
  startSession();

  // Sembunyikan soal
  const quizBox = document.getElementById("quizBox");
  const questionText = document.getElementById("questionText");
  const optionsBox = document.getElementById("optionsBox");

  quizBox.style.display = "none";
  questionText.textContent = "";
  optionsBox.innerHTML = "";

  // Reset index
  currentQuestionIndex = null;

  // Reset rotasi
  canvas.style.transform = "rotate(0deg)";
  currentRotation = 0;

  // Gambar ulang wheel
  drawWheel();
});

resetLeaderboardBtn.addEventListener("click", resetLeaderboard);

// ===============================
drawWheel();

fullscreenBtn.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});
// ===== Fix 100vh Mobile Bug =====
function setRealVh() {
  let vh = window.innerHeight + "px";
  document.documentElement.style.setProperty("--vh", vh);
}

setRealVh();
window.addEventListener("resize", setRealVh);


setRealVh();
window.addEventListener("resize", setRealVh);


