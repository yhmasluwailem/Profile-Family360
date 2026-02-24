import React from 'react'
import ReactDOM from 'react-dom/client'
import { MantineProvider, createTheme } from '@mantine/core'
import '@mantine/core/styles.css'
import '@mantine/charts/styles.css'
import App from './App'

const theme = createTheme({
  fontFamily: 'IBM Plex Sans Arabic, Segoe UI, sans-serif',
  primaryColor: 'blue',
  defaultRadius: 'md',
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="light">
      <App />
    </MantineProvider>
  </React.StrictMode>
)
