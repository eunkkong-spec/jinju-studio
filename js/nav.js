const header = document.querySelector('.header');
const heroSection = document.querySelector('.hero');
const navLinks = [...document.querySelectorAll('.gnb a')];
const indicator = document.querySelector('.gnb-indicator');
const pearlNav = document.querySelector('.pearl-nav');
const pearlLinks = [...pearlNav.querySelectorAll('a')];

let current = null;

// 현재 섹션 표시: 캡슐 메뉴의 보라색 배경 + 진주 점
function moveIndicator() {
  const href = `#${current}`;
  pearlLinks.forEach(a => a.setAttribute('aria-current', a.getAttribute('href') === href));

  const link = navLinks.find(a => a.getAttribute('href') === href);
  navLinks.forEach(a => a.setAttribute('aria-current', a === link));
  if (!link || !header.classList.contains('is-floating')) {
    indicator.style.setProperty('--on', 0);
    return;
  }
  indicator.style.setProperty('--x', `${link.offsetLeft}px`);
  indicator.style.setProperty('--w', `${link.offsetWidth}px`);
  indicator.style.setProperty('--on', 1);
}

// 히어로를 거의 지나면 따라다니는 메뉴로 전환
function onScroll() {
  const floating = window.scrollY > heroSection.offsetHeight - 120;
  pearlNav.classList.toggle('is-visible', floating);
  if (floating !== header.classList.contains('is-floating')) {
    header.classList.toggle('is-floating', floating);
    moveIndicator();
  }
}

// 화면 가운데 줄에 걸친 섹션을 현재 섹션으로 본다
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) current = entry.target.id;
    else if (entry.target.id === current) current = null;
  });
  moveIndicator();
}, { rootMargin: '-45% 0px -54% 0px' });

navLinks.forEach(a => {
  const section = document.querySelector(a.getAttribute('href'));
  if (section) sectionObserver.observe(section);
});

window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', moveIndicator);
onScroll();
