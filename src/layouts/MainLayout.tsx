import { Link, Outlet } from "react-router";
import { DropdownFrame } from "../components/dropdown/DropdownFrame";
import { type Locale } from "../translations";
import { useI18n } from "../i18n-context";

type MenuItem = {
  to: string;
  label: string;
};

const menuItems: MenuItem[] = [
  { to: "/#about", label: "About" },
  { to: "/#location", label: "Location" },
  { to: "/#team", label: "Our team" },
  { to: "/#pricing", label: "Membership" },
];

const pageLinks: MenuItem[] = [
  { to: "/tobegin", label: "Getting Started" },
  { to: "/private-events", label: "Private Events" },
];

const languageOptions = [
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
];

export default function MainLayout() {
  const { lang, setLang } = useI18n();
  return (
    <>
      <header className="header">
        <div className="header__inner">
          <div className="header__nav">
            <DropdownFrame
              className="nav-dropdown"
              renderToggle={({ toggle }) => (
                <button className="nav-toggle" onClick={toggle} type="button">
                  <span>About Us</span>
                  <img
                    src="/images/material-symbols_arrow-forward-ios.png"
                    alt=""
                    width={16}
                    height={16}
                    className="nav-toggle__arrow"
                  />
                </button>
              )}
              renderMenu={({ close }) => (
                <div className="dropdown-menu">
                  {menuItems.map((item) => (
                    <Link key={item.to} to={item.to} onClick={close}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            />

            {pageLinks.map((item) => (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            ))}
          </div>

          <DropdownFrame
            className="lang-dropdown"
            renderToggle={({ toggle }) => (
              <button
                className="dropdown-toggle lang-dropdown__toggle"
                onClick={toggle}
                type="button"
              >
                {
                  (
                    languageOptions.find((l) => l.code === lang) ??
                    languageOptions[0]
                  ).label
                }
              </button>
            )}
            renderMenu={({ close }) => (
              <div className="dropdown-menu dropdown-menu--lang">
                <ul className="lang-dropdown__list">
                  {languageOptions.map((option) => (
                    <li key={option.code}>
                      <button
                        type="button"
                        onClick={() => {
                          setLang(option.code as Locale);
                          close();
                        }}
                      >
                        {option.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          />
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <section className="cta-section">
        <div className="cta-inner container">
          <h2 className="cta-title">
            Leave a request and get a free trial lesson.
          </h2>
          <button className="cta-button">Register now</button>
        </div>
      </section>

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
}
