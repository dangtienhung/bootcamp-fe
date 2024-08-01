import './i18next'
import './styles/index.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { persistor, store } from './stores/store.tsx'

import { ConfigProvider } from 'antd'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App.tsx'
import { LanguageContextProvider } from './contexts/language-context.tsx'
import theme from './styles/them-antd.ts'

// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <LanguageContextProvider>
            <ConfigProvider theme={theme}>
              <App />
            </ConfigProvider>
          </LanguageContextProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
)
