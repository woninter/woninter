import { company } from './company.js'
import { useLang } from './LanguageContext.jsx'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

const Arrow = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function App() {
  const { t, lang } = useLang()
  const ceo = company.ceo[lang]
  const cardName = lang === 'ko' ? company.nameKo : company.nameEn

  return (
    <div className="page" id="top">
      <Nav />
      <div className="m-stripe" />

      <main className="hero">
        {/* Left */}
        <section className="hero-lead">
          <p className="eyebrow t-label"><span className="bar" />{t.hero.eyebrow}</p>
          <h1 className="t-display-xl">
            WON<br />INTERNATIONAL
          </h1>
          <p className="hero-sub t-body-md">{t.hero.sub}</p>
          <div className="hero-actions">
            <a className="btn btn--primary" href={`mailto:${company.contact.email}`}>{t.hero.ctaQuote} <Arrow /></a>
            <a className="btn btn--outline" href="#contact">{t.hero.ctaContact}</a>
          </div>
          <dl className="hero-stats">
            <div className="cell"><div className="v t-display-sm">{company.since}</div><div className="k t-label">{t.hero.statSinceLabel}</div></div>
            <div className="cell"><div className="v t-display-sm">{ceo}</div><div className="k t-label">{t.hero.statCeoLabel}</div></div>
            <div className="cell"><div className="v t-title-md" style={{ fontWeight: 700, paddingTop: 6 }}>{t.hero.statDealsValue}</div><div className="k t-label">{t.hero.statDealsLabel}</div></div>
          </dl>
        </section>

        {/* Right */}
        <section className="hero-visual">
          <article className="info-card" id="contact">
            <div className="card-stripe" />
            <div className="card-body">
              <span className="badge t-label">{t.card.badge} {company.since}</span>
              <h2 className="card-name t-title-lg">{cardName}</h2>
              <p className="card-meta t-body-sm">{t.card.meta(ceo, company.bizNo)}</p>

              <div className="divider" />
              <dl>
                <div className="row"><dt className="t-caption">{t.card.businessAddr}</dt><dd className="dd t-body-sm">{company.address.business[lang]}</dd></div>
                <div className="row"><dt className="t-caption">{t.card.warehouse}</dt><dd className="dd t-body-sm">{company.address.warehouse[lang]}</dd></div>
              </dl>

              <div className="divider" />
              <dl>
                <div className="row"><dt className="t-caption">{t.card.phone}</dt><a className="dd t-body-sm" href={`tel:${company.contact.phone}`}>{company.contact.phone}</a></div>
                <div className="row"><dt className="t-caption">{t.card.fax}</dt><dd className="dd t-body-sm">{company.contact.fax}</dd></div>
                <div className="row"><dt className="t-caption">{t.card.email}</dt><a className="dd t-body-sm" href={`mailto:${company.contact.email}`}>{company.contact.email}</a></div>
              </dl>
            </div>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  )
}
