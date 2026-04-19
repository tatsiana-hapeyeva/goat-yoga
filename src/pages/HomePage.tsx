import { useEffect } from "react";
import "../style.css";
import { useLocation } from "react-router";
import { CitiesDropdown } from "../components/dropdown/CitiesDropdown";
import { useI18n } from "../i18n-context";
import ClassRegistration from "../components/popup/ClassRegistration";
import InfoPopup from "../components/popup/InfoPopupUI";
import { useGetRulesQuery, type Rule } from "../services/api";
import { useDispatch, useSelector } from "react-redux";
import { openPopup, closePopup } from "../components/popup/popupSlice";
import type { RootState } from "../app/store";
import GallerySlider from "../components/gallery/GallerySlider";

export const HomePage = () => {
  const { t } = useI18n();
  const location = useLocation();

  const dispatch = useDispatch();

  const isOpen = useSelector(
    (state: RootState) =>
      state.popup.isOpen && state.popup.popupType === "rules",
  );

  const open = () => dispatch(openPopup("rules"));
  const close = () => dispatch(closePopup());

  const { data, error, isLoading } = useGetRulesQuery(undefined, {
    skip: !isOpen,
  });

  const items: Rule[] = data?.slice(0, 20) ?? [];

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);

  return (
    <>
      <main>
        {/* HERO */}
        <section id="main" className="w-full min-h-screen pt-[80px]">
          <div className="hero-container">
            <div className="hero-content">
              <div className="hero-text">
                <p className="hero-slogan">{t.hero.slogan}</p>
                <h1 className="text-[120px] mb-[95px] leading-[1.2] font-normal">
                  {t.hero.title}
                </h1>
                <ClassRegistration
                  buttonText={t.hero.button}
                  buttonClassName="
    bg-[var(--secondary-color)]
    text-[var(--primary-color)]
    border-none
    w-[324px] h-[81px]
    text-[16px] font-normal uppercase
    cursor-pointer
    transition-transform duration-300
    hover:-translate-y-[2px]
  "
                />
              </div>
            </div>

            <div className="flex-[0_0_50%] relative overflow-hidden">
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
                What is
                <br />
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
          <GallerySlider />

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
                </div>
              </div>

              <div className="rules-block" id="rules">
                <div className="rules-content">
                  <h3>Our rules</h3>
                  <p>
                    We have few rules, but they are very important. You can
                    check them out at the link below.
                  </p>
                  <a
                    href="#rules"
                    className="rules-link"
                    onClick={(event) => {
                      event.preventDefault();
                      open();
                    }}
                  >
                    Check
                    <img
                      src="/images/material-symbols_arrow-forward-ios.png"
                      alt="arrow"
                      width={20}
                      height={20}
                    />
                  </a>
                </div>

                <div className="rules-line"></div>

                <InfoPopup isOpen={isOpen} title="Rules" onClose={close}>
                  {isLoading && <p>Loading...</p>}
                  {error && <p>Could not load rules.</p>}

                  {!isLoading && !error && (
                    <div className="rules-list">
                      {items.map((item) => (
                        <article key={item.id} className="rules-item">
                          <p>{item.name}</p>
                          <p>{item.email}</p>
                          <p>{item.body}</p>
                        </article>
                      ))}
                    </div>
                  )}
                </InfoPopup>
              </div>
            </div>
          </div>
        </section>

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
                  src="/images/Pattern-a.png"
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
                  src="/images/Pattern-b.png"
                  alt="Standard pattern"
                  className="card-pattern"
                />
                <div className="card-content">
                  <h3 className="card-title">Standard</h3>
                  <div className="price">135 BYN</div>
                  <p>8 visits within a month. 16,87 BYN per visit.</p>
                  <a href="#" className="card-button">
                    Sign up for a class
                    <img
                      src="/images/material-symbols_arrow-forward-ios.png"
                      alt="arrow"
                      width={20}
                      height={20}
                    />
                  </a>
                </div>
              </div>

              <div className="price-card">
                <img
                  src="/images/Pattern-c.png"
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
      </main>
    </>
  );
};

export default HomePage;
