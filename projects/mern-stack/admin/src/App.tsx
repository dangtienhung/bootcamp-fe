import { RouterProvider } from 'react-router-dom'
import { LanguageProvider } from './contexts/language-context'
import routes from './routes'
import { useAppSelector } from './stores/hooks'
import { RootState } from './stores/store'

function App() {
  const { language } = useAppSelector((state: RootState) => state.language)
  console.log('🚀 ~ App ~ language:', language)

  return (
    <LanguageProvider languageLocal={language}>
      <RouterProvider router={routes} />
    </LanguageProvider>
  )
}

export default App
