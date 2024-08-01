import { Button } from 'antd'
import { useTranslation } from 'react-i18next'

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

const HomePage = () => {
  const { i18n } = useTranslation()

  return (
    <div>
      HomePage
      {languages.map((language) => {
        return (
          <Button onClick={() => i18n.changeLanguage(language.code)} key={language.code}>
            {language.name}
          </Button>
        )
      })}
    </div>
  )
}

export default HomePage
