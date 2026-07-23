import { profile } from '../data/content'
import { Reveal } from './Reveal'

export function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <Reveal>
          <div className="contact__shell">
            <div>
              <p className="section-label" style={{ color: 'rgba(232, 240, 230, 0.75)' }}>
                Contact
              </p>
              <h2 className="contact__title">Available for the right opportunity.</h2>
              <p className="contact__text">
                Open to roles and collaborations in forestry, conservation,
                and sustainable development across Ghana and beyond.
              </p>

              <div className="contact__links">
                <a href={profile.emailHref}>
                  <span>Email</span>
                  <strong>{profile.email}</strong>
                </a>
                <a href={profile.phoneHref}>
                  <span>Phone</span>
                  <strong>{profile.phone}</strong>
                </a>
                <a href={profile.linkedinHref} target="_blank" rel="noreferrer">
                  <span>LinkedIn</span>
                  <strong>{profile.linkedin}</strong>
                </a>
                <a href={`https://maps.google.com/?q=${encodeURIComponent(profile.location)}`} target="_blank" rel="noreferrer">
                  <span>Location</span>
                  <strong>{profile.location}</strong>
                </a>
              </div>
            </div>

            <div className="contact__aside">
              <p>
                Prefer a direct note? Send an email with a short introduction
                and what you’re hiring or collaborating on — I’ll respond as
                soon as I can.
              </p>
              <a className="btn btn--solid" href={profile.emailHref}>
                Write an email
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
