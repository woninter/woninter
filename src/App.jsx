import { company } from './company.js'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function Bearing() {
  const ticks = Array.from({ length: 24 })
  const balls = Array.from({ length: 8 })
  return (
    <svg className="bearing" viewBox="0 0 400 400" aria-hidden="true">
      <circle cx="200" cy="200" r="186" className="ring ring--dash" />
      <circle cx="200" cy="200" r="150" className="ring" />
      <g className="spin">
        {ticks.map((_, i) => {
          const a = (i / ticks.length) * Math.PI * 2
          return <line key={i}
            x1={200 + Math.cos(a) * 150} y1={200 + Math.sin(a) * 150}
            x2={200 + Math.cos(a) * 168} y2={200 + Math.sin(a) * 168}
            className="tick" />
        })}
      </g>
      <g className="spin-rev">
        {balls.map((_, i) => {
          const a = (i / balls.length) * Math.PI * 2
          return <circle key={i} cx={200 + Math.cos(a) * 110} cy={200 + Math.sin(a) * 110} r="13" className="ball" />
        })}
      </g>
      <circle cx="200" cy="200" r="78" className="ring" />
      <circle cx="200" cy="200" r="44" className="ring ring--m" />
    </svg>
  )
}

const Arrow = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function App() {
  return (
    <div className="page" id="top">
      <Nav />
      <div className="m-stripe" />

      <main className="hero">
        {/* Left */}
        <section className="hero-lead">
          <p className="eyebrow t-label"><span className="bar" />정밀 베어링 공급 파트너</p>
          <h1 className="t-display-xl">
            WON<br />INTERNATIONAL
          </h1>
          <p className="hero-sub t-body-md">
            산업용 베어링을 찾는 유통사를 위한 안정적인 공급 파트너입니다.
            필요한 규격을 알려주시면 정확한 견적으로 빠르게 답해 드립니다.
          </p>
          <div className="hero-actions">
            <a className="btn btn--primary" href={`mailto:${company.contact.email}`}>견적 문의하기 <Arrow /></a>
            <a className="btn btn--outline" href="#contact">연락처 보기</a>
          </div>
          <dl className="hero-stats">
            <div className="cell"><div className="v t-display-sm">{company.since}</div><div className="k t-label">설립</div></div>
            <div className="cell"><div className="v t-display-sm">{company.ceo}</div><div className="k t-label">대표</div></div>
            <div className="cell"><div className="v t-title-md" style={{ fontWeight: 700, paddingTop: 6 }}>산업용 베어링</div><div className="k t-label">취급</div></div>
          </dl>
        </section>

        {/* Right */}
        <section className="hero-visual">
          <Bearing />
          <article className="info-card" id="contact">
            <div className="card-stripe" />
            <div className="card-body">
              <span className="badge t-label">SINCE {company.since}</span>
              <h2 className="card-name t-title-lg">{company.nameEn}</h2>
              <p className="card-meta t-body-sm">대표 {company.ceo} · 사업자 {company.bizNo}</p>

              <div className="divider" />
              <dl>
                <div className="row"><dt className="t-caption">사업장 주소</dt><dd className="dd t-body-sm">{company.address.business}</dd></div>
                <div className="row"><dt className="t-caption">창고</dt><dd className="dd t-body-sm">{company.address.warehouse}</dd></div>
              </dl>

              <div className="divider" />
              <dl>
                <div className="row"><dt className="t-caption">전화</dt><a className="dd t-body-sm" href={`tel:${company.contact.phone}`}>{company.contact.phone}</a></div>
                <div className="row"><dt className="t-caption">팩스</dt><dd className="dd t-body-sm">{company.contact.fax}</dd></div>
                <div className="row"><dt className="t-caption">이메일</dt><a className="dd t-body-sm" href={`mailto:${company.contact.email}`}>{company.contact.email}</a></div>
              </dl>
            </div>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  )
}
