const video = document.querySelector('.hero-video');
const scrollHint = document.querySelector('.hero-scroll');
const REVEAL_AT = 14.5;
const MAX_BOOST = 5;      // 스크롤 시 최대 추가 배속 (1 + 5 = 6배속)
const BOOST_DECAY = 0.9;  // 프레임당 감속 비율

let boost = 0;
let finished = false;

// 영상이 끝나기 전까지 페이지 스크롤을 잠근다
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
window.scrollTo(0, 0);
document.documentElement.classList.add('is-locked');

function reveal() {
  document.body.classList.add('is-revealed');
}

function unlock() {
  if (finished) return;
  finished = true;
  boost = 0;
  reveal();
  video.playbackRate = 1;
  scrollHint.style.setProperty('--progress', 1);
  // 트랙패드 관성 스크롤로 바로 넘어가지 않도록 잠시 뒤 해제
  setTimeout(() => document.documentElement.classList.remove('is-locked'), 600);
}

function fail() {
  video.hidden = true;
  unlock();
}

function accelerate(amount) {
  if (finished) return;
  boost = Math.min(boost + amount, MAX_BOOST);
}

function tick() {
  if (finished) return;
  boost *= BOOST_DECAY;
  if (boost < 0.02) boost = 0;
  const rate = 1 + boost;
  if (Math.abs(video.playbackRate - rate) > 0.05 || (boost === 0 && video.playbackRate !== 1)) {
    video.playbackRate = rate;
  }
  if (video.duration) scrollHint.style.setProperty('--progress', video.currentTime / video.duration);
  requestAnimationFrame(tick);
}

function onWheel(e) {
  if (finished) return;
  e.preventDefault();
  accelerate(Math.min(Math.abs(e.deltaY), 200) / 60);
}

let touchY = null;
function onTouchStart(e) { touchY = e.touches[0].clientY; }
function onTouchMove(e) {
  if (finished) return;
  e.preventDefault();
  const y = e.touches[0].clientY;
  if (touchY !== null) accelerate(Math.abs(touchY - y) / 25);
  touchY = y;
}

function onKey(e) {
  if (finished) return;
  if ([' ', 'ArrowDown', 'PageDown', 'End'].includes(e.key)) {
    e.preventDefault();
    accelerate(2);
  }
}

if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
  fail();
} else {
  video.addEventListener('timeupdate', () => {
    if (video.currentTime >= REVEAL_AT) reveal();
  });
  video.addEventListener('ended', unlock);
  video.addEventListener('error', fail);
  video.querySelector('source').addEventListener('error', fail);

  window.addEventListener('wheel', onWheel, { passive: false });
  window.addEventListener('touchstart', onTouchStart, { passive: true });
  window.addEventListener('touchmove', onTouchMove, { passive: false });
  window.addEventListener('keydown', onKey);
  scrollHint.addEventListener('click', e => {
    if (!finished) { e.preventDefault(); accelerate(3); }
  });

  video.play().then(() => requestAnimationFrame(tick)).catch(fail);
}
