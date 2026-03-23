const translations = {
    ko: {
        "role": "시스템 & 보안 중심 1인 풀스택 개발자",
        "nav-exp": "주요 프로젝트", "nav-sec": "보안 및 연구", "nav-others": "기타 프로젝트", "nav-edu": "학력 및 수상",
        "section-exp": "EXPERIENCE", "section-sec": "SECURITY & RESEARCH",
        "side-lang": "보유 언어", "side-tech": "기술 및 OS",
        "tag-solo": "SOLO", "tag-team": "TEAM",
        "p1-sub": "사설 GPU 서버 자원 배정 시스템 (Full-stack)",
        "p1-l1": "Docker 컨테이너 활용 유저별 독립 연산 환경 및 전체 인프라 직접 구축",
        "p2-sub": "MSA 기반 서비스 리빌딩 및 아키텍처 개선",
        "p2-l1": "컴포넌트 분리를 통한 시스템 안정성 최적화 및 확장성 확보",
        "p-ssit-sub": "파이썬 프로그래밍 및 데이터 구조 강의",
        "p-ssit-l1": "SSIT 교육 프로그램 내 파이썬 실무 응용 커리큘럼 설계 및 멘토링",
        "sec-1": "AI 시뮬레이션 파이프라인 취약점 식별 및 Kali Linux 기반 보안 감사",
        "sec-2": "교내 알고랩(AlgoLab) 서버 모의 해킹 및 상세 보안 리포트 제시",
        "o1-desc": "칼만 필터를 도입하여 BLE 신호 노이즈를 정제한 정밀 거리 측정 앱 구현",
        "o2-desc": "라즈베리파이 기반의 개인용/공용 파일 스토리지 인프라 풀스택 구축",
        "o3-desc": "LLM API를 연동한 사용자 맞춤형 여행 일정 생성 모바일 앱 개발",
        "edu-univ": "국민대학교 (Kookmin University)",
        "edu-major": "소프트웨어학부 소프트웨어전공 (3학년 재학)",
        "award-1-title": "제8회 국민대학교 알고리즘 대회 장려상",
        "award-1-org": "국민대학교 소프트웨어융합대학"
    },
    en: {
        "role": "Solo Full-stack System & Security Developer",
        "nav-exp": "Projects", "nav-sec": "Security", "nav-others": "Others", "nav-edu": "Education",
        "section-exp": "EXPERIENCE", "section-sec": "SECURITY & RESEARCH",
        "side-lang": "LANGUAGES", "side-tech": "TECH & OS",
        "tag-solo": "SOLO", "tag-team": "TEAM",
        "p1-sub": "Private GPU resource management (Solo Full-stack)",
        "p1-l1": "Built entire infra and isolated environments using Docker",
        "p2-sub": "Service separation & Re-architecting",
        "p2-l1": "Optimized stability via decoupling core components",
        "p-ssit-sub": "Python Programming & Data Structure Instructor",
        "p-ssit-l1": "Designed Python curriculum and mentored students within SSIT",
        "sec-1": "Pipeline vulnerability auditing using Kali Linux",
        "sec-2": "AlgoLab penetration testing & issued security reports",
        "o1-desc": "Applied Kalman Filter for noise reduction in BLE signal tracking",
        "o2-desc": "Full-stack implementation of Raspberry Pi based storage system",
        "o3-desc": "Developed AI travel planner mobile app with LLM API",
        "edu-univ": "Kookmin University",
        "edu-major": "B.S. in Software (Junior Year)",
        "award-1-title": "8th Kookmin Univ Algorithm Contest - Honorable Mention",
        "award-1-org": "College of Software Convergence"
    }
};

let currentLang = 'ko';

function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) { el.innerText = translations[currentLang][key]; }
    });
    document.getElementById('lang-btn-text').innerText = currentLang === 'ko' ? 'English' : '한국어';
}

function toggleLanguage() { 
    currentLang = currentLang === 'ko' ? 'en' : 'ko'; 
    updateContent(); 
}

function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    document.getElementById('theme-icon').className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

window.onload = () => {
    updateContent();
    if (localStorage.getItem('theme') === 'dark') toggleDarkMode();
};