import { projects } from '../data/content'
import { Reveal } from './Reveal'

export function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <Reveal>
          <p className="section-label">Projects</p>
          <h2 className="section-title">Research & field work</h2>
          <p className="section-lead">
            Hands-on studies connecting cultivation methods and biomass energy
            to real forestry practice.
          </p>
        </Reveal>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <Reveal as="article" className="project" key={project.title}>
              <p className="project__index">
                Project {String(index + 1).padStart(2, '0')} · {project.dates}
              </p>
              <h3 className="project__title">{project.title}</h3>
              <p className="project__summary">{project.summary}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
