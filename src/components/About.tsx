import { focusAreas, profile } from '../data/content'
import { Reveal } from './Reveal'

export function About() {
  return (
    <section className="section" id="about">
      <div className="container about__grid">
        <Reveal className="about__figure">
          <img
            src="/assets/portrait-lean.jpg"
            alt={`${profile.fullName} standing outdoors in formal attire`}
            width={900}
            height={1125}
          />
        </Reveal>

        <Reveal>
          <p className="section-label">About</p>
          <h2 className="about__name">{profile.fullName}</h2>
          <p className="about__copy">{profile.summary}</p>
          <p className="about__copy">
            Based in {profile.location}, I am looking for opportunities in
            forestry, conservation, and sustainable development where practical
            fieldwork and careful analysis can make a lasting difference.
          </p>
          <ul className="about__tags" aria-label="Focus areas">
            {focusAreas.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
