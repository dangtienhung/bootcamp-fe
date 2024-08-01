import React, { createContext, useContext, useEffect, useState } from 'react'

import { TFunction } from 'i18next'
import { useTranslation } from 'react-i18next'

type LanguageContextType = {
  t: TFunction<'translation', undefined>
  languages: { name: string; code: string }[]
  onClickLanguageChange: (language: string) => void
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

type LanguageContextProviderProps = {
  children: React.ReactNode
  languageDefault: string
}

const languages = [
  {
    name: 'English',
    code: 'en'
  },
  {
    name: 'Vietnamese',
    code: 'vn'
  }
]

export const LanguageContextProvider = ({ children, languageDefault }: LanguageContextProviderProps) => {
  const { t, i18n } = useTranslation()

  const [currentLanguage, setCurrentLanguage] = useState(languageDefault)

  const onClickLanguageChange = (language: string) => {
    i18n.changeLanguage(language) //change the language
  }

  useEffect(() => {
    i18n.changeLanguage(currentLanguage)
  }, [currentLanguage])

  return (
    <LanguageContext.Provider
      value={{
        t,
        languages,
        onClickLanguageChange
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguageContext = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguageContext must be used within a LanguageContextProvider')
  }
  return context
}
