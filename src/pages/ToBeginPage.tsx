import Button from "../components/button/Button";
import PatternCard from "../components/pattern-card/PatternCard";

export default function ToBeginPage() {
  return (
    <main className="begin-page">
      <div className="begin-page__container">
        <section>
          <h1 className="begin-page__header">Choose Your Level</h1>
          <p className="begin-page__intro">
            At Goat Yoga, we offer more than playful classes with goats. We also
            have regular groups for students who want to begin yoga step by step
            in a calm and supportive way.
          </p>
        </section>

        <section className="begin-page__levels">
          <div className="pattern-card__grid">
            <PatternCard variant="pattern-a">
              <h3 className="pattern-card__title">Yoga First Step</h3>
              <p>For anyone who wants to try yoga for the first time.</p>
              <p>
                A one-time introductory class to help you feel comfortable,
                learn the basics, and see whether yoga is right for you.
              </p>
              <Button size="small" type="button">
                Class Schedule
              </Button>
            </PatternCard>

            <PatternCard variant="pattern-b">
              <h3 className="pattern-card__title">Yoga Base</h3>
              <p>From 0 to 1 month of regular practice.</p>
              <p>
                For complete beginners who want to build a strong foundation in
                a steady and supportive group.
              </p>
              <Button size="small" type="button">
                Class Schedule
              </Button>
            </PatternCard>

            <PatternCard variant="pattern-c">
              <h3 className="pattern-card__title">Yoga Flow Start</h3>
              <p>From 1 to 6 months of regular practice.</p>
              <p>
                For students who know the basics and want to continue with
                simple sequences, breathing, and better alignment.
              </p>
              <Button size="small" type="button">
                Class Schedule
              </Button>
            </PatternCard>

            <PatternCard variant="pattern-a">
              <h3 className="pattern-card__title">Yoga Flow Plus</h3>
              <p>From 6 to 12 months of regular practice.</p>
              <p>
                For students who want to deepen their practice, refine
                technique, and feel more confident in class.
              </p>
              <Button size="small" type="button">
                Class Schedule
              </Button>
            </PatternCard>

            <PatternCard variant="pattern-b">
              <h3 className="pattern-card__title">Yoga Strong Practice</h3>
              <p>From 12 months of regular practice.</p>
              <p>
                For experienced students who are ready for a deeper, stronger,
                and more independent practice.
              </p>
              <Button size="small" type="button">
                Class Schedule
              </Button>
            </PatternCard>

            <PatternCard variant="pattern-c">
              <h3 className="pattern-card__title">Private Sessions</h3>
              <p>One-on-one classes tailored to your needs.</p>
              <p>
                For students who prefer personal guidance and individual
                support.
              </p>
              <Button size="small" type="button">
                Class Schedule
              </Button>
            </PatternCard>
          </div>
        </section>
      </div>
    </main>
  );
}
