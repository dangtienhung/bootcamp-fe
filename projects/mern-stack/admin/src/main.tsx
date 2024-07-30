import './i18next'
import './styles/index.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { ConfigProvider } from 'antd'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.tsx'
import { LanguageContextProvider } from './contexts/language-context.tsx'
import { store } from './stores/store.tsx'
import theme from './styles/them-antd.ts'

// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <LanguageContextProvider>
          <ConfigProvider theme={theme}>
            <App />
          </ConfigProvider>
        </LanguageContextProvider>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
)
