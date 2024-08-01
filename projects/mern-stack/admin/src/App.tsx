import { RouterProvider } from 'react-router-dom'
import { LanguageContextProvider } from './contexts/language-context'
import routes from './routes'
import { useAppSelector } from './stores/hooks'
import { RootState } from './stores/store'

function App() {
  const { currentLanguage } = useAppSelector((state: RootState) => state.language)
  return (
    <LanguageContextProvider languageDefault={currentLanguage}>
      <RouterProvider router={routes} />
    </LanguageContextProvider>
  )
}

export default App
