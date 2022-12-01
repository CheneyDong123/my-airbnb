import React, { memo, Suspense } from 'react'

import { useRoutes } from 'react-router-dom'
import AppFooter from './components/app-footer'
import AppHeader from './components/app-header'
import { useScrollTop } from './hooks'

import routes from './router'


const App = memo(() => {
  useScrollTop()
  return (
    <div>
      <AppHeader />
        <Suspense fallback="loading">
          <div id="content">
            {useRoutes(routes)}
          </div>
        </Suspense>
      <AppFooter /> 
    </div>
  )
})

export default App
