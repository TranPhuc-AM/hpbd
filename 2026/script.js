"use strict";

/* ===========================================================
   CẤU HÌNH — CHỈ CẦN SỬA PHẦN NÀY
   =========================================================== */
const CONFIG = {
  // Lời chào (hiện ở trang đầu, trang tuổi và trang cuối)
  greeting: "Happy Bird Day",

  // Tên người nhận, hiện dưới tiêu đề trang đầu (có thể để trống "")
  name: "Ca Dao",

  // NGÀY SINH ĐÚNG — hãy sửa cho đúng người nhận (đang là ngày mẫu)
  birthday: { day: 13, month: 11, year: 2004 },

  // (Tuỳ chọn) tự đặt 3 đáp án sai, dạng ddmmyy, ví dụ ["011004", "100104", "010105"].
  // Để null thì trang tự tạo 3 đáp án sai trông giống đáp án đúng.
  decoys: ["131004", "111104", "131140"],

  // null = tự tính tuổi theo ngày hôm nay; hoặc ghi số, ví dụ 25
  ageOverride: null,

  // Dòng chữ đậm dưới "Happy Bird Day" ở trang tuổi
  caption: "My Favorite Person!",

  // Dòng chữ nhỏ ở đáy con tem
  stampText: "Bird Day",

  // Các câu chúc ngắn trôi từ dưới lên ở trang Make a Wish.
  // Thêm / bớt / sửa tuỳ ý — mỗi dòng một câu, nên giữ dưới khoảng 45 ký tự.
  floatWishes: [
    "Chúc mừng sinh nhật!",
    "Chúc bạn luôn khỏe mạnh và bình an",
    "Mỗi ngày đều là một ngày vui",
    "Mong mọi ước mơ của bạn thành sự thật",
    "Tuổi mới, niềm vui mới",
    "Chúc bạn thành công trên mọi con đường",
    "Luôn mỉm cười thật tươi nhé",
    "Hạnh phúc ở lại bên bạn thật lâu",
    "Công việc thuận lợi, tiền vào như nước",
    "Chúc bạn luôn được yêu thương",
    "Giữ mãi trái tim trẻ trung nhé",
    "Bình yên theo bạn mỗi bước đi",
    "Gặp thật nhiều may mắn mỗi ngày",
    "Mong bạn dám mơ và dám làm",
    "Mọi điều tốt đẹp đang chờ phía trước",
    "Chúc bạn một sinh nhật thật rực rỡ",
    "Cười thật nhiều, lo âu thật ít",
    "Tỏa sáng theo cách của riêng bạn",
    "Một năm mới thật nhiều niềm vui",
    "Luôn có người ở bên khi bạn cần",
    "Bạn xứng đáng với điều tuyệt vời nhất",
    "Công việc suôn sẻ, lòng nhẹ tênh",
    "Mong bạn ngủ ngon và mơ đẹp",
    "Mỗi sớm mai đều đáng mong chờ",
    "Tình yêu đến đúng người, đúng lúc",
    "Chúc bạn tuổi mới thật phơi phới",
    "Cứ đi đi, vũ trụ sẽ lo phần còn lại",
    "Khỏe người, khỏe lòng, khỏe cả ví",
    "Mong bạn luôn là phiên bản vui nhất",
    "Dám theo đuổi, ước mơ sẽ thành thật",
    "Nhiều bất ngờ dễ thương đang đến",
    "Chúc bạn một năm thật bình yên",
    "Đừng quên tự thưởng cho mình nhé",
    "Thanh xuân của bạn thật đẹp",
    "Vạn sự như ý, tâm an vui",
    "Mong bạn luôn tìm thấy niềm vui nhỏ",
    "Ước gì được nấy nhé",
    "Chúc bạn luôn đủ đầy và an yên",
    "Mọi nỗ lực đều sẽ nở hoa",
    "Thêm một tuổi, thêm một chút tuyệt vời",
    "Gió thuận chiều, đường thênh thang",
    "Chúc bạn yêu đời và được yêu",
    "Happy Birthday to you!",
    "Make a wish and believe",
    "Dream big, shine bright",
    "Wishing you endless joy",
  ],

  // 3 tấm thiệp. photo = đường dẫn ảnh (đặt ảnh vào thư mục images/).
  // Nếu chưa có ảnh, trang sẽ tự hiện hình trái tim thay thế.
  cards: [
    {
      title: "Thành công",
      photo: "2026/images/su-nghiep.jpg",
      wish: "Chúc bạn tui tuổi mới luôn tràn đầy năng lượng, tự tin trên hành trình chinh phục những mục tiêu của mình. Mong mọi nỗ lực đều được đền đáp xứng đáng, mọi dự định đều thuận lợi và ngày càng tỏa sáng, thành công theo cách riêng của mình.",
    },
    {
      title: "Tuổi trẻ",
      photo: "2026/images/tuoi-tre.jpg",
      wish: "Chúc ní tuổi mới luôn xinh đẹp, rạng rỡ. Mong ní có đủ sức khỏe để tận hưởng cuộc sống, đủ mạnh mẽ để vượt qua thử thách và đủ dịu dàng để cảm nhận những điều tốt đẹp xung quanh. Hãy luôn là phiên bản tuyệt vời nhất của chính mình nhé!",
    },
    {
      title: "Hạnh phúc",
      photo: "2026/images/tinh-cam.jpg",
      wish: "Chúc bạn tui luôn được yêu thương, trân trọng và nâng niu. Mong rằng trên hành trình sắp tới, ní sẽ không bỏ lỡ người chân thành với mình, có được mối quan hệ luôn ấm áp và đầy niềm vui. Chúc trái tim ní lúc nào cũng bình yên và hạnh phúc.",
    },
  ],
};

/* Hộp thoại khi chọn sai — mỗi ô (theo vị trí 1 → 4) một bộ lời nhắc riêng,
   bấm sai nhiều lần thì hiện lần lượt từng câu */
const WRONG = [
  [
    "Ồ, ngày này nghe quen quen nhưng chưa phải đâu nhé!",
    "Vẫn chưa đúng, nhớ lại ngày ní chào đời xem nào.",
    "Ô này vẫn sai nha, đừng vội mà!",
  ],
  [
    "Hmm, ní nhớ nhầm rồi đó.",
    "Sai rồi, ní đang giởn hả?",
    "Chưa phải đâu, nhìn kỹ từng con số nhé.",
  ],
  [
    "Nhìn thì giống mà không phải đâu!",
    "Các con số đang lắc đầu với ô này.",
    "Ô này vẫn không phải, hít một hơi rồi chọn lại nào.",
  ],
  [
    "Ôi không, sinh nhật mà quên ngày sinh sao?",
    "Ô này cũng sai nốt, đừng bỏ cuộc nhé!",
    "Vũ trụ lại lắc đầu, chọn ô khác thử xem.",
  ],
];
const TEXT = {
  wrongTitle: "! Sai rồi !",
  rightTitle: "Yayy, đúng rồi !!",
  rightMsg: "Chính xác ngày sinh rồi.",
};

/* ===========================================================
   TIỆN ÍCH
   =========================================================== */
const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const later = (fn, ms) => setTimeout(fn, reduceMotion ? 0 : ms);

function h(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function reveal(el, show = true) {
  el.classList.toggle("is-hidden", !show);
}

function showScene(id) {
  $$(".scene").forEach((s) => s.classList.toggle("active", s.id === id));
  window.scrollTo(0, 0);
}

// Chữ cái đầu của mỗi từ viết hoa → kiểu thư pháp (.sw), phần còn lại giữ nguyên
function swashText(el, text) {
  el.textContent = "";
  const words = text.split(" ");
  words.forEach((word, i) => {
    const first = word.charAt(0);
    if (first && first !== first.toLowerCase() && first === first.toUpperCase()) {
      el.append(h("span", "sw", first), document.createTextNode(word.slice(1)));
    } else {
      el.append(document.createTextNode(word));
    }
    if (i < words.length - 1) el.append(document.createTextNode(" "));
  });
}

(function validateConfig() {
  const { day, month, year } = CONFIG.birthday;
  const d = new Date(year, month - 1, day);
  if (d.getFullYear() !== year || d.getMonth() !== month - 1 || d.getDate() !== day) {
    console.warn("CONFIG.birthday không phải là một ngày hợp lệ:", CONFIG.birthday);
  }
})();

/* ===========================================================
   LỜI CHÀO + CÁC TIÊU ĐỀ
   =========================================================== */
(function renderTitles() {
  const words = CONFIG.greeting.trim().split(/\s+/);
  document.title = CONFIG.greeting;
  $("#hero-title").setAttribute("aria-label", CONFIG.greeting);
  swashText($("#hero-l1"), words[0]);
  swashText($("#hero-l2"), words.slice(1).join(" "));
  swashText($("#age-greeting"), CONFIG.greeting);
  $("#wish-cap").textContent = CONFIG.greeting;
  $("#hero-name").textContent = CONFIG.name;
  $("#age-caption").textContent = CONFIG.caption;
  $$("[data-swash]").forEach((el) => swashText(el, el.textContent));
})();

/* ===========================================================
   PHÁO GIẤY
   =========================================================== */
const confetti = (() => {
  const cv = $("#confetti");
  const ctx = cv.getContext("2d");
  const COLORS = ["#4a1216", "#7b2a30", "#b5545c", "#e7c9a5", "#d9b36b"];
  let W = 0, H = 0, parts = [], raf = 0;

  function size() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth;
    H = window.innerHeight;
    cv.width = W * dpr;
    cv.height = H * dpr;
    cv.style.width = W + "px";
    cv.style.height = H + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  window.addEventListener("resize", size);
  size();

  function burst(x, y, n = 80) {
    if (reduceMotion) return;
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2;
      const v = 4 + Math.random() * 9;
      parts.push({
        x, y,
        vx: Math.cos(a) * v,
        vy: Math.sin(a) * v - 6,
        g: 0.22 + Math.random() * 0.1,
        w: 6 + Math.random() * 6,
        h: 4 + Math.random() * 5,
        r: Math.random() * 6.28,
        vr: (Math.random() - 0.5) * 0.3,
        c: COLORS[i % COLORS.length],
        life: 0,
        max: 90 + Math.random() * 60,
        round: Math.random() < 0.3,
      });
    }
    if (!raf) raf = requestAnimationFrame(tick);
  }

  function tick() {
    ctx.clearRect(0, 0, W, H);
    parts = parts.filter((p) => p.life < p.max && p.y < H + 30);
    for (const p of parts) {
      p.life++;
      p.vx *= 0.985;
      p.vy += p.g;
      p.x += p.vx;
      p.y += p.vy;
      p.r += p.vr;
      ctx.save();
      ctx.globalAlpha = Math.min(1, (p.max - p.life) / 30);
      ctx.translate(p.x, p.y);
      ctx.rotate(p.r);
      ctx.fillStyle = p.c;
      if (p.round) {
        ctx.beginPath();
        ctx.arc(0, 0, p.w / 2, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      }
      ctx.restore();
    }
    raf = parts.length ? requestAnimationFrame(tick) : 0;
    if (!parts.length) ctx.clearRect(0, 0, W, H);
  }

  return { burst };
})();

/* ===========================================================
   MÀN 1 — HAPPY BIRD DAY
   =========================================================== */
$("#btn-next-1").addEventListener("click", () => showScene("scene-key"));

/* ===========================================================
   MÀN 2 — CHỌN NGÀY SINH (4 ô đáp án, dạng ddmmyy)
   =========================================================== */
const B = CONFIG.birthday;
const pad2 = (n) => String(n).padStart(2, "0");
const daysIn = (m, y) => new Date(y, m, 0).getDate();
const toCode = (d, m, y) => pad2(d) + pad2(m) + pad2(y % 100);

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Tự tạo 3 đáp án sai trông "giống thật" từ ngày sinh đúng
function makeDecoys(correct) {
  const { day, month, year } = B;
  const pool = new Set();

  // 1) Đảo hai chữ số liền nhau (vd 010104 → 011004), chỉ giữ ngày hợp lệ
  for (let i = 0; i < 5; i++) {
    const c = correct.split("");
    [c[i], c[i + 1]] = [c[i + 1], c[i]];
    const s = c.join("");
    const d = +s.slice(0, 2);
    const m = +s.slice(2, 4);
    if (m >= 1 && m <= 12 && d >= 1 && d <= daysIn(m, year)) pool.add(s);
  }

  // 2) Lệch ngày / tháng / năm — luôn tạo được, luôn hợp lệ
  const d2 = day < daysIn(month, year) ? day + 1 : day - 1;
  pool.add(toCode(d2, month, year));

  const m2 = month === 12 ? 11 : month + 1;
  pool.add(toCode(Math.min(day, daysIn(m2, year)), m2, year));

  const y2 = year + 1 <= new Date().getFullYear() ? year + 1 : year - 1;
  pool.add(toCode(Math.min(day, daysIn(month, y2)), month, y2));

  pool.delete(correct);
  return shuffle([...pool]).slice(0, 3);
}

function pickDecoys(correct) {
  const custom = (CONFIG.decoys || []).filter((c) => /^\d{6}$/.test(c) && c !== correct);
  return custom.length >= 3 ? custom.slice(0, 3) : makeDecoys(correct);
}

const correctCode = toCode(B.day, B.month, B.year);
const choices = shuffle([correctCode, ...pickDecoys(correctCode)]);
const choicesBox = $("#choices");
const tries = choices.map(() => 0);
let solved = false;
let lastFocus = null;

const modal = $("#modal");
const modalBtn = $("#modal-btn");

function openModal(ok, title, msg) {
  modal.dataset.kind = ok ? "ok" : "bad";
  $("#modal-use").setAttribute("href", ok ? "#i-happy" : "#i-sad");
  $("#modal-title").textContent = title;
  $("#modal-msg").textContent = msg;
  modalBtn.textContent = ok ? "Next" : "Back";
  lastFocus = document.activeElement;
  modal.hidden = false;
  modalBtn.focus();
}

function closeModal() {
  modal.hidden = true;
  if (lastFocus && lastFocus.focus) lastFocus.focus();
}

modalBtn.addEventListener("click", () => {
  if (modal.dataset.kind === "ok") {
    modal.hidden = true;
    showScene("scene-age");
    startAge();
  } else {
    closeModal();
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.hidden && modal.dataset.kind === "bad") closeModal();
});

choices.forEach((code, i) => {
  const btn = h("button", "choice", code);
  btn.type = "button";
  btn.setAttribute("aria-label", `Ngày sinh ${code.slice(0, 2)} ${code.slice(2, 4)} ${code.slice(4)}`);
  choicesBox.append(btn);

  btn.addEventListener("click", () => {
    if (solved) return;

    if (code === correctCode) {
      solved = true;
      choicesBox.classList.add("solved");
      openModal(true, TEXT.rightTitle, TEXT.rightMsg);
      later(() => {
        const r = $(".modal-card").getBoundingClientRect();
        confetti.burst(r.left + r.width / 2, r.top + r.height / 2, 80);
      }, 250);
      return;
    }

    const list = WRONG[i % WRONG.length];
    const msg = list[tries[i] % list.length];
    tries[i]++;
    btn.classList.add("tried");
    openModal(false, TEXT.wrongTitle, msg);
  });
});

/* ===========================================================
   MÀN 3 — SỐ TUỔI + BÁNH KEM
   =========================================================== */
const btnNext2 = $("#btn-next-2");

function calcAge(b, now = new Date()) {
  let age = now.getFullYear() - b.year;
  const m = now.getMonth() + 1;
  const hadBirthday = m > b.month || (m === b.month && now.getDate() >= b.day);
  if (!hadBirthday) age--;
  return Math.max(0, age);
}

function countUp(el, to) {
  if (reduceMotion || to <= 0) { el.textContent = String(to); return; }
  const dur = 1400;
  const t0 = performance.now();
  const step = (t) => {
    const p = Math.min(1, (t - t0) / dur);
    el.textContent = String(Math.round(to * (1 - Math.pow(1 - p, 3))));
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function cakeSVG(uid) {
  const CREAM = "#f6ead6", DARK = "#4a1216", MID = "#6e252b", CARAMEL = "#c58a4a";
  const beads = (x0, step, n, cy, r) =>
    Array.from({ length: n }, (_, i) =>
      `<circle cx="${x0 + step * i}" cy="${cy}" r="${r}" fill="${CREAM}"/>`).join("");

  const candle = (x, d) => `
    <g>
      <rect x="${x - 4}" y="46" width="8" height="38" rx="2" fill="${CREAM}" stroke="${DARK}" stroke-width="1.5"/>
      <rect x="${x - 4}" y="54" width="8" height="4" fill="${CARAMEL}"/>
      <rect x="${x - 4}" y="64" width="8" height="4" fill="${CARAMEL}"/>
      <rect x="${x - 4}" y="74" width="8" height="4" fill="${CARAMEL}"/>
      <line x1="${x}" y1="46" x2="${x}" y2="40" stroke="#2a0b0e" stroke-width="1.6" stroke-linecap="round"/>
      <g class="flame" style="--d:${d}s">
        <circle cx="${x}" cy="32" r="18" fill="url(#glow-${uid})"/>
        <path d="M${x} 19 C${x + 3} 26 ${x + 7} 29 ${x + 7} 34 A7 7 0 0 1 ${x - 7} 34 C${x - 7} 29 ${x - 3} 26 ${x} 19 Z" fill="#f4a03a"/>
        <path d="M${x} 28 C${x + 2} 32 ${x + 4} 34 ${x + 4} 36.5 A4 4 0 0 1 ${x - 4} 36.5 C${x - 4} 34 ${x - 2} 32 ${x} 28 Z" fill="#ffe08a"/>
      </g>
    </g>`;

  return `
  <svg viewBox="0 0 300 290" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
    <defs>
      <radialGradient id="glow-${uid}">
        <stop offset="0" stop-color="#f4a03a" stop-opacity=".55"/>
        <stop offset="1" stop-color="#f4a03a" stop-opacity="0"/>
      </radialGradient>
    </defs>

    <!-- đĩa -->
    <ellipse cx="150" cy="264" rx="142" ry="18" fill="#efe6d8" stroke="${DARK}" stroke-width="2.5"/>
    <ellipse cx="150" cy="260" rx="120" ry="11" fill="#fbfaf7"/>

    <!-- tầng dưới -->
    <rect x="40" y="186" width="220" height="74" rx="12" fill="${DARK}"/>
    <rect x="40" y="216" width="220" height="9" fill="${CREAM}"/>
    ${beads(58, 21, 10, 252, 3.5)}
    <path d="M0 8 C-14 -2 -14 -12 -7 -12 C-3 -12 0 -9 0 -6 C0 -9 3 -12 7 -12 C14 -12 14 -2 0 8 Z"
          transform="translate(150 237)" fill="${CREAM}"/>
    ${beads(51, 22, 10, 188, 11)}

    <!-- tầng giữa -->
    <rect x="72" y="128" width="156" height="64" rx="11" fill="${MID}"/>
    <rect x="72" y="158" width="156" height="8" fill="${CREAM}"/>
    ${beads(90, 20, 7, 180, 3)}
    ${beads(83, 22, 7, 130, 10)}

    <!-- tầng trên -->
    <rect x="104" y="80" width="92" height="54" rx="10" fill="${DARK}"/>
    <rect x="104" y="104" width="92" height="7" fill="${CREAM}"/>
    ${beads(120, 15, 5, 123, 2.6)}

    <!-- nến -->
    ${candle(124, 0)}
    ${candle(150, 0.3)}
    ${candle(176, 0.6)}

    ${beads(114, 18, 5, 82, 9)}
  </svg>`;
}

$("#cake").innerHTML = cakeSVG("age");
$("#wish-cake").innerHTML = cakeSVG("wish");

function startAge() {
  const age = CONFIG.ageOverride != null ? CONFIG.ageOverride : calcAge(CONFIG.birthday);
  countUp($("#age-num"), age);
  later(() => { reveal($("#cake-hint")); reveal(btnNext2); }, 2200);
}

$("#cake").addEventListener("click", () => {
  const cake = $("#cake");
  const blown = cake.classList.toggle("blown");
  $("#cake-hint").textContent = blown
    ? "Hoan hô! Giờ đến phần quà nhé."
    : "Chạm vào bánh để thổi nến";
  reveal($("#cake-hint"));
  reveal(btnNext2);
  if (blown) {
    const r = cake.getBoundingClientRect();
    confetti.burst(r.left + r.width / 2, r.top + r.height * 0.25, 90);
  }
});

btnNext2.addEventListener("click", () => {
  showScene("scene-cards");
  startCards();
});

/* ===========================================================
   MÀN 4 — 3 TẤM THIỆP + CON TEM
   =========================================================== */
const btnNext3 = $("#btn-next-3");

const PLACEHOLDER =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">' +
    '<rect width="100" height="100" fill="#f0dcd0"/>' +
    '<path d="M50 74 C20 54 24 30 40 30 C46 30 50 35 50 38 C50 35 54 30 60 30 C76 30 80 54 50 74Z" fill="#4a1216"/>' +
    "</svg>"
  );

const opened = new Set();
let cardsBuilt = false;
let nextShown = false;

function buildCards() {
  const wrap = $("#cards");
  wrap.innerHTML = "";

  CONFIG.cards.forEach((c, i) => {
    const card = h("div", "card");
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-pressed", "false");
    card.setAttribute("aria-label", `Thiệp ${c.title}`);

    const inner = h("div", "card-inner");

    // Mặt trước
    const front = h("div", "face front");
    const frontTitle = h("span", "card-title");
    swashText(frontTitle, c.title);
    front.append(h("span", "orn", "♥"), frontTitle, h("span", "card-tap", "Chạm để mở"));

    // Mặt sau: tên thiệp + con tem + lời chúc
    const back = h("div", "face back");
    const backTitle = h("p", "back-title");
    swashText(backTitle, c.title);

    const stamp = h("div", "stamp");
    const stampIn = h("div", "stamp-in");
    const img = h("img", "stamp-img");
    img.alt = `Ảnh ${c.title}`;
    img.addEventListener("error", () => { img.src = PLACEHOLDER; }, { once: true });
    img.src = c.photo;
    stampIn.append(img, h("span", "stamp-val", CONFIG.stampText));
    stamp.append(stampIn);

    back.append(backTitle, stamp, h("p", "card-wish", c.wish));

    inner.append(front, back);
    card.append(inner);
    wrap.append(card);

    const toggle = () => {
      const open = card.classList.toggle("open");
      card.setAttribute("aria-pressed", String(open));
      if (open) {
        opened.add(i);
        const r = card.getBoundingClientRect();
        confetti.burst(r.left + r.width / 2, r.top + r.height / 2, 60);
        // Mở đủ 3 thiệp → hiện Next để sang trang Make a Wish
        if (opened.size === CONFIG.cards.length && !nextShown) {
          nextShown = true;
          later(() => {
            reveal(btnNext3);
            window.scrollTo({behavior: reduceMotion ? "auto" : "smooth" });
          }, 1400);
        }
      }
    };
    card.addEventListener("click", toggle);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
    });
  });
  cardsBuilt = true;
}

function startCards() {
  if (!cardsBuilt) buildCards();
  // Các thiệp xuất hiện lần lượt (phóng to từ ô nhỏ)
  $$(".card").forEach((card, i) => later(() => card.classList.add("in"), 500 + i * 900));
  later(() => reveal($("#cards-hint")), 500);
}

btnNext3.addEventListener("click", () => {
  showScene("scene-wish");
  startWishFloat();
  later(() => {
    confetti.burst(window.innerWidth * 0.3, window.innerHeight * 0.5, 90);
    confetti.burst(window.innerWidth * 0.7, window.innerHeight * 0.5, 90);
  }, 700);
});

/* ===========================================================
   MÀN 5 — MAKE A WISH
   =========================================================== */
$("#make-wish").addEventListener("click", (e) => confetti.burst(e.clientX, e.clientY, 80));

/* ===========================================================
   CÂU CHÚC TRÔI TỪ DƯỚI LÊN (trang Make a Wish)
   Chia màn hình thành các làn dọc; mỗi làn có tốc độ cố định và chỉ thả
   câu mới khi câu trước đã trôi đủ xa → các câu không bao giờ chồng nhau.
   =========================================================== */
const floatBox = $("#wish-float");
const FLOAT_DURS = [13, 16, 19, 10];   // giây để trôi hết màn hình, mỗi làn một tốc độ
let floatStarted = false;
let floatBag = [];
let floatBusy = [];                // mỗi làn: thời điểm (ms) được thả câu kế tiếp
let floatLanes = 0;
 
const laneCount = (w) => Math.max(2, Math.min(6, Math.round(w / 230)));
 
function nextFloatWish() {
  if (!floatBag.length) floatBag = shuffle(CONFIG.floatWishes);
  return floatBag.pop();
}
 
// progress: 0..1 = đã trôi sẵn bao nhiêu (dùng để rải câu ngay khi vào trang)
// staticTop: số px → đặt đứng yên (chế độ giảm chuyển động)
function placeWish(lane, laneW, H, progress = 0, staticTop = null) {
  const dur = FLOAT_DURS[lane % FLOAT_DURS.length];
  const el = h("p", "wf-item", nextFloatWish());
  el.style.width = laneW * 0.86 + "px";
  el.style.left = lane * laneW + Math.random() * laneW * 0.14 + "px";
  el.style.setProperty("--o", (0.33 + Math.random() * 0.12).toFixed(2));  // 0.33 – 0.45 (càng thấp càng trong suốt)
  el.style.setProperty("--s", (0.92 + Math.random() * 0.22).toFixed(2));
  el.style.setProperty("--dur", dur + "s");
  el.style.setProperty("--rise", -(H + 120) + "px");
  if (progress) el.style.animationDelay = -(progress * dur) + "s";
  floatBox.append(el);
 
  if (staticTop !== null) {
    el.classList.add("static");
    el.style.top = staticTop + "px";
    return;
  }
  el.addEventListener("animationend", () => el.remove());
  const frac = (el.offsetHeight + 90) / (H + 120);   // quãng cần trôi trước khi thả câu kế
  floatBusy[lane] = performance.now() + Math.max(0, frac - progress) * dur * 1000;
}
 
function floatTick() {
  if (!$("#scene-wish").classList.contains("active")) { floatStarted = false; return; }
  const W = floatBox.clientWidth;
  const H = floatBox.clientHeight;
  const lanes = laneCount(W);
  if (lanes !== floatLanes) { floatLanes = lanes; floatBusy = new Array(lanes).fill(0); }
 
  const now = performance.now();
  const free = [];
  floatBusy.forEach((t, i) => { if (t <= now) free.push(i); });
  if (free.length && floatBox.childElementCount < 30) {
    placeWish(free[Math.floor(Math.random() * free.length)], W / lanes, H);
  }
  setTimeout(floatTick, 450 + Math.random() * 450);
}
 
function startWishFloat() {
  if (floatStarted) return;
  floatStarted = true;
  const W = floatBox.clientWidth;
  const H = floatBox.clientHeight;
  floatLanes = laneCount(W);
  floatBusy = new Array(floatLanes).fill(0);
  const laneW = W / floatLanes;
 
  if (reduceMotion) {
    for (let l = 0; l < floatLanes; l++) {
      for (let k = 0; k < 3; k++) placeWish(l, laneW, H, 0, (k + 0.15 + Math.random() * 0.5) * (H / 3));
    }
    return;
  }
  // Rải sẵn mỗi làn một câu ở các độ cao khác nhau để vào trang là thấy ngay
  for (let l = 0; l < floatLanes; l++) placeWish(l, laneW, H, 0.1 + Math.random() * 0.65);
  setTimeout(floatTick, 400);
}
