import { profile } from '../data/content'

const resumePdf = '/Resume_Edward_King.pdf'

export function ResumePage() {
  return (
    <main className="resume-page">
      <div className="container resume-page__intro">
        <h1 className="resume-page__title">Resume</h1>
        <p className="resume-page__lead">
          Education, experience, projects, and skills in one place. Download the
          PDF or skim the preview below.
        </p>
      </div>

      <div className="container resume-page__card-wrap">
        <article className="resume-card" aria-label="Resume preview">
          <header className="resume-card__header">
            <div className="resume-card__identity">
              <h2>{profile.fullName}</h2>
              <p>{profile.title}</p>
            </div>
            <a
              className="btn btn--resume-download"
              href={resumePdf}
              download="Gyau_Edward_King_Resume.pdf"
            >
              Download PDF
            </a>
          </header>

          <div className="resume-card__viewer">
            <iframe
              src={`${resumePdf}#view=FitH`}
              title={`${profile.fullName} resume preview`}
              loading="lazy"
            />
          </div>
        </article>
      </div>
    </main>
  )
}
