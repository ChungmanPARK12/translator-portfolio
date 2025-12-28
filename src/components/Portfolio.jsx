// src/components/Portfolio.jsx
import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Portfolio.css';

const portfolioItems = [
  { id: 'attitude-ai', title: 'Attitudes towards Artificial Intelligence', subtitle: 'February 2024', description: 'IELTS Reading.', link: '/english-korean/attitude-ai' },
  { id: 'climate-change', title: 'Climate change reveals ancient...', subtitle: 'January 2024', description: 'IELTS Reading.', link: '/english-korean/climate-change' },
  { id: 'earth-space', title: 'Conquering Earth space...', subtitle: 'January 2024', description: 'IELTS Reading.', link: '/english-korean/earth-space' },
  { id: 'forest-management', title: 'Forest Management', subtitle: 'January 2024', description: 'IELTS Reading.', link: '/english-korean/forest-management' },
  { id: 'green-roof', title: 'Green roofs', subtitle: 'December 2023', description: 'IELTS Reading.', link: '/english-korean/green-roof' },
  { id: 'wise-dicision', title: 'How to wise dicision', subtitle: 'December 2023', description: 'IELTS Reading.', link: '/english-korean/wise-dicision' },
  { id: 'contain-multi', title: 'I contain multitudes', subtitle: 'December 2023', description: 'IELTS Reading.', link: '/english-korean/contain-multi' },
  { id: 'ideal-city', title: 'an ideal City', subtitle: 'November 2023', description: 'IELTS Reading.', link: '/english-korean/ideal-city' },
  { id: 'material-concrete', title: 'Materials to take us beyond concrete', subtitle: 'November 2023', description: 'IELTS Reading.', link: '/english-korean/material-concrete' },
  { id: 'mindset', title: 'The growth mindset', subtitle: 'November 2023', description: 'IELTS Reading.', link: '/english-korean/mindset' },
  { id: 'Plant', title: 'Plant thermometer triggers springtime...', subtitle: 'October 2023', description: 'IELTS Reading.', link: '/english-korean/Plant' },
  { id: 'Ploarbear', title: 'Why we need to protect polar bears', subtitle: 'October 2023', description: 'IELTS Reading.', link: '/english-korean/Polarbear' },
  { id: 'Romanian', title: 'Roman shipbuilding and navigation', subtitle: 'October 2023', description: 'IELTS Reading.', link: '/english-korean/Romanian' },
  { id: 'stonehenge', title: 'Stonegenge', subtitle: 'September 2023', description: 'IELTS Reading.', link: '/english-korean/stonehenge' },
  { id: 'thefuturework', title: 'The future of work', subtitle: 'September 2023', description: 'IELTS Reading.', link: '/english-korean/thefuturework' },
  { id: 'steppyramid', title: 'The Step Pyramid of Djoser', subtitle: 'September 2023', description: 'IELTS Reading.', link: '/english-korean/steppyramid' },
  { id: 'whitehouse', title: 'The White House of Uffington', subtitle: 'August 2023', description: 'IELTS Reading.', link: '/english-korean/whitehouse' },
  { id: 'casemixed', title: 'The case for mixed-ability classes', subtitle: 'August 2023', description: 'IELTS Reading.', link: '/english-korean/casemixed' },
  { id: 'steamcar', title: 'The steam car', subtitle: 'August 2023', description: 'IELTS Reading.', link: '/english-korean/steamcar' },
  { id: 'urbanfarming', title: 'Urban farming', subtitle: 'July 2023', description: 'IELTS Reading.', link: '/english-korean/urbanfarming' },
];

const Portfolio = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const VISIBLE = 3;

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
    sessionStorage.setItem('portfolio-scroll-x', scrollX.toString());
    navigate(link);
  };

  useEffect(() => {
    const savedScrollX = sessionStorage.getItem('portfolio-scroll-x');
    if (scrollRef.current && savedScrollX) {
      scrollRef.current.scrollLeft = parseInt(savedScrollX, 10);
    }
  }, []);

  return (
    <section className="portfolio">
      <div className="portfolio-container">
        <h2>English – Korean : Academic Essays</h2>

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
                    <h3>{item.title}</h3>
                    {item.subtitle && <p className="subtitle">{item.subtitle}</p>}
                    <p className="desc">{item.description}</p>
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
