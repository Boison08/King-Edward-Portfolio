import {
  certification,
  education,
  leadership,
  skills,
} from '../data/content'
import { Reveal } from './Reveal'

export function Credentials() {
  return (
    <section className="section" id="credentials" aria-label="Education, leadership, and skills">
      <div className="container credentials">
        <div>
          <Reveal>
            <p className="section-label">Background</p>
            <h2 className="section-title">Education & leadership</h2>
          </Reveal>

          <Reveal className="credentials__block">
            <h3 className="credentials__heading">Education</h3>
            {education.map((item) => (
              <div className="cred-item" key={item.school}>
                <p className="cred-item__title">{item.credential}</p>
                <p className="cred-item__meta">
                  {item.school} · {item.place}
                </p>
              </div>
            ))}
          </Reveal>

          <Reveal className="credentials__block">
            <h3 className="credentials__heading">Certification</h3>
            <div className="cred-item">
              <p className="cred-item__title">{certification.note}</p>
              <p className="cred-item__meta">
                {certification.issuer} · {certification.date}
              </p>
              <p className="cred-item__detail">{certification.title}</p>
            </div>
          </Reveal>

          <Reveal className="credentials__block">
            <h3 className="credentials__heading">Leadership</h3>
            {leadership.map((item) => (
              <div className="cred-item" key={item.title}>
                <p className="cred-item__title">{item.title}</p>
                <p className="cred-item__meta">{item.context}</p>
                <p className="cred-item__detail">{item.detail}</p>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal>
          <div className="skills-panel">
            <h3>Skills & abilities</h3>

            <div className="skills-panel__group">
              <p className="skills-panel__label">Proficient</p>
              <ul>
                {skills.proficient.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>

            <div className="skills-panel__group">
              <p className="skills-panel__label">Beginner</p>
              <ul>
                {skills.beginner.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>

            <div className="skills-panel__group">
              <p className="skills-panel__label">Strengths</p>
              <ul>
                {skills.strengths.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
