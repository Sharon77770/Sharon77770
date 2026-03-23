const translations = {
    ko: {
        "role": "시스템 소프트웨어 & 보안 연구 중심 풀스택 개발자",
        "nav-exp": "주요 프로젝트", "nav-sec": "보안 및 연구", "nav-others": "기타 프로젝트", "nav-edu": "학력 및 수상",
        "section-exp": "CORE ENGINEERING", "section-sec": "SECURITY & RESEARCH",
        "side-lang": "기술 스택 (Proficiency)",
        "side-tech": "프레임워크 및 인프라",

        "lang-main": "Java (Spring Boot / Thymeleaf)",
        "lang-sys": "C / C++ / Python / Shell Script",
        "lang-app": "Kotlin / C# / SQL",
        "lang-web": "JS / TS / HLSL (Shader)",
        "tech-list": "Spring Boot, Docker, Android, Linux Kernel, Kali Linux, MySQL, Git, Unity",
        "tag-solo": "SOLO", "tag-team": "TEAM", "tag-sm": "SCRUM MASTER",

        "p1-sub": "Docker 기반 사설 GPU 자원 배정 및 관리 시스템",
        "p1-desc": "연구실 내 한정된 GPU 자원을 효율적으로 분배하기 위한 컨테이너 기반 인프라 구축",
        "p1-l1": "사용자별 독립된 Docker 환경 자동 할당 및 자원 격리 로직 구현",
        "p1-l2": "GPU 독점 방지를 위한 Resource Limit 설정 및 모니터링 자동화",

        "p2-sub": "국민피드 서비스 MSA 리빌딩 및 아키텍처 개선",
        "p2-desc": "기존 모놀리식 구조의 한계를 분산 시스템 아키텍처로 해결하여 안정성 확보",
        "p2-l1": "서비스별 독립 배포 구조 설계를 통한 시스템 확장성 및 유지보수 효율 최적화",
        "p2-l2": "Spring Boot와 Docker 환경을 활용한 마이크로서비스 간 결합도 완화",

        "p-ssit-sub": "파이썬 및 자료구조 실무 응용 강의 (Instructor)",
        "p-ssit-l1": "비전공자 및 주니어 개발자를 위한 파이썬 알고리즘 커리큘럼 설계 및 문제 해결 멘토링",
        "p-ssit-l2": "실습 위주의 교육과 일대일 코드 리뷰를 통해 수강생들의 프로그래밍 기초 역량 강화 주도",

        "sec-1-t": "AI 파이프라인 취약점 분석",
        "sec-1": "MLOps 과정에서의 데이터 오염(Poisoning) 공격 시뮬레이션 및 보안 가이드라인 수립",
        "sec-2-t": "AlgoLab 서버 모의 해킹",
        "sec-2": "교내 알고리즘 서버 대상 침투 테스트 수행 및 접근 제어 취약점 상세 보안 리포트 제시",

        "o3-title": "AI LLM Travel Planner",
        "o3-desc": "스크럼 마스터로서 애자일 방법론을 주도하며 팀의 개발 병목 현상을 해결하고 MVP 출시 견인",
        "o1-title": "BLE Distance measurement",
        "o1-desc": "Kalman Filter를 적용하여 BLE 신호 노이즈를 정제한 정밀 실내 거리 측정 구현",
        "o2-title": "Personal Cloud Infra",
        "o2-desc": "Raspberry Pi 기반의 외부 접속 가능 사설 클라우드 및 파일 스토리지 시스템 구축",

        "edu-univ": "국민대학교 (Kookmin University)",
        "edu-major": "소프트웨어학부 소프트웨어전공 (3학년 재학)",
        "award-1-title": "제8회 국민대학교 알고리즘 대회 장려상",
        "award-1-org": "국민대학교 소프트웨어융합대학"
    },
    en: {
        "role": "System Software & Security Research focused Developer",
        "nav-exp": "Core Projects", "nav-sec": "Security", "nav-others": "Others", "nav-edu": "Education",
        "section-exp": "CORE ENGINEERING", "section-sec": "SECURITY & RESEARCH",
        "side-lang": "TECH STACK",
        "side-tech": "FRAMEWORK & INFRA",

        "lang-main": "Java (Spring Boot / Thymeleaf)",
        "lang-sys": "C / C++ / Python / Shell Script",
        "lang-app": "Kotlin / C# / SQL",
        "lang-web": "JS / TS / HLSL (Shader)",

        "tech-list": "Spring Boot, Docker, Android, Linux Kernel, Kali Linux, MySQL, Git, Unity",
        "tag-solo": "SOLO", "tag-team": "TEAM", "tag-sm": "SCRUM MASTER",

        "p1-sub": "Private GPU Resource Management System via Docker",
        "p1-desc": "Built containerized infra to distribute limited GPU resources efficiently.",
        "p1-l1": "Implemented isolated Docker environments and resource allocation logic.",
        "p1-l2": "Automated resource limiting to prevent GPU monopoly.",

        "p2-sub": "Kookmin Feed MSA Re-architecting",
        "p2-desc": "Improved stability by migrating monolithic structure to distributed architecture.",
        "p2-l1": "Optimized scalability and maintenance via independent deployment structures.",
        "p2-l2": "Decoupled services using Spring Boot and Docker environments.",

        "p-ssit-sub": "Python & Data Structure Instructor",
        "p-ssit-l1": "Designed Python algorithm curriculum and mentored problem-solving for juniors.",
        "p-ssit-l2": "Led practical training and 1:1 code reviews to strengthen core programming skills.",

        "sec-1-t": "AI Pipeline Security",
        "sec-1": "Simulated data poisoning attacks in MLOps and established security guides.",
        "sec-2-t": "AlgoLab Penetration Test",
        "sec-2": "Performed pen-testing on algorithm servers and issued security hardening reports.",

        "o3-title": "AI LLM Travel Planner",
        "o3-desc": "Led Agile sprints as Scrum Master, resolving bottlenecks and driving MVP launch.",
        "o1-title": "BLE Distance measurement",
        "o1-desc": "Precise distance tracking by reducing BLE signal noise with Kalman Filter.",
        "o2-title": "Personal Cloud Infra",
        "o2-desc": "Full-stack private cloud storage system based on Raspberry Pi.",

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
        if (translations[currentLang][key]) { 
            el.innerText = translations[currentLang][key]; 
        }
    });
    const langBtn = document.getElementById('lang-btn-text');
    if (langBtn) langBtn.innerText = currentLang === 'ko' ? 'English' : '한국어';
}

function toggleLanguage() { 
    currentLang = currentLang === 'ko' ? 'en' : 'ko'; 
    updateContent(); 
}

function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) themeIcon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

window.onload = () => {
    updateContent();
    if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.classList.add('dark');
        const themeIcon = document.getElementById('theme-icon');
        if (themeIcon) themeIcon.className = 'fa-solid fa-sun';
    }
};