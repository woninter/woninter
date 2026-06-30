import { company } from '../company.js'
import { useLang } from '../LanguageContext.jsx'
import logo from '/logo.png'

export default function Footer() {
  const { t, lang } = useLang()
  const ceo = company.ceo[lang]
  return (
    <footer className="footer">
      <div className="m-stripe" />
      <div className="footer-inner">
        <div>
          <div className="f-logo">
            <img src={logo} alt="" aria-hidden="true" />
            <span className="t-body-sm">{company.nameEn}</span>
          </div>
          <p className="t-body-sm">{t.footer.tagline}</p>
        </div>
        <div>
          <h4 className="t-label">{t.footer.company}</h4>
          <ul className="t-body-sm">
            <li><a href="#top">{t.footer.about}</a></li>
            <li><a href="#contact">{t.footer.contact}</a></li>
          </ul>
        </div>
        <div>
          <h4 className="t-label">{t.footer.inquiry}</h4>
          <ul className="t-body-sm">
            <li><a href={`tel:${company.contact.phone}`}>{company.contact.phone}</a></li>
            <li><a href={`mailto:${company.contact.email}`}>{company.contact.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom t-caption">
        <span>{t.footer.rights(new Date().getFullYear(), company.nameEn, ceo)}</span>
        <span>{t.footer.bizNo(company.bizNo)}</span>
      </div>
    </footer>
  )
}
