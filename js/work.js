// 포트폴리오 데이터: 작업을 추가하려면 이 배열에 항목을 넣는다
// device: 'desktop' 은 브라우저 창 프레임, 'mobile' 은 스마트폰 프레임
// url / period / tools 가 비어 있으면 상세 보기에서 버튼·자리 표시로 대신한다
const WORKS = [
  {
    title: '나라바이오 리뉴얼',
    label: 'eunkkong-spec.github.io/modoossak',
    device: 'desktop',
    card: 'images/work/narabio-card.jpg',
    detail: 'images/work/narabio-detail.jpg',
    summary: '영농인과 텃밭 사용자를 나눠 안내하는 제독 유황 기술 기업 홈페이지',
    tags: ['기업 홈페이지', '영상 히어로', '사용자 맞춤 동선'],
    points: [
      '3장 영상 슬라이드 히어로에 검색창과 해시태그 바로가기를 두어 첫 화면에서 바로 정보를 찾도록 구성',
      '전문 영농인 / 가정 텃밭으로 사용자 유형별 동선을 나눔',
      '작물별 병해충 정보로 작물에서 시작하는 정보 구조 설계',
      '인증서 24개 · 시험성적서 45개 등 숫자로 기술 신뢰를 전달',
      '현장 재배 이야기와 모두싹TV로 실제 사례 중심의 설득',
      '대리점 찾기 · 상담 전화로 구매와 상담 전환 유도',
    ],
    url: 'https://eunkkong-spec.github.io/modoossak/index.html', period: '', tools: '',
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
    url: 'https://eunkkong-spec.github.io/haru/', period: '', tools: '',
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
    url: 'https://eunkkong-spec.github.io/meomul-namu/index.html', period: '', tools: '',
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
    url: 'https://eunkkong-spec.github.io/sugar-pongdang/', period: '', tools: '',
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
  q('.work-modal-period').textContent = work.period || '[작업 기간]';
  q('.work-modal-tools').textContent = work.tools || '[사용 툴]';
  q('.work-modal-points').innerHTML = work.points.map(p => `<li>${p}</li>`).join('');

  const visit = q('.work-modal-visit');
  visit.hidden = !work.url;
  if (work.url) visit.href = work.url;
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
