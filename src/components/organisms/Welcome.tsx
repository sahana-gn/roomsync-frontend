import { Button } from '../atoms/Button';
import { SectionHeading } from '../molecules/SectionHeading';

export function Welcome() {
  return (
    <section className="welcome-hero" aria-label="Welcome to RoomSync">
      <div className="welcome-content">
        <SectionHeading
          eyebrow="A little more in common"
          title="A shared home."
          accentTitle="A better beginning."
          description="Find a roommate who fits your everyday life. Your routine, your preferences, your kind of home."
        />

        <div className="welcome-actions">
          <Button disabled>Find my roommate</Button>

          <a className="button button-secondary" href="#roomsync-idea">
            Explore more
          </a>
        </div>
      </div>

      <aside
        id="roomsync-idea"
        className="home-card"
        aria-labelledby="home-card-title"
        tabIndex={-1}
      >
        <span className="home-card-label">The RoomSync idea</span>

        <h2 id="home-card-title">
          More than sharing a space.
        </h2>

        <ul className="home-card-details">
          <li>
            <span className="list-check" aria-hidden="true">✓</span>
            Similar routines
          </li>
          <li>
            <span className="list-check" aria-hidden="true">✓</span>
            Shared expectations
          </li>
          <li>
            <span className="list-check" aria-hidden="true">✓</span>
            Room to be yourself
          </li>
        </ul>

        <p className="home-card-footer">Better matches. Better living.</p>
      </aside>
    </section>
  );
}