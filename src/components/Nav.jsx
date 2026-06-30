import { company } from '../company.js'
import { useLang } from '../LanguageContext.jsx'
import logo from '/logo.png'

export default function Nav() {
  const { t, lang, toggle } = useLang()
  return (
    <header className="top-nav">
      <div className="nav-left">
        <a className="nav-logo" href="#top">
          <img src={logo} alt={`${company.nameEn} logo`} />
          <span className="wordmark t-nav" style={{ fontWeight: 700 }}>{company.nameEn}</span>
        </a>
        <nav className="nav-menu t-nav">
          <a className="active" href="#top">{t.nav.about}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>
      </div>
      <div className="nav-right">
        <button
          className="lang-toggle t-nav"
          onClick={toggle}
          aria-label={t.lang.label}
          title={t.lang.label}
        >
          <span className={lang === 'en' ? 'on' : ''}>EN</span>
          <span className="lang-sep">/</span>
          <span className={lang === 'ko' ? 'on' : ''}>KO</span>
        </button>
      </div>
    </header>
  )
}
