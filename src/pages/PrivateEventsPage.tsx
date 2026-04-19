import Button from "../components/button/Button";
import PatternCard from "../components/pattern-card/PatternCard";

export default function PrivateEventsPage() {
  return (
    <main className="events-page">
      <div className="events-page__container">
        <section className="events-page__hero">
          <h1 className="events-page__header">
            Celebrate with Goats: Birthdays, Team Days, and More
          </h1>

          <img></img>

          <p className="events-page__lead">
            Create a joyful, low-stress space for your team, friends, or family
            with a private Goat Yoga session that everyone will actually
            remember.
          </p>

          <p className="events-page__lead">
            Whether you are planning a team offsite, a birthday, or a reunion
            with friends, private Goat Yoga events bring movement, animals, and
            laughter together in one gentle experience. We'll help you design a
            class that suits your group's energy, abilities, and goals.
          </p>

          <div className="events-page__button-wrap">
            <Button>Plan a private event</Button>
          </div>
        </section>

        <section className="events-page__about">
          <h2 className="events-page__vertical-title">
            Why choose
            <br />
            private events?
          </h2>

          <div className="events-page__text">
            <p>
              Goat Yoga is more than a funny photo with a goat on your back.
              It's a gentle way to lower stress, unplug from screens, and
              reconnect with each other in a playful setting.
            </p>

            <p>
              Our private sessions combine simple yoga, light contact with
              animals, and a calm, scenic environment. Your guests don't need
              any yoga experience — they just need a bit of curiosity and a
              sense of humor.
            </p>
          </div>

          <img
            className="events-page__image"
            src="/images/what-is-goat-yoga.png"
            alt="Decorative pattern"
          />
        </section>

        <section className="events-page__options">
          <h2>Planning something for your group?</h2>

          <div className="pattern-card__grid--two">
            <PatternCard variant="pattern-a">
              <h3 className="pattern-card__title">For teams and companies</h3>

              <p>
                Goat Yoga is a refreshing alternative to traditional
                team-building — fresh air, movement, and real connection without
                screens.
              </p>

              <p>
                Our corporate events are designed to reduce stress, support
                mental health, and give your team a shared, light memory that
                stays long after the class.
              </p>

              <ul className="pattern-card__list">
                <li>Offsites and retreats</li>
                <li>Corporate wellness days</li>
                <li>Team building after intense projects</li>
              </ul>

              <p>
                No experience needed — our instructors guide every step, and
                many guests join us for their first yoga class.
              </p>
            </PatternCard>

            <PatternCard variant="pattern-b">
              <h3 className="pattern-card__title">For your special moments</h3>

              <p>
                Private Goat Yoga is also perfect for personal celebrations. If
                you want something softer than a nightclub and more memorable
                than a regular dinner, a session with goats is a warm and
                playful way to mark your day.
              </p>

              <ul className="pattern-card__list">
                <li>Birthdays and family reunions</li>
                <li>Bachelorette and bachelor parties</li>
                <li>Nonprofit and community events</li>
                <li>Homeschool and student groups</li>
              </ul>

              <p>
                We can host your group at our farm or come to your location.
                Outdoor space is ideal. Tell us about your plans, and we'll
                suggest a format that fits your timing, budget, and the size of
                your group.
              </p>
            </PatternCard>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-inner container">
            <Button>Plan a private event</Button>
          </div>
        </section>

        <section>Gallery</section>

        <section className="events-page__details">
          <h2>What your group can expect</h2>

          <ul className="events-page__details-list">
            <li>60-90 minutes of guided, beginner-friendly practice.</li>
            <li>
              Time to meet and interact with the goats before or after class.
            </li>
            <li>A relaxed pace with plenty of breaks and space for photos.</li>
            <li>
              Clear communication before the event about what to wear, bring,
              and how to prepare.
            </li>
          </ul>

          <p>
            Our goal is simple: your guests should leave lighter, smiling, and
            with a story they can't wait to share.
          </p>
        </section>
      </div>
    </main>
  );
}
