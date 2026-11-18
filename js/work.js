// 포트폴리오 데이터: 작업을 추가하려면 이 배열에 항목을 넣는다
// device: 'desktop' 은 브라우저 창 프레임, 'mobile' 은 스마트폰 프레임
// url / period / tools 가 비어 있으면 상세 보기에서 버튼·자리 표시로 대신한다
// period / tools: 문자열 또는 [{ group, items: [...] }] 형태로 분야별로 묶을 수 있다
// highlight: 꼭 알리고 싶은 기술을 강조 박스로 보여준다 (없으면 생략)
// plan / figma: 기획서·피그마 링크 (있으면 '기획서 보기'·'피그마 보기' 버튼이 생긴다)
const WORKS = [
  {
    title: '나라바이오 리뉴얼',
    label: 'eunkkong-spec.github.io/modoossak',
    device: 'desktop',
    card: 'images/work/narabio-card.jpg',
    detail: 'images/work/narabio-detail.jpg',
    summary: '영농인과 텃밭 사용자를 나눠 안내하는 제독 유황 기술 기업 홈페이지',
    tags: ['기업 홈페이지', '영상 히어로', '농사로 API 연동'],
    highlight: {
      title: '농사로 Open API 연동',
      text: '농촌진흥청 농사로 API에서 주간농사정보와 병해충정보를 받아와 보여줍니다. GitHub Actions가 API 키를 Secrets에 숨긴 채 데이터를 미리 받아 JSON으로 저장하기 때문에, 키를 노출하지 않고 최신 농사 정보를 제공합니다.',
    },
    points: [
      '3장 영상 슬라이드 히어로에 검색창과 해시태그 바로가기를 두어 첫 화면에서 바로 정보를 찾도록 구성',
      '전문 영농인 / 가정 텃밭으로 사용자 유형별 동선을 나눔',
      '작물별 병해충 정보로 작물에서 시작하는 정보 구조 설계',
      '인증서 24개 · 시험성적서 45개 등 숫자로 기술 신뢰를 전달',
      '현장 재배 이야기와 모두싹TV로 실제 사례 중심의 설득',
      '대리점 찾기 · 상담 전화로 구매와 상담 전환 유도',
    ],
    url: 'https://eunkkong-spec.github.io/modoossak/index.html',
    plan: 'https://canva.link/30r5sohb8wwri9m',
    figma: 'https://www.figma.com/design/gRToSkcA3JE2qqWW8wDwxt/%EB%82%98%EB%9D%BC%EB%B0%94%EC%9D%B4%EC%98%A4?node-id=0-1',
    period: [
      { group: '전체', items: ['2026.09.30 ~ 2026.10.22 (실작업 14일, 주말·공휴일 제외)'] },
      { group: '기획·시안', items: ['09.30 ~ 10.18'] },
      { group: '코딩·배포', items: ['10.19 ~ 10.22'] },
    ],
    tools: [
      { group: '기획·디자인', items: ['Canva', 'Figma'] },
      { group: '영상', items: ['AI 영상 생성', 'Gemini'] },
      { group: '개발·배포', items: ['VS Code', 'GitHub Pages', 'GitHub Actions'] },
      { group: 'AI 활용', items: ['Claude', 'ChatGPT', 'Gemini'] },
    ],
  },
  {
    title: 'HARU 하루 영양제',
    label: 'eunkkong-spec.github.io/haru',
    device: 'desktop',
    card: 'images/work/haru-card.jpg',
    detail: 'images/work/haru-detail.jpg',
    summary: '아침·낮·밤 루틴으로 영양제를 고르는 벤토 그리드 브랜드 사이트',
    tags: ['브랜드 사이트', '벤토 그리드', '실시간 인터랙션'],
    points: [
      '첫 화면 전체를 벤토 그리드로 설계해 제품 · 추천 · 할인 · 후기 · 상담을 한눈에 배치',
      "'하루' 브랜드명을 Morning · Day · Night 시간대 루틴으로 풀어냄",
      '실시간 시계와 현재 시간대 제품에 NOW 표시가 붙는 인터랙션',
      '맞춤 추천으로 고민형 사용자를 제품까지 안내',
      'HARU NOTE 영양 콘텐츠로 체류 유도',
      '구매하기 버튼으로 정식 쇼핑몰에 판매를 연결하는 구조',
    ],
    url: 'https://eunkkong-spec.github.io/haru/',
    figma: 'https://www.figma.com/design/z6fAFDxNRcAKclQBM6GOCD/HARU-%EC%98%81%EC%96%91%EC%A0%9C---%EB%A9%94%EC%9D%B8-%EC%99%80%EC%9D%B4%EC%96%B4%ED%94%84%EB%A0%88%EC%9E%84?node-id=0-1',
    period: [
      { group: '기획', items: ['2026.10 (A·B·C안 구상)'] },
      { group: '제작', items: ['2026.11.04 ~ 11.09'] },
    ],
    tools: [
      { group: '디자인', items: ['Figma'] },
      { group: '개발·배포', items: ['HTML · CSS', 'JavaScript', 'GitHub Pages'] },
      { group: 'AI 활용', items: ['Google Flow', 'Gemini'] },
    ],
  },
  {
    title: '머물나무',
    label: 'eunkkong-spec.github.io/meomul-namu',
    device: 'desktop',
    card: 'images/work/meomulnamu-card.jpg',
    detail: 'images/work/meomulnamu-detail.jpg',
    summary: '책 모임과 작가와의 만남으로 이웃이 머무는 동네책방 커뮤니티 사이트',
    tags: ['커뮤니티', '일러스트 영상 히어로', '프로그램 신청'],
    points: [
      '수채화 일러스트 영상과 플레이어 바 · 배경음악으로 머물고 싶은 분위기를 먼저 전달',
      '이주의 책 나누기에서 모임 신청 · 공감 한 줄 남기기로 참여형 동선 구성',
      '작가와의 만남 행사 안내와 남은 자리 표시로 예약 유도',
      '나무 선반 위에 책을 놓는 연출을 페이지 전체에 반복해 책방 정체성 강화',
      '머물나무 카페 메뉴와 이달의 소식으로 오프라인 공간의 활동을 기록',
      '운영 정보와 오시는 길 지도로 방문 유도',
    ],
    highlight: {
      title: 'AI로 만든 8막 영상 히어로',
      text: '나무 한 그루와 세 세대를 담은 8막 콘티를 짜고, Gemini로 장면 그림을, Google Flow로 장면 영상을 만들었습니다. 장면을 이어 붙이고 1080p로 화질을 높여 풀스크린 히어로로 올렸고, 음원은 협업으로 받아 소리 버튼으로 켜도록 했습니다.',
    },
    url: 'https://eunkkong-spec.github.io/meomul-namu/index.html',
    period: '2026.10.30 ~ 11.09 (11일)',
    tools: [
      { group: '기획', items: ['Notion', '8막 스토리보드'] },
      { group: '디자인', items: ['Figma', '로고 · 포스터 · 굿즈 직접 디자인'] },
      { group: '개발·배포', items: ['HTML · CSS (VS Code)', 'GitHub Pages'] },
      { group: 'AI 활용', items: ['Google Flow (영상)', 'Gemini (이미지)', 'Claude (영상 편집 보조)'] },
      { group: '사운드·홍보', items: ['음원 협업', 'Instagram 릴스'] },
    ],
  },
  {
    title: '슈가퐁당 일체형 리뉴얼',
    label: 'eunkkong-spec.github.io/sugar-pongdang',
    device: 'mobile',
    card: 'images/work/sugarpongdang-card.jpg',
    detail: 'images/work/sugarpongdang-card.jpg',
    summary: '모바일 쇼핑 경험을 PC까지 이어가는 수제 케이크 전문점 일체형 쇼핑몰',
    tags: ['쇼핑몰', '일체형 레이아웃', '특가·쿠폰 프로모션'],
    points: [
      'PC에서도 모바일 화면과 리얼 포토 리뷰 패널을 함께 보여주는 일체형 레이아웃',
      '카카오 1초 로그인 띠배너와 아이콘 카테고리로 빠른 가입 · 탐색',
      '주말특가 카운트다운과 신규 가입 쿠폰으로 구매를 서두르게 하는 장치',
      '신상품 · 인기상품 · 스타 케이크 가로 슬라이드로 상품 큐레이션',
      '포토후기 이벤트와 고객 후기로 신뢰 확보',
      '카톡 상담 · 단체 대량 주문 문의로 상담 전환',
    ],
    highlight: {
      title: 'React 컴포넌트 · 디자인과 코드 연결',
      text: '화면을 React 컴포넌트로 나누고, 상품·후기·쿠폰 데이터는 별도 파일에서 한 번에 수정합니다. CSS 변수를 피그마 변수와 같은 이름으로 맞춰 디자인과 코드가 함께 움직입니다.',
    },
    url: 'https://eunkkong-spec.github.io/sugar-pongdang/',
    plan: 'https://canva.link/yaadxs193qj04z9',
    figma: 'https://www.figma.com/design/vBb3R9sgZ9J06401v0GMWz/%EC%8A%88%EA%B0%80%ED%90%81%EB%8B%B9?node-id=0-1',
    period: '2026.11.07 ~ 11.09',
    tools: [
      { group: '기획', items: ['카페24 템플릿 벤치마킹', 'Canva', 'Notion'] },
      { group: '디자인', items: ['Figma (모바일 420px UI)'] },
      { group: '개발·배포', items: ['React (Vite)', 'CSS 변수', 'GitHub Pages'] },
      { group: 'AI 활용', items: ['Claude Code'] },
    ],
  },
  {
    title: 'The Rolling Stones 팬 페이지',
    label: 'eunkkong-spec.github.io/rolling-stone',
    device: 'desktop',
    card: 'images/work/rollingstone-card.jpg',
    detail: 'images/work/rollingstone-detail.jpg',
    summary: '구르는 돌이 검게 칠해지는 이야기로 Paint It, Black을 풀어낸 인터랙티브 팬 페이지',
    tags: ['인터랙티브 스토리텔링', '가로 넘김 11장', '유튜브 음악 재생'],
    points: [
      '발자국 → 구르는 돌 → 검게 칠하기로 이어지는 11장 가로 넘김 스토리로 곡 제목을 장면으로 연출',
      '돌을 누르면 검게 칠해지고, 믹 재거가 페인트 통을 걷어차면 Paint It, Black이 재생되는 클릭 인터랙션',
      '쏟아진 페인트가 대문을 타고 흘러내려 화면 전체를 검게 덮는 장면 전환',
      '사진 · 스티커 · 테이프 콜라주로 록 밴드의 거친 감성을 표현',
      '처음엔 순서대로 끝까지 보게 하고, 다 본 뒤에는 페이지 목록으로 바로 이동하도록 설계',
      '소리 켜기/끄기 선택, 발자국 · 웃음 효과음, 유튜브 영상은 모달로 재생',
    ],
    url: 'https://eunkkong-spec.github.io/rolling-stone/',
    figma: 'https://www.figma.com/design/cojt81uJEd0bYi3DdoFkXD/%EA%B5%AC%EB%A5%B4%EB%8A%94%EB%8F%8C?node-id=0-1',
    period: '총 3일',
    tools: [
      { group: '기획·디자인', items: ['Canva', 'Figma', 'Illustrator'] },
      { group: '음악·영상', items: ['YouTube 임베드'] },
      { group: '개발·배포', items: ['VS Code', 'GitHub Pages'] },
      { group: 'AI 활용', items: ['Claude', 'ChatGPT'] },
    ],
  },
];

const grid = document.querySelector('.work-grid');
const modal = document.querySelector('.work-modal');
let openIndex = 0;

function frameMarkup(work, src, lazy) {
  const img = `<img src="${src}" alt=""${lazy ? ' loading="lazy"' : ''}>`;
  if (work.device === 'mobile') {
    return `<div class="work-phone"><div class="work-screen">${img}</div></div>`;
  }
  return `
    <div class="work-frame">
      <div class="work-frame-bar" aria-hidden="true"><i></i><i></i><i></i><span class="work-frame-url">${work.label}</span></div>
      <div class="work-screen">${img}</div>
    </div>`;
}

function tagsMarkup(tags) {
  return tags.map(t => `<li>${t}</li>`).join('');
}

// 마우스를 올렸을 때 스크롤할 거리와 시간 (길이에 비례)
function measure(screen) {
  const img = screen.querySelector('img');
  const dist = Math.max(0, img.offsetHeight - screen.clientHeight);
  screen.style.setProperty('--dist', `${-dist}px`);
  screen.style.setProperty('--dur', `${Math.max(2, dist / 450)}s`);
}

WORKS.forEach((work, i) => {
  const li = document.createElement('li');
  li.className = `work-card work-card--${work.device}`;
  li.innerHTML = `
    <div class="work-thumb">${frameMarkup(work, work.card, true)}</div>
    <h3><button class="work-open" type="button" aria-haspopup="dialog">${work.title}</button></h3>
    <p class="work-summary">${work.summary}</p>
    <ul class="work-tags">${tagsMarkup(work.tags)}</ul>`;
  grid.appendChild(li);

  const screen = li.querySelector('.work-screen');
  const img = screen.querySelector('img');
  if (img.complete) measure(screen);
  img.addEventListener('load', () => measure(screen));
  li.querySelector('.work-open').addEventListener('click', () => openModal(i));
});

window.addEventListener('resize', () => grid.querySelectorAll('.work-screen').forEach(measure));

// ---------- 상세 보기 ----------
const q = sel => modal.querySelector(sel);

// 작업 기간·사용 툴: 배열이면 분야별 줄로, 문자열이면 그대로
function fillRows(el, value, placeholder) {
  if (Array.isArray(value)) {
    el.innerHTML = value
      .map(t => `<span class="tool-row"><b>${t.group}</b>${t.items.join(' · ')}</span>`)
      .join('');
  } else {
    el.textContent = value || placeholder;
  }
}

function fillModal(i) {
  const work = WORKS[i];
  openIndex = i;

  modal.classList.toggle('is-mobile', work.device === 'mobile');
  q('.work-frame-url').textContent = work.label;
  const shot = q('.work-modal-scroll img');
  shot.src = work.detail;
  shot.alt = `${work.title} 전체 페이지 화면`;
  q('.work-modal-scroll').scrollTop = 0;

  q('.work-modal-count').textContent = `${String(i + 1).padStart(2, '0')} / ${String(WORKS.length).padStart(2, '0')}`;
  q('.work-modal-title').textContent = work.title;
  q('.work-modal-summary').textContent = work.summary;
  q('.work-modal-tags').innerHTML = tagsMarkup(work.tags);
  fillRows(q('.work-modal-period'), work.period, '[작업 기간]');
  fillRows(q('.work-modal-tools'), work.tools, '[사용 툴]');

  const highlight = q('.work-modal-highlight');
  highlight.hidden = !work.highlight;
  if (work.highlight) {
    highlight.querySelector('strong').textContent = work.highlight.title;
    highlight.querySelector('p').textContent = work.highlight.text;
  }
  q('.work-modal-points').innerHTML = work.points.map(p => `<li>${p}</li>`).join('');

  const visit = q('.work-modal-visit');
  visit.hidden = !work.url;
  if (work.url) visit.href = work.url;

  const plan = q('.work-modal-plan');
  plan.hidden = !work.plan;
  if (work.plan) plan.href = work.plan;

  const figma = q('.work-modal-figma');
  figma.hidden = !work.figma;
  if (work.figma) figma.href = work.figma;
}

function openModal(i) {
  fillModal(i);
  document.documentElement.classList.add('modal-open');
  modal.showModal();
}

modal.addEventListener('close', () => document.documentElement.classList.remove('modal-open'));
q('.work-modal-close').addEventListener('click', () => modal.close());
// 바깥 어두운 영역을 누르면 닫기
modal.addEventListener('click', e => { if (e.target === modal) modal.close(); });

modal.querySelectorAll('.work-modal-nav button').forEach(btn => {
  btn.addEventListener('click', () => {
    fillModal((openIndex + Number(btn.dataset.dir) + WORKS.length) % WORKS.length);
  });
});
