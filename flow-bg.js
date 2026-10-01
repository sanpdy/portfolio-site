(function () {
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const root = document.documentElement;
  const canvas = document.createElement("canvas");
  canvas.setAttribute("aria-hidden", "true");
  canvas.className = "flow-bg";
  document.body.classList.add("has-flow-bg");
  document.body.prepend(canvas);

  const ctx = canvas.getContext("2d");
  const seed = Math.random() * 10000;
  let W = 0;
  let H = 0;
  let t = 0;
  let particles = [];
  let dark = root.dataset.theme === "dark";

  // Runs at 30 fps; per-step constants are doubled so the look matches a 60 fps run.
  const STEP_MS = 1000 / 30;
  const STEP = 2;
  const MIN_PARTICLES = 500;
  let maxCount = 4200;
  let scale = 1;
  let lastDraw = 0;
  let slowFrames = 0;
  let stopped = false;

  // Fewer particles up front on phones and low-core devices.
  const coarse = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
  const lowCores = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
  if (coarse || lowCores) maxCount = 1800;

  new MutationObserver(() => {
    dark = root.dataset.theme === "dark";
    ctx.clearRect(0, 0, W, H);
  }).observe(root, { attributes: true, attributeFilter: ["data-theme"] });

  function rand() {
    return Math.random();
  }

  function spawn(p) {
    p.x = rand() * W;
    p.y = rand() * H;
    p.age = 0;
    p.life = 160 + rand() * 600;
    p.hue = 195 + rand() * 100;
    return p;
  }

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);
    const count = Math.max(MIN_PARTICLES, Math.round(Math.min(maxCount, (W * H) / 300) * scale));
    particles = Array.from({ length: count }, () => spawn({}));
  }

  // Layered sine waves -> an angle at every point; particles follow it.
  function fieldAngle(x, y) {
    const s = 0.0085;
    const nx = (x - W / 2) * s;
    const ny = (y - H / 2) * s;
    const waves =
      Math.sin(nx * 1.4 + seed * 0.17) +
      Math.cos(ny * 1.15 - seed * 0.09) +
      0.75 * Math.sin((nx + ny) * 0.72) +
      0.55 * Math.cos((nx - ny) * 0.48 + seed);
    const radial = Math.atan2(y - H / 2, x - W / 2);
    const ripple = Math.sin(Math.hypot(nx, ny) * 1.6 - t * 0.0025);
    return waves * 1.25 + radial * 0.18 + ripple * 0.55;
  }

  // If frames keep taking too long, thin out the particles; give up if it still struggles.
  function watchPerformance(dt) {
    if (dt > 50) slowFrames++;
    else slowFrames = Math.max(0, slowFrames - 1);
    if (slowFrames < 20) return;
    slowFrames = 0;
    if (particles.length > MIN_PARTICLES) {
      scale *= 0.65;
      resize();
    } else {
      stopped = true;
      canvas.remove();
      document.body.classList.remove("has-flow-bg");
    }
  }

  function frame(now) {
    if (stopped) return;
    requestAnimationFrame(frame);
    if (document.hidden) {
      lastDraw = 0;
      return;
    }
    if (now - lastDraw < STEP_MS - 2) return;
    if (lastDraw) watchPerformance(now - lastDraw);
    lastDraw = now;
    t += STEP;

    // Erase a little of the old trail each drawn frame (keeps the canvas transparent).
    ctx.globalCompositeOperation = "destination-out";
    ctx.fillStyle = "rgba(0,0,0,0.07)";
    ctx.fillRect(0, 0, W, H);
    ctx.globalCompositeOperation = "source-over";

    ctx.lineWidth = 0.75;
    ctx.lineCap = "round";
    const sat = dark ? 75 : 60;
    const light = dark ? 68 : 42;
    const maxAlpha = dark ? 0.2 : 0.17;

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      const px = p.x;
      const py = p.y;
      const a = fieldAngle(px, py);
      const v = 0.55 + 0.25 * Math.sin((px + py) * 0.004 + seed);
      p.x += Math.cos(a) * v * STEP;
      p.y += Math.sin(a) * v * STEP;
      p.age += STEP;

      if (p.x < -5 || p.x > W + 5 || p.y < -5 || p.y > H + 5 || p.age > p.life) {
        spawn(p);
        continue;
      }

      const fadeIn = Math.min(1, p.age / 30) * Math.min(1, (p.life - p.age) / 30);
      ctx.strokeStyle = "hsla(" + (p.hue + 20 * Math.sin(p.age * 0.01 + seed)) + "," + sat + "%," + light + "%," + maxAlpha * fadeIn + ")";
      ctx.beginPath();
      ctx.moveTo(px, py);
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
    }
  }

  window.addEventListener("resize", resize);
  resize();
  requestAnimationFrame(frame);
})();
