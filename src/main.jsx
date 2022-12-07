import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import { UserProvider } from './context'
import { GlobalStyle, Theme } from './styled-components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <GlobalStyle />
      <Theme>
        <RouterProvider router={router} />
      </Theme >
    </UserProvider>
  </React.StrictMode>
)
