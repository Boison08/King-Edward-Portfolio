import { experience } from '../data/content'
import { Reveal } from './Reveal'

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <Reveal>
          <p className="section-label">Experience</p>
          <h2 className="section-title">Work history</h2>
          <p className="section-lead">
            Roles that sharpened supervision, communication, and delivery in
            collaborative settings.
          </p>
        </Reveal>

        <div className="experience__list">
          {experience.map((job) => (
            <Reveal as="article" className="experience__item" key={job.role + job.org}>
              <p className="experience__dates">{job.dates}</p>
              <div>
                <h3 className="experience__role">{job.role}</h3>
                <p className="experience__org">{job.org}</p>
                <p className="experience__place">{job.place}</p>
                <p className="experience__detail">{job.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
