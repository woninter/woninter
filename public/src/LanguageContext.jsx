import { createContext, useContext, useState, useEffect } from 'react'
import { translations } from './i18n.js'

const LanguageContext = createContext(null)

const STORAGE_KEY = 'won-lang'

export function LanguageProvider({ children }) {
  // 기본 언어: 영어. 이전에 고른 언어가 있으면 그것을 사용.
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'en'
    const saved = window.localStorage.getItem(STORAGE_KEY)
    return saved === 'ko' || saved === 'en' ? saved : 'en'
  })

  useEffect(() => {
    try { window.localStorage.setItem(STORAGE_KEY, lang) } catch (e) { /* 무시 */ }
    document.documentElement.lang = lang
  }, [lang])

  const toggle = () => setLang((p) => (p === 'en' ? 'ko' : 'en'))

  const value = { lang, setLang, toggle, t: translations[lang] }
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

// 어느 컴포넌트에서나 현재 언어와 문구를 가져다 쓰는 훅
export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}
