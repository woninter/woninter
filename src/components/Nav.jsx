import { company } from '../company.js'
import logo from '/logo.png'

export default function Nav() {
  return (
    <header className="top-nav">
      <div className="nav-left">
        <a className="nav-logo" href="#top">
          <img src={logo} alt={`${company.nameEn} 로고`} />
          <span className="wordmark t-nav" style={{ fontWeight: 700 }}>{company.nameEn}</span>
        </a>
        <nav className="nav-menu t-nav">
          <a className="active" href="#top">소개</a>
          <a href="#contact">연락처</a>
        </nav>
      </div>
      <div className="nav-right">
        <a className="nav-cta" href={`mailto:${company.contact.email}`}>견적 문의</a>
      </div>
    </header>
  )
}
