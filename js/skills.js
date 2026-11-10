// 스킬 데이터: icon 이 없거나 파일을 못 불러오면 mark(글자 타일)가 대신 보인다
const SKILLS = [
  {
    category: '디자인 실무',
    items: [
      { name: 'Adobe Illustrator', icon: 'illustrator.svg', mark: 'Ai', bg: '#330000', fg: '#ff9a00', desc: '로고 · CI · BI 디자인과 옥외광고, 카탈로그 · 명함 등 인쇄물 작업의 중심 도구입니다. 패키지 디자인에도 사용합니다.', tags: ['로고', 'CI · BI', '패키지', '표지'] },
      { name: 'Adobe Photoshop', icon: 'photoshop.svg', mark: 'Ps', bg: '#001e36', fg: '#31a8ff', desc: '스마트스토어 상세페이지, 배너, 콘텐츠 이미지 제작에 사용합니다.', tags: ['상세페이지', '배너', '콘텐츠'] },
      { name: 'Adobe Premiere Pro', icon: 'premiere-pro.svg', mark: 'Pr', bg: '#00005b', fg: '#9999ff', desc: '모두싹나라 홍보 영상처럼 브랜드와 상품을 알리는 홍보 영상을 편집합니다.', tags: ['홍보 영상'] },
      { name: 'Microsoft PowerPoint', icon: 'powerpoint.svg', mark: 'P', bg: '#c43e1c', desc: '황샘바이오에서 창업 단계부터 사업 계획과 홍보에 필요한 PPT를 기획하고 디자인했습니다.', tags: ['PPT 기획', '프레젠테이션'] },
      { name: 'Microsoft Excel', icon: 'excel.svg', mark: 'X', bg: '#107c41', desc: '스마트스토어 상품 관리 등 업무 자료를 정리하고 관리합니다.', tags: ['자료 관리'] },
      { name: '한컴오피스', icon: 'hancom.svg', mark: '한', bg: '#1d64d8', desc: '한글 문서 작성과 업무용 문서 편집에 사용합니다.', tags: ['문서 작성'] },
    ],
  },
  {
    category: '프론트엔드',
    items: [
      { name: 'HTML', icon: 'html.svg', mark: 'H', bg: '#e34f26', desc: '시맨틱 태그를 활용해 문서 구조를 의미에 맞게 작성할 수 있습니다. BEM 클래스 네이밍 규칙을 적용해 코드의 가독성과 유지보수성을 높이고, 검색 엔진 최적화(SEO)와 웹 접근성을 고려한 마크업을 작성할 수 있습니다. 다양한 디스플레이 뷰포트에 대응하는 레이아웃 구조를 설계할 수 있습니다.' },
      { name: 'CSS', icon: 'css.svg', mark: 'C', bg: '#1572b6', desc: '다양한 선택자와 속성을 활용해 웹 페이지의 레이아웃과 스타일을 구현할 수 있습니다. Flexbox와 Grid로 요소를 배치하고, 미디어쿼리로 화면 크기에 대응하는 반응형 웹을 제작할 수 있습니다. 트랜지션과 애니메이션으로 사용자 인터랙션 효과를 구현할 수 있습니다.' },
      { name: 'JavaScript', icon: 'javascript.svg', mark: 'JS', bg: '#f7df1e', fg: '#000', desc: '변수, 조건문, 반복문, 함수, 배열 및 객체를 활용해 웹 페이지의 동작을 구현할 수 있습니다. DOM 조작과 이벤트 처리로 사용자 인터랙션을 제어하고, 배열 메서드로 데이터를 가공해 화면에 동적으로 반영할 수 있습니다. 기능별로 코드를 분리해 재사용성과 가독성을 고려한 구조로 작성할 수 있습니다.' },
      { name: 'React.js', icon: 'react.svg', mark: 'R', bg: '#20232a', fg: '#61dafb', desc: '컴포넌트 기반으로 UI를 설계하고 JSX로 화면을 구성할 수 있습니다. Props와 State로 컴포넌트 간 데이터를 전달하고 상태에 따라 화면을 갱신할 수 있습니다. 이벤트 처리와 Hooks로 사용자 인터랙션을 구현하며, 재사용 가능한 컴포넌트 구조를 설계할 수 있습니다.' },
      { name: 'SCSS', icon: 'scss.svg', mark: 'S', bg: '#cc6699', desc: '변수, 중첩, 믹스인, 함수 등을 활용해 반복되는 스타일 코드를 효율적으로 관리할 수 있습니다. 공통 스타일을 모듈화하고 프로젝트 규모에 맞게 파일을 분리해 유지보수하기 쉬운 스타일 구조를 구성할 수 있습니다.' },
      { name: 'jQuery', icon: 'jquery.svg', mark: '$', bg: '#0769ad', desc: '선택자와 이벤트 메서드로 DOM 요소를 제어하고 사용자 인터랙션을 구현할 수 있습니다. 플러그인을 연동해 슬라이드, 탭, 모달, 메뉴 등 기본적인 동적 UI를 제작하고 요구사항에 맞게 옵션을 조정할 수 있습니다.' },
    ],
  },
  {
    category: '개발 환경 · 형상관리',
    items: [
      { name: 'Visual Studio Code', icon: 'vscode.svg', mark: 'VS', bg: '#007acc', desc: '확장 프로그램과 터미널을 활용해 웹 개발 환경을 구성할 수 있습니다. 프로젝트 구조에 맞게 파일과 폴더를 관리하고, 코드 편집 및 디버깅 기능으로 웹 인터페이스를 구현할 수 있습니다.' },
      { name: 'Eclipse', icon: 'eclipse.svg', mark: 'E', bg: '#2c2255', desc: '프로젝트 환경에 맞게 소스 파일을 관리하고 웹 애플리케이션을 개발할 수 있습니다. GitLab 등 형상관리 도구와 연동해 소스 변경 이력을 관리하고 기존 프로젝트의 수정 및 유지보수 작업을 수행할 수 있습니다.' },
      { name: 'Git / GitHub', icon: 'git.svg', mark: 'G', bg: '#f05032', desc: 'Repository를 생성하고 Git으로 소스 코드의 변경 이력을 관리할 수 있습니다. 브랜치와 커밋으로 작업 내용을 구분하고, README를 작성해 프로젝트를 소개할 수 있습니다. GitHub Pages 등을 활용해 개인 프로젝트를 배포할 수 있습니다.' },
    ],
  },
  {
    category: '라이브러리 · 프레임워크',
    items: [
      { name: 'Bootstrap', icon: 'bootstrap.svg', mark: 'B', bg: '#7952b3', desc: '그리드 시스템과 기본 UI 컴포넌트로 웹 페이지를 빠르게 구성할 수 있습니다. 프로젝트 디자인에 맞게 기본 스타일을 수정하고 컴포넌트를 커스터마이징할 수 있습니다.' },
      { name: 'Font Awesome', icon: 'fontawesome.svg', mark: 'FA', bg: '#538dd7', desc: 'UI 목적에 맞는 아이콘을 선택해 적용할 수 있습니다. 크기, 색상, 간격 등을 조정해 화면의 정보 전달과 사용성을 높일 수 있습니다.' },
      { name: 'Slick', icon: null, mark: 'S', bg: '#3a3340', desc: '반응형 슬라이더를 구현할 수 있습니다. autoplay, navigation, dots, fade 등의 옵션을 설정하고 요구사항에 맞게 슬라이더 동작을 조정할 수 있습니다.' },
      { name: 'Swiper', icon: 'swiper.svg', mark: 'S', bg: '#6332f6', desc: '모바일 및 데스크톱 환경에 대응하는 슬라이더와 캐러셀을 구현할 수 있습니다. autoplay, pagination, navigation, loop 등의 옵션을 적용하고 이벤트와 연동해 사용자 경험을 구성할 수 있습니다.' },
    ],
  },
  {
    category: '디자인 · 영상 편집',
    items: [
      { name: 'Figma', icon: 'figma.svg', mark: 'F', bg: '#1e1e1e', desc: '웹·앱 서비스의 UI 와이어프레임과 화면 시안을 제작할 수 있습니다. 오토레이아웃, 컴포넌트, 변수 및 스타일을 활용해 일관된 디자인 시스템을 구성할 수 있습니다. 개발 단계에 필요한 화면 구조와 디자인 가이드를 정리하고 코멘트 및 피드백을 반영할 수 있습니다.' },
      { name: 'Photoshop', icon: 'photoshop.svg', mark: 'Ps', bg: '#001e36', fg: '#31a8ff', desc: '웹 디자인에 필요한 이미지 보정과 편집 작업을 수행할 수 있습니다. 이미지의 크기와 해상도를 조정하고 배경 제거, 합성, 색상 보정 등으로 웹 콘텐츠용 이미지 리소스를 제작할 수 있습니다.' },
      { name: 'Illustrator', icon: 'illustrator.svg', mark: 'Ai', bg: '#330000', fg: '#ff9a00', desc: '벡터 기반 그래픽을 제작하고 수정할 수 있습니다. 아이콘, 로고, 간단한 일러스트 등의 디자인 요소를 편집하고 웹 제작에 필요한 SVG 및 이미지 리소스를 추출할 수 있습니다.' },
      { name: 'Premiere Pro', icon: 'premiere-pro.svg', mark: 'Pr', bg: '#00005b', fg: '#9999ff', desc: '컷 편집, 자막 삽입으로 강의 영상과 홍보 영상을 제작할 수 있습니다. 색 보정과 오디오 레벨 정리로 영상 품질을 다듬고, 플랫폼별 비율과 규격에 맞게 영상을 출력할 수 있습니다.' },
    ],
  },
  {
    category: '생산성 · 협업',
    items: [
      { name: 'Notion', icon: 'notion.svg', mark: 'N', bg: '#000', desc: '프로젝트 일정과 업무 내용을 정리하고 기능 정의서, 회의록, 작업 가이드 등의 문서를 작성할 수 있습니다. 데이터베이스와 페이지로 프로젝트 진행 상황과 참고 자료를 체계적으로 관리할 수 있습니다.' },
    ],
  },
  {
    category: 'AI 활용',
    items: [
      { name: 'ChatGPT', icon: 'chatgpt.svg', mark: 'GPT', bg: '#000', desc: '프롬프트를 설계해 아이디어 발상, 문서 작성, 콘텐츠 기획 및 자료 요약을 수행할 수 있습니다. 코드 작성과 오류 원인 분석, 데이터 정리, 이미지 이해 등 다양한 작업에 AI를 활용해 문제 해결 과정을 효율화할 수 있습니다.' },
      { name: 'Claude', icon: 'claude.svg', mark: 'C', bg: '#d97757', desc: '긴 문서와 프로젝트 자료를 분석하고 요구사항 및 핵심 내용을 정리할 수 있습니다. 기획서 작성, 코드 생성 및 검토, 문장 개선 등에 활용하고 대화형 프롬프트로 결과물을 단계적으로 구체화할 수 있습니다.' },
      { name: 'Google Gemini', icon: 'gemini.svg', mark: 'G', bg: '#4285f4', desc: '텍스트, 이미지, 문서 등 다양한 입력을 바탕으로 정보를 분석하고 아이디어를 도출할 수 있습니다. 자료 요약, 콘텐츠 작성, 이미지 분석 및 코드 관련 질의에 활용할 수 있습니다.' },
    ],
  },
  {
    category: 'AI 개발 · 바이브코딩',
    items: [
      { name: 'Claude Code', icon: 'claude.svg', mark: 'CC', bg: '#d97757', desc: '자연어로 프로젝트 요구사항을 전달해 코드 작성과 수정, 기능 구현을 진행할 수 있습니다. 기존 프로젝트의 파일 구조와 코드를 분석하고 오류 수정, 리팩토링, 터미널 명령 실행 등으로 개발 작업을 보조할 수 있습니다.' },
      { name: 'Cursor', icon: 'cursor.svg', mark: 'Cu', bg: '#000', desc: 'AI 코드 편집 기능으로 프로젝트 맥락을 바탕으로 코드를 작성하고 수정할 수 있습니다. 코드 설명, 오류 분석, 파일 간 변경 작업 등을 수행하며 개발 과정을 효율적으로 관리할 수 있습니다.' },
      { name: 'GitHub Copilot', icon: 'copilot.svg', mark: 'Co', bg: '#000', desc: '코드 자동완성과 대화형 기능으로 함수 및 코드 작성, 코드 설명, 테스트 코드 작성 등을 보조할 수 있습니다. 반복 작업을 줄이고 코드 작성 속도를 높일 수 있습니다.' },
      { name: 'Lovable', icon: 'lovable.svg', mark: 'L', bg: '#f0466e', desc: '자연어 프롬프트로 웹서비스의 화면과 기본 기능을 빠르게 제작할 수 있습니다. 서비스 아이디어를 화면으로 구체화하고 생성된 결과를 수정하며 프로토타입을 구현할 수 있습니다.' },
      { name: 'Bolt.new', icon: 'bolt.svg', mark: 'b', bg: '#1389fd', desc: '브라우저 기반 개발 환경에서 프롬프트로 웹 애플리케이션의 구조와 UI를 생성할 수 있습니다. 생성된 코드를 수정하고 실행 결과를 확인하며 아이디어를 프로토타입으로 구현할 수 있습니다.' },
      { name: 'FastGPT', icon: 'fastgpt.svg', mark: 'F', bg: '#3370ff', desc: '문서와 지식 데이터를 기반으로 질의응답 서비스를 구성할 수 있습니다. 프롬프트와 지식베이스를 설정해 업무용 AI 챗봇 및 문서 검색형 응답 시스템을 구축할 수 있습니다.' },
    ],
  },
  {
    category: 'AI 디자인 · 생성',
    items: [
      { name: 'Claude Design', icon: 'claude.svg', mark: 'CD', bg: '#d97757', desc: '자연어로 디자인 요구사항을 전달해 웹 화면과 UI 시안을 구체화할 수 있습니다. 디자인 방향과 화면 구성을 탐색하고 디자인 시스템 및 시각적 결과물을 제작하는 과정에 활용할 수 있습니다.' },
      { name: 'Adobe Firefly', icon: 'firefly.svg', mark: 'Ff', bg: '#eb1000', desc: '텍스트 기반 이미지 생성과 생성형 편집 기능으로 디자인 리소스를 제작할 수 있습니다. 이미지 확장, 배경 및 오브젝트 편집 등으로 웹·마케팅 콘텐츠에 필요한 시각 자료를 보완할 수 있습니다.' },
      { name: 'Canva AI', icon: 'canva.svg', mark: 'C', bg: '#00c4cc', desc: 'AI 디자인 기능으로 프레젠테이션, 카드뉴스, 배너 및 홍보 콘텐츠를 제작할 수 있습니다. 템플릿과 편집 도구를 조합해 레이아웃과 디자인을 빠르게 구성할 수 있습니다.' },
      { name: 'Google Flow', icon: 'google.svg', mark: 'Fl', bg: '#4285f4', desc: '텍스트와 이미지 등 다양한 입력으로 영상 장면을 구성하고 AI 기반 영상 제작 작업을 진행할 수 있습니다. 장면의 흐름과 시각적 방향을 구체화해 영상 콘텐츠 제작에 활용할 수 있습니다.' },
      { name: 'Google Veo', icon: 'google.svg', mark: 'V', bg: '#4285f4', desc: '텍스트 및 이미지 기반 영상 생성 기능으로 짧은 영상 클립을 제작할 수 있습니다. 프롬프트로 장면, 카메라 움직임 및 영상 분위기를 지정해 콘텐츠 시안을 만들 수 있습니다.' },
    ],
  },
];

const stage = document.querySelector('.skills-stage');
const track = stage.querySelector('.skills-track');
const tabsWrap = document.querySelector('.skills-tabs');
const dotsWrap = document.querySelector('.skills-dots');

let cards = [];
let dots = [];
let active = 0;
let opened = false;
let seen = false;
let dragged = false;

function createCard(skill, category) {
  const li = document.createElement('li');
  li.className = 'skill-card';
  li.innerHTML = `
    <button class="skill-inner" type="button">
      <span class="skill-front">
        <span class="skill-logo">
          <span class="skill-mark"></span>
        </span>
        <strong></strong>
      </span>
      <span class="skill-back">
        <em class="skill-cat"></em>
        <strong></strong>
        <span class="skill-desc"></span>
        <span class="skill-tags"></span>
      </span>
    </button>`;

  const mark = li.querySelector('.skill-mark');
  mark.textContent = skill.mark;
  mark.style.setProperty('--mark-bg', skill.bg);
  mark.style.setProperty('--mark-fg', skill.fg || '#fff');

  if (skill.icon) {
    const img = document.createElement('img');
    img.src = `images/skills/${skill.icon}`;
    img.alt = '';
    img.addEventListener('load', () => mark.hidden = true);
    li.querySelector('.skill-logo').appendChild(img);
    img.addEventListener('error', () => img.remove());
  }

  li.querySelectorAll('strong').forEach(el => el.textContent = skill.name);
  li.querySelector('.skill-cat').textContent = category;
  li.querySelector('.skill-desc').textContent = skill.desc;

  const tags = li.querySelector('.skill-tags');
  (skill.tags || []).forEach(text => {
    const tag = document.createElement('em');
    tag.textContent = text;
    tags.appendChild(tag);
  });
  if (!tags.children.length) tags.remove();
  return li;
}

// 활성 카드 기준으로 앞뒤 거리 (양 끝이 이어진 원형)
function offsetOf(i) {
  const n = cards.length;
  let d = i - active;
  if (d > n / 2) d -= n;
  if (d < -n / 2) d += n;
  return d;
}

function layout() {
  const n = cards.length;
  const spacing = Math.min(240, stage.clientWidth * 0.3);

  cards.forEach((card, i) => {
    const d = offsetOf(i);
    const abs = Math.abs(d);
    let t, o;

    if (!opened) {
      // 펼치기 전: 가운데에 카드 덱처럼 겹쳐 있음
      t = `translateZ(-120px) rotateZ(${(i - (n - 1) / 2) * 5}deg)`;
      o = 1;
    } else {
      t = `translateX(${d * spacing}px) translateZ(${-abs * 160}px) rotateY(${-d * 32}deg)`;
      o = abs > 2 ? 0 : 1 - abs * 0.25;
    }

    card.style.setProperty('--t', t);
    card.style.setProperty('--o', o);
    card.style.setProperty('--z', n - abs);
    card.classList.toggle('is-active', d === 0);
    card.classList.toggle('is-hidden', abs > 2);
    card.querySelector('.skill-inner').tabIndex = d === 0 ? 0 : -1;
  });

  dots.forEach((dot, i) => dot.setAttribute('aria-current', i === active));
}

function go(i) {
  active = (i + cards.length) % cards.length;
  cards.forEach(card => card.classList.remove('is-flipped'));
  layout();
}

// 카드가 가운데부터 차례로 펼쳐짐
function fanOut() {
  opened = true;
  cards.forEach((card, i) => card.style.setProperty('--delay', `${Math.abs(offsetOf(i)) * 0.12}s`));
  layout();
  setTimeout(() => cards.forEach(card => card.style.removeProperty('--delay')), 1500);
}

function showCategory(index) {
  const group = SKILLS[index];

  tabsWrap.querySelectorAll('button').forEach((tab, i) => {
    tab.setAttribute('aria-selected', i === index);
    tab.tabIndex = i === index ? 0 : -1;
  });

  track.innerHTML = '';
  dotsWrap.innerHTML = '';
  cards = group.items.map(skill => createCard(skill, group.category));
  cards.forEach((card, i) => {
    track.appendChild(card);
    card.querySelector('.skill-inner').addEventListener('click', () => {
      if (dragged) return;
      if (i === active) card.classList.toggle('is-flipped');
      else go(i);
    });
  });

  dots = cards.map((card, i) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.setAttribute('aria-label', `${i + 1}번째 스킬`);
    dot.addEventListener('click', () => go(i));
    dotsWrap.appendChild(dot);
    return dot;
  });

  active = 0;
  opened = false;
  layout();
  // 겹친 상태가 먼저 그려진 뒤 펼친다
  if (seen) requestAnimationFrame(() => requestAnimationFrame(fanOut));
}

SKILLS.forEach((group, i) => {
  const tab = document.createElement('button');
  tab.type = 'button';
  tab.setAttribute('role', 'tab');
  tab.textContent = group.category;
  tab.addEventListener('click', () => showCategory(i));
  tabsWrap.appendChild(tab);
});

tabsWrap.addEventListener('keydown', e => {
  const tabs = [...tabsWrap.querySelectorAll('button')];
  const current = tabs.indexOf(document.activeElement);
  if (current < 0) return;
  let next = null;
  if (e.key === 'ArrowRight') next = (current + 1) % tabs.length;
  if (e.key === 'ArrowLeft') next = (current - 1 + tabs.length) % tabs.length;
  if (next === null) return;
  e.preventDefault();
  showCategory(next);
  tabs[next].focus();
});

document.querySelectorAll('.skills-arrow').forEach(btn => {
  btn.addEventListener('click', () => go(active + Number(btn.dataset.dir)));
});

stage.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft') { e.preventDefault(); go(active - 1); }
  if (e.key === 'ArrowRight') { e.preventDefault(); go(active + 1); }
});

// 드래그 / 스와이프로 넘기기
let startX = null;
stage.addEventListener('pointerdown', e => {
  startX = e.clientX;
  dragged = false;
});
stage.addEventListener('pointermove', e => {
  if (startX === null) return;
  if (Math.abs(e.clientX - startX) > 10) {
    dragged = true;
    stage.classList.add('is-dragging');
  }
});
window.addEventListener('pointerup', e => {
  if (startX === null) return;
  const dx = e.clientX - startX;
  if (dragged && Math.abs(dx) > 50) go(active + (dx < 0 ? 1 : -1));
  startX = null;
  stage.classList.remove('is-dragging');
  // click 이벤트가 끝난 뒤 초기화
  setTimeout(() => { dragged = false; }, 0);
});

// 섹션이 처음 보일 때 카드를 펼친다
new IntersectionObserver(([entry], observer) => {
  if (!entry.isIntersecting) return;
  seen = true;
  fanOut();
  observer.disconnect();
}, { threshold: 0.35 }).observe(stage);

window.addEventListener('resize', layout);
showCategory(0);
