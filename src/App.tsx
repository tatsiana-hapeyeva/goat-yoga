import { useState } from 'react';
import './style.css';
import { MenuDropdown } from './components/MenuDropdown';
import { CitiesDropdown } from './components/CitiesDropdown';
import { LanguageDropdown } from './components/LanguageDropdown';
import { translations, type Locale } from "./translations";

const languageOptions = [
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
  { code: "by", label: "BY" },
];

export const App = () => {
  const [lang, setLang] = useState<Locale>("en");

  const t = translations[lang];

  const [galleryIndex, setGalleryIndex] = useState(0);

  const galleryImages = [
    '/images/goat-yoga-1.png',
    '/images/goat-yoga-2.png',
    '/images/goat-yoga-3.png',
  ];

  const safeIndex = (i: number) => {
    const len = galleryImages.length;
    return (i + len) % len;
  };

  const goPrev = () => setGalleryIndex((i) => safeIndex(i - 1));
  const goNext = () => setGalleryIndex((i) => safeIndex(i + 1));

  const menuItems = [
    { to: "#about", label: "About" },
    { to: "#location", label: "Location" },
    { to: "#team", label: "Our team" },
    { to: "#pricing", label: "Membership" },
  ];

  return (
    <>
      <header className="header">
        <div className="header-inner">
          <MenuDropdown items={menuItems} />
          <LanguageDropdown
            options={languageOptions}
            value={lang}
            onChange={(code) => setLang(code as Locale)}
          />
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="main" className="hero">
          <div className="hero-container container">
            <div className="hero-content">
              <div className="hero-text">
                <p className="hero-slogan">
                  {t.hero.slogan}
                </p>
                <h1 className="hero-title">
                  {t.hero.title}
                </h1>
                <button className="hero-button">
                  {t.hero.button}
                </button>
              </div>
            </div>

            <div className="hero-image">
              <img src="/images/decorative-pattern.png" alt="Hero" />
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="about">
          <div className="about-inner">
            <div className="about-image">
              <img
                src="/images/what-is-goat-yoga.png"
                alt="What is goat yoga"
              />
            </div>
            <div className="about-text">
              <h2 className="vertical-title vertical-title-center">
                What is<br />
                goat yoga?
              </h2>
              <div className="about-description">
                <p>
                  It&apos;s just like regular yoga with breathing and stretches
                  besides that adorable and friendly goats are roaming around,
                  jumping on you, trying to kiss your face, and maybe nibbling
                  on your yoga pants. It&apos;s healthy, therapeutic and fun.
                </p>
                <p>
                  Each class maxes at 20 people and will have at least 10 goats.
                  You don&apos;t need to be in excellent physical shape to start
                  the practice. This class is designed for beginners but all
                  levels are welcome to attend. Please note that classes are for
                  guests aged 16 years and older.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="gallery">
          <div className="gallery-container container">
            <button className="gallery-arrow gallery-prev" onClick={goPrev}>
              ‹
            </button>

            <div
              className="gallery-track"
              style={{ transform: `translateX(-${galleryIndex * 681}px)` }}
            >
              {galleryImages.map((src, i) => (
                <div className="gallery-slide" key={i}>
                  <img src={src} alt={`goat ${i + 1}`} />
                </div>
              ))}
            </div>

            <button className="gallery-arrow gallery-next" onClick={goNext}>
              ›
            </button>
          </div>

          <div className="gallery-indicators">
            {galleryImages.map((_, i) => (
              <span
                key={i}
                className={`dot ${i === galleryIndex ? 'active' : ''}`}
                onClick={() => setGalleryIndex(i)}
              />
            ))}
          </div>

          <div className="decorative-element">
            <img src="/images/gallery-pattern.png" alt="decorative pattern" />
          </div>
        </section>

        {/* SCHEDULE + RULES */}
        <section className="info-blocks" id="location">
          <div className="info-inner container">
            <div className="blocks-row">
              <div className="schedule-block">
                <img
                  src="/images/schedule-and-location.png"
                  alt="Schedule background"
                  className="schedule-bg"
                />
                <div className="schedule-content">
                  <h3>
                    Training schedule <br />
                    and location
                  </h3>
                  <div className="schedule-time">
                    <span className="time">9:00 am</span>
                    <ul className="days">
                      <li>Wednesday</li>
                      <li>Saturday</li>
                      <li>Sunday</li>
                    </ul>
                  </div>
                  <p className="address">Lida, Fermerskaya street, 5</p>

                  <CitiesDropdown />



                </div>   {/* schedule-content */}
              </div>     {/* schedule-block */}

              <div className="rules-block" id="rules">
                <div className="rules-content">
                  <h3>Our rules</h3>
                  <p>
                    We have few rules, but they are very important. You can
                    check them out at the link below.
                  </p>
                  <a href="#rules" className="rules-link">
                    Check
                    <svg width="10" height="17" viewBox="0 0 10 17" fill="none">
                      <path
                        d="M1.47917 16.6667L0 15.1875L6.85417 8.33333L0 1.47917L1.47917 0L9.8125 8.33333L1.47917 16.6667Z"
                        fill="#14092A"
                      />
                    </svg>
                  </a>
                </div>

                <div className="rules-line"></div>
              </div>
            </div> {/* blocks-row */}
          </div>   {/* info-inner container */}
        </section> {/* info-blocks */}

        {/* TEAM */}
        <section id="team" className="team">
          <div className="team-inner container">
            <div className="team-header-with-content">
              <div className="vertical-title">
                <h3>
                  <span>
                    Meet
                    <br />
                    our team
                  </span>
                </h3>
              </div>

              <div className="team-grid">
                <div className="simple-card team-member">
                  <div className="simple-card-image">
                    <img
                      src="/images/Person1.png"
                      alt="Tatyana Motolyanec - Yoga Instructor"
                    />
                  </div>
                  <h4 className="simple-card-title">Tatyana Motolyanec</h4>
                  <p className="simple-card-description">Yoga Instructor</p>
                </div>

                <div className="simple-card team-member">
                  <div className="simple-card-image">
                    <img
                      src="/images/Person2.png"
                      alt="Aleksandr Yakovlev - Yoga Instructor"
                    />
                  </div>
                  <h4 className="simple-card-title">Aleksandr Yakovlev</h4>
                  <p className="simple-card-description">Yoga Instructor</p>
                </div>

                <div className="simple-card team-member last-card">
                  <div className="simple-card-image">
                    <img
                      src="/images/Goats.png"
                      alt="Agata, Bella and other cute goats"
                    />
                  </div>
                  <h4 className="simple-card-title">Agata, Bella,</h4>
                  <p className="simple-card-description">
                    and other cute goats
                  </p>
                </div>
              </div>

              <div className="circle-left"></div>
            </div>
          </div>
        </section>

        {/* PRICING / MEMBERSHIP */}
        <section id="pricing" className="pricing">
          <div className="pricing-inner container">
            <h2 className="pricing-title">Membership</h2>
            <div className="pricing-grid">
              <div className="price-card">
                <img
                  src="/images/Pattern-one-time.png"
                  alt="One-time pattern"
                  className="card-pattern"
                />
                <div className="card-content">
                  <h3 className="card-title">One-time</h3>
                  <div className="price">20 BYN</div>
                  <p>One-time visit to any class you choose.</p>
                </div>
              </div>

              <div className="price-card featured">
                <img
                  src="/images/Pattern-standard.png"
                  alt="Standard pattern"
                  className="card-pattern"
                />
                <div className="card-content">
                  <h3 className="card-title">Standard</h3>
                  <div className="price">135 BYN</div>
                  <p>8 visits within a month. 16,87 BYN per visit.</p>
                  <a href="#" className="card-button">
                    Sign up for a class
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2L18.025 12L8.025 22Z"
                        fill="#14092A"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="price-card">
                <img
                  src="/images/Pattern-long-time.png"
                  alt="Long-term pattern"
                  className="card-pattern"
                />
                <div className="card-content">
                  <h3 className="card-title">Long-term</h3>
                  <div className="price">315 BYN</div>
                  <p>20 visits within 3 months. 15,75 BYN per visit.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="cta-inner container">
            <h2 className="cta-title">
              Leave a request and get a free trial lesson.
            </h2>
            <button className="cta-button">Register now</button>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container container">
          <div className="footer-content">
            <div className="footer-center">
              <p className="logo-text">Goat Yoga 2023</p>
            </div>
            <div className="footer-right">
              <p className="phone">+7 (999) 999-99-99</p>
              <div className="social-links">
                <a href="#" className="social-link">
                  <img src="/images/Instagram.png" alt="Instagram" />
                </a>
                <a href="#" className="social-link">
                  <img src="/images/Telegram.png" alt="Telegram" />
                </a>
                <a href="#" className="social-link">
                  <img src="/images/Youtube.png" alt="Youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-image">
          <img src="/images/Pattern-footer.png" alt="Decorative pattern" />
        </div>
      </footer>
    </>
  );
};

export default App;