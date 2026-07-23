import { profile } from '../data/content'

export function Hero() {
  return (
    <section className="hero" id="top" aria-label="Introduction">
      <div className="hero__media" aria-hidden="true">
        <img
          src="/assets/hero-forest.jpg"
          alt=""
          width={2400}
          height={1600}
          fetchPriority="high"
        />
        <div className="hero__veil" />
      </div>

      <div className="container hero__content">
        <h1 className="hero__brand">{profile.brand}</h1>
        <p className="hero__role">{profile.title}</p>
        <p className="hero__text">{profile.headline}</p>
        <div className="hero__actions">
          <a className="btn btn--solid" href="#projects">
            View work
          </a>
          <a className="btn btn--ghost" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </section>
  )
}
