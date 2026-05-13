/* =========================
   NAVIGASI HALAMAN
========================= */

/* KE BERANDA */
function keBeranda() {
  window.location.href = "index.html";
}

/* KE HALAMAN PILIH GAME */
function mulaiGame() {
  window.location.href = "pilih.html";
}

/* KE LITERASI */
function masukLiterasi() {
  window.location.href = "literasi.html";
}

/* KE NUMERASI */
function masukNumerasi() {
  window.location.href = "numerasi.html";
}

function kePencapaian() {

  window.location.href = "pencapaian.html";

}
/* =========================
   SOUND & BACKSOUND
========================= */

const bgm = document.getElementById("bgm");
const klikSound = document.getElementById("klikSound");

const volumeSlider = document.getElementById("volumeSlider");
const volumeContainer = document.getElementById("volumeContainer");

/* PLAY CLICK SOUND */
function playSound() {
  if (klikSound) {
    klikSound.currentTime = 0;
    klikSound.play();
  }
}

/* BACKSOUND AUTO PLAY */
if (bgm) {
  bgm.volume = 0.3;

  // ambil posisi terakhir
  const lastTime = localStorage.getItem("bgmTime");

  if (lastTime) {
    bgm.currentTime = lastTime;
  }

  // play setelah klik pertama user
  document.addEventListener(
    "click",
    function () {
      bgm.play();
    },
    { once: true },
  );

  // simpan posisi lagu
  setInterval(() => {
    localStorage.setItem("bgmTime", bgm.currentTime);
  }, 1000);
}

/* TOGGLE VOLUME */
function toggleVolume() {
  if (!volumeContainer) return;

  if (volumeContainer.style.display === "block") {
    volumeContainer.style.display = "none";
  } else {
    volumeContainer.style.display = "block";
  }
}

/* SLIDER VOLUME */
if (volumeSlider) {
  volumeSlider.addEventListener("input", function () {
    if (bgm) {
      bgm.volume = parseFloat(this.value);
    }
  });
}

/* =========================
   DRAG & DROP (SEMUA SOAL)
========================= */

const dropBoxes = document.querySelectorAll(".drop-box");

const huruf = document.querySelectorAll(".huruf");

/* DRAG START */
huruf.forEach((h) => {
  h.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text", e.target.innerText);
  });
});

/* LOOP SEMUA DROP BOX */
dropBoxes.forEach((dropBox) => {
  /* AGAR BISA DROP */
  dropBox.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  /* SAAT DROP */
  dropBox.addEventListener("drop", (e) => {
    e.preventDefault();

    let data = e.dataTransfer.getData("text");

    let el = document.createElement("div");

    el.className = "huruf";

    el.innerText = data;

    dropBox.appendChild(el);
  });
});

/* =========================
   CEK JAWABAN SOAL LITERASI 1
========================= */
function cekSoal1() {
  const box = document.querySelector("#jawaban1");

  let hasil = "";

  box.querySelectorAll(".huruf").forEach((h) => {
    hasil += h.innerText;
  });

  const img = document.getElementById("popupImg");

  if (hasil === "BACA") {
    benar++;

    localStorage.setItem("benar", benar);

    img.src = "img/jwbnbenar.jpg";

    playBenar();

  } else {

    salah++;

    localStorage.setItem("salah", salah);

    img.src = "img/jwbnsalah.jpg";

    playSalah();

  }

  showPopup();

}

function showPopup() {
  document.body.classList.add("popup-active");
  document.getElementById("popupHasil").classList.remove("hidden");
}

function tutupPopup() {
  document.body.classList.remove("popup-active");
  document.getElementById("popupHasil").classList.add("hidden");
}

/* =========================
   SOAL LITERASI KE 2 
========================= */

function keSoal2() {
  window.location.href = "literasi2.html";
}

/* =========================
   CEK JAWABAN SOAL LITERASI KE 2
========================= */

function cekSoal2() {
  const box = document.querySelector("#jawaban2");

  let hasil = "";

  box.querySelectorAll(".huruf").forEach((h) => {
    hasil += h.innerText;
  });

  const img = document.getElementById("popupImg");

  if (hasil === "BUKU") {
  benar++;

    localStorage.setItem("benar", benar);

    img.src = "img/jwbnbenar.jpg";

    playBenar();

  } else {

    salah++;

    localStorage.setItem("salah", salah);

    img.src = "img/jwbnsalah.jpg";

    playSalah();

  }

  showPopup();

}

/* =========================
   KE SOAL 3
========================= */

function keSoal3() {
  window.location.href = "literasi3.html";
}

/* =========================
   CEK JAWABAN SOAL 3
========================= */
function cekSoal3() {
  const box = document.querySelector("#jawaban3");
  let hasil = "";

  box.querySelectorAll(".huruf").forEach((h) => {
    hasil += h.innerText;
  });

  const img = document.getElementById("popupImg");

  if (hasil === "MEJA") {
  benar++;

    localStorage.setItem("benar", benar);

    img.src = "img/jwbnbenar.jpg";

    playBenar();

  } else {

    salah++;

    localStorage.setItem("salah", salah);

    img.src = "img/jwbnsalah.jpg";

    playSalah();

  }

  showPopup();

}

/* =========================
   KE SOAL 4
========================= */

function keSoal4() {
  window.location.href = "literasi4.html";
}

/* =========================
   CEK JAWABAN SOAL 4
========================= */

function cekSoal4() {
  const box = document.querySelector("#jawaban4");

  let hasil = "";

  box.querySelectorAll(".huruf").forEach((h) => {
    hasil += h.innerText;
  });

  const img = document.getElementById("popupImg");

  if (hasil === "GURU") {
  benar++;

    localStorage.setItem("benar", benar);

    img.src = "img/jwbnbenar.jpg";

    playBenar();

  } else {

    salah++;

    localStorage.setItem("salah", salah);

    img.src = "img/jwbnsalah.jpg";

    playSalah();

  }

  showPopup();

}

/* =========================
   KE SOAL 5
========================= */

function keSoal5() {
  window.location.href = "literasi5.html";
}

/* =========================
   CEK JAWABAN SOAL 5
========================= */

function cekSoal5() {
  const box = document.querySelector("#jawaban5");

  let hasil = "";

  box.querySelectorAll(".huruf").forEach((h) => {
    hasil += h.innerText;
  });

  const img = document.getElementById("popupImg");

  if (hasil === "PENA") {
   benar++;

    localStorage.setItem("benar", benar);

    img.src = "img/jwbnbenar.jpg";

    playBenar();

  } else {

    salah++;

    localStorage.setItem("salah", salah);

    img.src = "img/jwbnsalah.jpg";

    playSalah();

  }

  showPopup();

}

/* =========================
   KE SOAL 6
========================= */

function keSoal6() {
  window.location.href = "literasi6.html";
}

/* =========================
   CEK JAWABAN SOAL 6
========================= */

function cekSoal6() {
  const box = document.querySelector("#jawaban6");

  let hasil = "";

  box.querySelectorAll(".huruf").forEach((h) => {
    hasil += h.innerText;
  });

  const img = document.getElementById("popupImg");

  if (hasil === "SEKOLAH") {
  benar++;

    localStorage.setItem("benar", benar);

    img.src = "img/jwbnbenar.jpg";

    playBenar();

  } else {

    salah++;

    localStorage.setItem("salah", salah);

    img.src = "img/jwbnsalah.jpg";

    playSalah();

  }

  showPopup();

}

/* =========================
   CEK JAWABAN NUMERASI 1
========================= */

function cekNumerasi1(jawaban) {
  const img = document.getElementById("popupImg");

  if (jawaban === 12) {
  benar++;

    localStorage.setItem("benar", benar);

    img.src = "img/jwbnbenar.jpg";

    playBenar();

  } else {

    salah++;

    localStorage.setItem("salah", salah);

    img.src = "img/jwbnsalah.jpg";

    playSalah();

  }

  showPopup();

}

/* =========================
   KE NUMERASI 2
========================= */

function keNumerasi2() {
  window.location.href = "numerasi2.html";
}

/* =========================
   CEK JAWABAN NUMERASI 2
========================= */

function cekNumerasi2(jawaban) {
  const img = document.getElementById("popupImg");

  if (jawaban === 5) {
  benar++;

    localStorage.setItem("benar", benar);

    img.src = "img/jwbnbenar.jpg";

    playBenar();

  } else {

    salah++;

    localStorage.setItem("salah", salah);

    img.src = "img/jwbnsalah.jpg";

    playSalah();

  }

  showPopup();

}

/* =========================
   KE NUMERASI 3
========================= */

function keNumerasi3() {
  window.location.href = "numerasi3.html";
}

/* =========================
   CEK JAWABAN NUMERASI 3
========================= */

function cekNumerasi3(jawaban) {
  const img = document.getElementById("popupImg");

  if (jawaban === 9) {
  benar++;

    localStorage.setItem("benar", benar);

    img.src = "img/jwbnbenar.jpg";

    playBenar();

  } else {

    salah++;

    localStorage.setItem("salah", salah);

    img.src = "img/jwbnsalah.jpg";

    playSalah();

  }

  showPopup();

}

/* =========================
   KE NUMERASI 4
========================= */

function keNumerasi4() {
  window.location.href = "numerasi4.html";
}

/* =========================
   CEK JAWABAN NUMERASI 4
========================= */

function cekNumerasi4(jawaban) {
  const img = document.getElementById("popupImg");

  if (jawaban === 5) {
  benar++;

    localStorage.setItem("benar", benar);

    img.src = "img/jwbnbenar.jpg";

    playBenar();

  } else {

    salah++;

    localStorage.setItem("salah", salah);

    img.src = "img/jwbnsalah.jpg";

    playSalah();

  }

  showPopup();

}

/* =========================
   KE NUMERASI 5
========================= */

function keNumerasi5() {
  window.location.href = "numerasi5.html";
}

/* =========================
   CEK JAWABAN NUMERASI 5
========================= */

function cekNumerasi5(jawaban) {
  const img = document.getElementById("popupImg");

  if (jawaban === 14) {
  benar++;

    localStorage.setItem("benar", benar);

    img.src = "img/jwbnbenar.jpg";

    playBenar();

  } else {

    salah++;

    localStorage.setItem("salah", salah);

    img.src = "img/jwbnsalah.jpg";

    playSalah();

  }

  showPopup();

}


/* =========================
   KE NUMERASI 6
========================= */

function keNumerasi6() {
  window.location.href = "numerasi6.html";
}

/* =========================
   CEK JAWABAN NUMERASI 6
========================= */

function cekNumerasi6(jawaban) {
  const img = document.getElementById("popupImg");

  if (jawaban === 7) {
  benar++;

    localStorage.setItem("benar", benar);

    img.src = "img/jwbnbenar.jpg";

    playBenar();

  } else {

    salah++;

    localStorage.setItem("salah", salah);

    img.src = "img/jwbnsalah.jpg";

    playSalah();

  }

  showPopup();

}


function showPopup() {
  document.body.classList.add("popup-active");
  document.getElementById("popupHasil").classList.remove("hidden");
}

function tutupPopup() {
  document.body.classList.remove("popup-active");
  document.getElementById("popupHasil").classList.add("hidden");
}


/* =========================
   POPUP INFO
========================= */

function info() {
  document.getElementById("infoPopup").classList.remove("hidden");
}

function tutupInfo() {
  document.getElementById("infoPopup").classList.add("hidden");
}

/* =========================
   POPUP OUT
========================= */

function popupOut() {
  document.getElementById("outPopup").classList.remove("hidden");
}

function tutupOut() {
  document.getElementById("outPopup").classList.add("hidden");
}

function keluarGame() {
  window.location.href = "about:blank";
}

function panduan() {
  alert("Halaman panduan belum dibuat");
}

/* =========================
   RESET GAME
========================= */
function resetGame() {
  localStorage.setItem("benar", 0);
  localStorage.setItem("salah", 0);
  window.location.href = "index.html";

}

/* =========================
   SCORE GAME
========================= */

let benar = localStorage.getItem("benar")
  ? parseInt(localStorage.getItem("benar"))
  : 0;

let salah = localStorage.getItem("salah")
  ? parseInt(localStorage.getItem("salah"))
  : 0;

/* =========================
   SOUND BENAR / SALAH
========================= */
const benarSound = document.getElementById("benarSound");

const salahSound = document.getElementById("salahSound");

function playBenar() {

  benarSound.currentTime = 0;

  benarSound.play();

}

function playSalah() {

  salahSound.currentTime = 0;

  salahSound.play();

}

/* =========================
   RESET JAWABAN
========================= */

function resetJawaban() {

  const box = document.getElementById("jawaban1");

  box.innerHTML = "";

}