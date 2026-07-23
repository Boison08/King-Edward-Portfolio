import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data/content'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [overHero, setOverHero] = useState(true)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      setOverHero(window.scrollY < window.innerHeight * 0.72)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header
      className={`nav${scrolled ? ' is-scrolled' : ''}${overHero ? ' is-over-hero' : ''}`}
    >
      <div className="container nav__inner">
        <a className="nav__brand" href="#top" onClick={close}>
          {profile.brand}
        </a>

        <nav aria-label="Primary">
          <ul className="nav__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a className="nav__link" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a className="nav__cta" href="#contact">
          Get in touch
        </a>

        <button
          className="nav__toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`container nav__drawer${open ? ' is-open' : ''}`}
      >
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={close}>
            {link.label}
          </a>
        ))}
        <a href="#contact" onClick={close}>
          Get in touch
        </a>
      </div>
    </header>
  )
}
