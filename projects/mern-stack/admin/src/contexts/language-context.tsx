import React, { createContext, useContext } from 'react'

import { useTranslation } from 'react-i18next'

export const LanguageContext = createContext(undefined)

type LanguageContextType = {
  children: React.ReactNode
}

export const LanguageContextProvider = ({ children }: LanguageContextType) => {
  const languages = {
    en: { nativeName: 'english' },
    It: { nativeName: 'vietnamese' }
  }
  const { t, i18n } = useTranslation()

  const onClickLanguageChange = (e: any) => {
    const language = e.target.value
    i18n.changeLanguage(language) //change the language
  }

  return (
    <LanguageContext.Provider value={{ t, i18n, onClickLanguageChange, languages }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguageContext = () => useContext(LanguageContext)
