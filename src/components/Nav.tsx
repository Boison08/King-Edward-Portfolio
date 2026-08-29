import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navLinks, profile } from '../data/content'

export function Nav() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [overHero, setOverHero] = useState(isHome)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      setOverHero(isHome && window.scrollY < window.innerHeight * 0.72)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  const sectionHref = (href: string) => (isHome ? href : `/${href}`)

  const navClass = [
    'nav',
    scrolled || !isHome ? ' is-scrolled' : '',
    overHero ? ' is-over-hero' : '',
  ].join('')

  return (
    <header className={navClass}>
      <div className="container nav__inner">
        <Link className="nav__brand" to="/" onClick={close}>
          {profile.brand}
        </Link>

        <nav aria-label="Primary">
          <ul className="nav__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                {link.route ? (
                  <Link
                    className={`nav__link${location.pathname === link.href ? ' is-active' : ''}`}
                    to={link.href}
                    onClick={close}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a className="nav__link" href={sectionHref(link.href)} onClick={close}>
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <a className="nav__cta" href={sectionHref('#contact')} onClick={close}>
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
        {navLinks.map((link) =>
          link.route ? (
            <Link key={link.href} to={link.href} onClick={close}>
              {link.label}
            </Link>
          ) : (
            <a key={link.href} href={sectionHref(link.href)} onClick={close}>
              {link.label}
            </a>
          ),
        )}
        <a href={sectionHref('#contact')} onClick={close}>
          Get in touch
        </a>
      </div>
    </header>
  )
}
