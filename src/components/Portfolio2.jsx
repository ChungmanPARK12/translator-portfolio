// src/components/Portfolio2.jsx
import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Portfolio.css';

const portfolio2Items = [
  { id: 'ailiner', title: 'AI 검색(라이너)...왜 대학생 필수 앱인지 알겠다', genre: 'AI & Technology', subtitle: 'March 2024', description: 'Korean News Articles', link: '/korean-english/ailiner' },
  { id: 'troops', title: '한미, 러시아 파병 대책 논의...30일 안보협의회의 개최', genre: 'Security & International', subtitle: 'February 2024', description: 'Korean News Articles', link: '/korean-english/troops' },
  { id: 'imf', title: 'IMF, 한국 나랏빚 증가 강력 경고...', genre: 'Economy', subtitle: 'February 2024', description: 'Korean News Articles', link: '/korean-english/imf' },
  { id: 'gptmini', title: '오픈AI, 비용낮춘 GPT-4o 미니 출시', genre: 'AI & Technology', subtitle: 'February 2024', description: 'Korean News Articles', link: '/korean-english/gptmini' },
  { id: 'trump2', title: '트럼프, 유죄 평결 직후 소액 후원금 역대 최대...', genre: 'Politics & Elections', subtitle: 'January 2024', description: 'Korean News Articles', link: '/korean-english/trump2' },
  { id: 'cloud', title: '클라우드 활용이 궁금해?', genre: 'Cloud & Technology', subtitle: 'February 2024', description: 'Korean News Articles', link: '/korean-english/cloud' },
  { id: 'sk', title: 'SK 반도체 계열사, 올해도 신사업 진출 사활', genre: 'Semiconductor Industry', subtitle: 'January 2024', description: 'Korean News Articles', link: '/korean-english/sk' },
  { id: 'gal24', title: '갤S24 울트라, 새 아이폰 출시에도 미국 컨슈머리포트 1위 유지', genre: 'AI & Technology', subtitle: 'January 2024', description: 'Korean News Articles', link: '/korean-english/gal24' },
  { id: 'google', title: '구글, 오픈AI 경쟁사 앤스로픽에 20억 달러 투자', genre: 'Business & Technology', subtitle: 'December 2023', description: 'Korean News Articles', link: '/korean-english/google' },
  { id: 'kuj', title: '미국방장관, 하마스식 기습, 즉각적 응징 태세 당부', genre: 'Security & Military', subtitle: 'December 2023', description: 'Korean News Articles', link: '/korean-english/kuj' },
  { id: 'nano', title: '에너지 소비 줄이는 나노소자', genre: 'Science & Technology', subtitle: 'December 2023', description: 'Korean News Articles', link: '/korean-english/nano' },
  { id: 'twofold', title: '두번 접는 스마트폰 대세 될까...', genre: 'IT & Technology', subtitle: 'November 2023', description: 'Korean News Articles', link: '/korean-english/twofold' },
  { id: 'disney', title: '디즈니 플러스 계정공유 금지...', genre: 'Economy & Media', subtitle: 'November 2023', description: 'Korean News Articles', link: '/korean-english/disney' },
  { id: 'line', title: '라인사태, IT 후진국 일본의 강탈 욕구에서 비롯', genre: 'Politics & Security', subtitle: 'November 2023', description: 'Korean News Article', link: '/korean-english/line' },
  { id: 'robot', title: '3D 맵핑하는 자율주행 로봇청소기', genre: 'IT & Technology', subtitle: 'October 2023', description: 'Korean News Article', link: '/korean-english/robot' },
  { id: 'microsoft', title: 'MS 서비스 장애 사건과 데이터 보호의 중요성', genre: 'IT & Cybersecurity', subtitle: 'October 2023', description: 'Korean News Articles', link: '/korean-english/microsoft' },
  { id: 'samsung', title: '링, 선점한 삼성전자, 애플 앞선다...현장 반응은 후끈', genre: 'Electronics', subtitle: 'October 2023', description: 'Korean News Articless', link: '/korean-english/samsung' },
  { id: 'iphone', title: '아이폰15 시리즈, 전작과 비슷한 판매 양상', genre: 'Economy & Electronics', subtitle: 'September 2023', description: 'Korean News Articles', link: '/korean-english/iphone' },
  { id: 'apple', title: '눈으로 아이폰 제어...애플, 하반기 AI눈 추적 공개', genre: 'Science & Technology', subtitle: 'September 2023', description: 'Korean News Articles', link: '/korean-english/apple' },
  { id: 'eu', title: '빅테크 겨냥한 AI 규제법 속도내는 EU...회원국 만장일치 합의', genre: 'Politics', subtitle: 'September 2023', description: 'Korean News Articles', link: '/korean-english/eu' },
  { id: 'insta', title: '인스타그램 너마저...중간광고에 뿔난 이용자들', genre: 'Economy & Media', subtitle: 'August 2023', description: 'Korean News Articles', link: '/korean-english/insta' },
  { id: 'musk', title: '일론 머스크, 인간 뇌에 칩 이식 임상 시작...환자 회복 중', genre: 'Science & Technology', subtitle: 'August 2023', description: 'Korean News Articles', link: '/korean-english/musk' },
  { id: 'fly', title: '초파리 시신경 모사한 초고속 센서...AI스마트폰 적용', genre: 'Science & Technology', subtitle: 'August 2023', description: 'Korean News Articles', link: '/korean-english/fly' },
  { id: 'Trump', title: '트럼프, 젤렌스키에 독재자...미,우크라 설전 속 웃는 푸틴', genre: 'Politics & International', subtitle: 'July 2023', description: 'Korean News Articles', link: '/korean-english/Trump' },
  
  
  
];

const Portfolio2 = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const VISIBLE = 3;
  const scrollKey = 'portfolio2-scroll-x';

  const getCardMetrics = () => {
    const wrapper = scrollRef.current;
    if (!wrapper) return null;

    const first = wrapper.querySelector('.portfolio-item');
    if (!first) return null;

    const r1 = first.getBoundingClientRect();
    const cardWidth = Math.round(r1.width);

    const second = first.nextElementSibling;
    let gap = 0;
    if (second) {
      const r2 = second.getBoundingClientRect();
      gap = Math.max(0, Math.round(r2.left - r1.right));
    }

    return { cardWidth, gap };
  };

  const scrollToGroup = (dir) => {
    const wrapper = scrollRef.current;
    if (!wrapper) return;

    const m = getCardMetrics();
    if (!m) return;

    const step = m.cardWidth + m.gap;

    const currentIndex = Math.round(wrapper.scrollLeft / step);
    const currentGroup = Math.floor(currentIndex / VISIBLE);
    const nextGroup = Math.max(0, currentGroup + dir);
    const targetIndex = nextGroup * VISIBLE;

    wrapper.scrollTo({ left: targetIndex * step, behavior: 'smooth' });
  };

  const scrollLeft = () => scrollToGroup(-1);
  const scrollRight = () => scrollToGroup(1);

  const handleCardClick = (link) => {
  const scrollX = scrollRef.current?.scrollLeft || 0;
  sessionStorage.setItem(scrollKey, scrollX.toString());

  // ✅ 상세 페이지 들어가기 전에 맨 위로
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

  navigate(link);
};

  useEffect(() => {
    const savedScrollX = sessionStorage.getItem(scrollKey);
    if (scrollRef.current && savedScrollX) {
      scrollRef.current.scrollLeft = parseInt(savedScrollX, 10);
    }
  }, []);

  return (
    <section className="portfolio">
      <div className="portfolio-container">
        <h2>Korean – English : Translation Samples</h2>

        <div className="scroll-controls">
          <button className="scroll-button left" onClick={scrollLeft} aria-label="Scroll left">
            &#10094;
          </button>

          <div className="portfolio-viewport">
            <div className="portfolio-scroll-wrapper" ref={scrollRef}>
              <div className="portfolio-grid">
                {portfolio2Items.map((item) => (
                  <div
                    className="portfolio-item"
                    key={item.id}
                    onClick={() => handleCardClick(item.link)}
                    role="button"
                    tabIndex={0}
                  >
                    {/* ✅ 배지 대신 모던 텍스트 + 은은한 하이라이트 */}
                    <p className="tag news">{item.description}</p>

                    <h3>{item.title}</h3>
                    {item.genre && <p className="genre">{item.genre}</p>}

                    {item.subtitle && <p className="subtitle">{item.subtitle}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button className="scroll-button right" onClick={scrollRight} aria-label="Scroll right">
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio2;
