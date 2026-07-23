import { profile } from '../data/content'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__brand">{profile.brand}</p>
        <p>
          © {year} {profile.fullName}. Forest Resources Technology.
        </p>
      </div>
    </footer>
  )
}
