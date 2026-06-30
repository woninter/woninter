import { company } from '../company.js'
import logo from '/logo.png'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="m-stripe" />
      <div className="footer-inner">
        <div>
          <div className="f-logo">
            <img src={logo} alt="" aria-hidden="true" />
            <span className="t-body-sm">{company.nameEn}</span>
          </div>
          <p className="t-body-sm">산업용 베어링을 찾는 유통사를 위한 안정적인 공급 파트너.</p>
        </div>
        <div>
          <h4 className="t-label">회사</h4>
          <ul className="t-body-sm">
            <li><a href="#top">소개</a></li>
            <li><a href="#contact">연락처</a></li>
          </ul>
        </div>
        <div>
          <h4 className="t-label">문의</h4>
          <ul className="t-body-sm">
            <li><a href={`tel:${company.contact.phone}`}>{company.contact.phone}</a></li>
            <li><a href={`mailto:${company.contact.email}`}>{company.contact.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom t-caption">
        <span>© {new Date().getFullYear()} {company.nameEn}. 대표 {company.ceo}.</span>
        <span>사업자등록번호 {company.bizNo}</span>
      </div>
    </footer>
  )
}
