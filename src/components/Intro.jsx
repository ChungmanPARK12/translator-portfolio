import './Intro.css';
import flagImg from "../assets/flag.jpg";

export default function Intro() {
  return (
    <section className="intro-section">
      <div className="intro-container">
        <div className="intro-image">
          <img src={flagImg} alt="Australian Flag" />
        </div>
        <div className="intro-text">
          <h1>Professional Translator</h1>
          <p>Hi, I’m a passionate professional translator currently living in Adelaide, and I’ve been in Australia for over seven years.</p>
          <p>
            I specialize in Korean–English and English–Korean translation, and I genuinely enjoy the work I do.
          </p>
          <p>
            The list below shows my personal efforts and self-driven projects as I work toward becoming a professional translator.
          </p>
          <p className="contact-text">
            If you're looking for accurate and thoughtful translation, feel free to reach out at<br />
            <span className="email-text">parkssi12@gmail.com</span>
          </p>

        </div>
      </div>
    </section>
  );
}
