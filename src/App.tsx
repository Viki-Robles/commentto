import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { SignUp } from '../src/components/SignUp/SignUp'
import { Dashboard } from './components/Dashboard/Dashboard'
import { AuthProvider } from './providers/AuthProvider'
import { Layout } from './components/Layout/Layout'
import {
  BASE_URL_PATH,
  DASHBOARD_PAGE_PATH,
  SIGN_IN_PAGE_PATH,
  SIGN_UP_PAGE_PATH,
} from './config/paths'
import { SignIn } from './components/SignIn/SignIn'

function App(): JSX.Element {
  return (
    <div className="App">
      <Suspense fallback={'Loading'}>
        <AuthProvider>
          <Router>
            <Switch>
              <Route path={SIGN_UP_PAGE_PATH} component={SignUp} />
              <Route path={SIGN_IN_PAGE_PATH} component={SignIn} />
              <Layout>
                <Route path={DASHBOARD_PAGE_PATH} component={Dashboard} />
              </Layout>
            </Switch>
          </Router>
        </AuthProvider>
      </Suspense>
    </div>
  )
}

export default App
