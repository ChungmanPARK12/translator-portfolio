import './Intro.css';

export default function Intro() {
  return (
    <section className="intro-section">
      <div className="intro-container">
        <div className="intro-image">
          <img src="/flag.jpg" alt="Australian Flag" />
        </div>
        <div className="intro-text">
          <h1>I Am a Passionate Translator</h1>
          <p>Hi, I'm Chungman Park. I'm currently living in Adelaide and have been in Australia for over 7 years.</p>
          <p>
            I specialize in Korean–English and English–Korean translation, and I genuinely enjoy the work I do.
          </p>
          <p>
            The list below shows my personal efforts and self-driven projects as I work toward becoming a professional translator.
          </p>
          <p>
            If you're looking for accurate, thoughtful translation, feel free to reach out via{' '}
            <a href="mailto=your.email@example.com">your.email@example.com</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
