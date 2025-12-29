// src/components/Portfolio.jsx
import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Portfolio.css';

const portfolioItems = [
  { id: 'attitude-ai', title: 'Attitudes towards Artificial Intelligence', genre: 'Science & Technology', subtitle: 'February 2024', description: 'IELTS Academic Reading', link: '/english-korean/attitude-ai' },
  { id: 'climate-change', title: 'Climate change reveals ancient...', genre: 'Archaeology',subtitle: 'January 2024', description: 'IELTS Academic Reading', link: '/english-korean/climate-change' },
  { id: 'earth-space', title: 'Conquering Earth space junk problem', genre: 'Space Sceience', subtitle: 'January 2024', description: 'IELTS Academic Reading', link: '/english-korean/earth-space' },
  { id: 'forest-management', title: 'Forest Management in Pennsylvania, USA', genre: 'Environmental Science', subtitle: 'January 2024', description: 'IELTS Academic Reading', link: '/english-korean/forest-management' },
  { id: 'green-roof', title: 'Green roofs', genre: 'Environmental Science', subtitle: 'December 2023', description: 'IELTS Academic Reading', link: '/english-korean/green-roof' },
  { id: 'wise-dicision', title: 'How to wise dicisions', genre: 'Psychology', subtitle: 'December 2023', description: 'IELTS Academic Reading', link: '/english-korean/wise-dicision' },
  { id: 'contain-multi', title: 'I contain multitudes', genre: 'Biology', subtitle: 'December 2023', description: 'IELTS Academic Reading', link: '/english-korean/contain-multi' },
  { id: 'ideal-city', title: 'An ideal City', genre: 'Architecture', subtitle: 'November 2023', description: 'IELTS Academic Reading', link: '/english-korean/ideal-city' },
  { id: 'material-concrete', title: 'Materials to take us beyond concrete', genre: 'Materials Science', subtitle: 'November 2023', description: 'IELTS Academic Reading', link: '/english-korean/material-concrete' },
  { id: 'mindset', title: 'The growth mindset', genre: 'Psychology & Education', subtitle: 'November 2023', description: 'IELTS Academic Reading', link: '/english-korean/mindset' },
  { id: 'Plant', title: 'Plant thermometer triggers springtime...', genre: 'Plant Science', subtitle: 'October 2023', description: 'IELTS Academic Reading', link: '/english-korean/Plant' },
  { id: 'Ploarbear', title: 'Why we need to protect polar bears', genre: 'Biology', subtitle: 'October 2023', description: 'IELTS Academic Reading', link: '/english-korean/Polarbear' },
  { id: 'Romanian', title: 'Roman shipbuilding and navigation', genre: 'History', subtitle: 'October 2023', description: 'IELTS Academic Reading', link: '/english-korean/Romanian' },
  { id: 'stonehenge', title: 'Stonegenge', genre: 'Archaeology', subtitle: 'September 2023', description: 'IELTS Academic Reading', link: '/english-korean/stonehenge' },
  { id: 'thefuturework', title: 'The future of work', genre: 'Social Science', subtitle: 'September 2023', description: 'IELTS Academic Reading', link: '/english-korean/thefuturework' },
  { id: 'steppyramid', title: 'The Step Pyramid of Djoser', genre: 'Ancient History', subtitle: 'September 2023', description: 'IELTS Academic Reading', link: '/english-korean/steppyramid' },
  { id: 'whitehouse', title: 'The White House of Uffington', genre: 'Archaeology', subtitle: 'August 2023', description: 'IELTS Academic Reading', link: '/english-korean/whitehouse' },
  { id: 'casemixed', title: 'The case for mixed-ability classes', genre: 'Education', subtitle: 'August 2023', description: 'IELTS Academic Reading', link: '/english-korean/casemixed' },
  { id: 'steamcar', title: 'The steam car', genre: 'History & Technology', subtitle: 'August 2023', description: 'IELTS Academic Reading', link: '/english-korean/steamcar' },
  { id: 'urbanfarming', title: 'Urban farming', genre: 'Argriculture', subtitle: 'July 2023', description: 'IELTS Academic Reading', link: '/english-korean/urbanfarming' },
];

const Portfolio = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const VISIBLE = 3;
  const scrollKey = 'portfolio-scroll-x';

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
        <h2>English – Korean : Translation Samples</h2>

        <div className="scroll-controls">
          <button className="scroll-button left" onClick={scrollLeft} aria-label="Scroll left">
            &#10094;
          </button>

          <div className="portfolio-viewport">
            <div className="portfolio-scroll-wrapper" ref={scrollRef}>
              <div className="portfolio-grid">
                {portfolioItems.map((item) => (
                  <div
                    className="portfolio-item"
                    key={item.id}
                    onClick={() => handleCardClick(item.link)}
                    role="button"
                    tabIndex={0}
                  >
                    {/* ✅ badge 대신 “모던 텍스트 + 은은한 하이라이트” */}
                    <p className="tag academic">{item.description}</p>

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

export default Portfolio;
