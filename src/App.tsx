import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AuthProvider } from './providers/AuthProvider'
import {
  BASE_URL_PATH,
  DASHBOARD_PAGE_PATH,
  SIGN_IN_PAGE_PATH,
  SIGN_UP_PAGE_PATH,
} from './config/paths'
import { SignUp } from '../src/components/SignUp/SignUp'
import { Dashboard } from './components/Dashboard/Dashboard'
import { SignIn } from './components/SignIn/SignIn'
import { Logo } from './components/Logo/Logo'
import { Layout } from './components/Layout/Layout'
import { Footer } from './components/Footer/Footer'
import { Welcome } from './components/Welcome/Welcome'

function App(): JSX.Element {
  return (
    <div className="App">
      <Suspense fallback={'Loading'}>
        <AuthProvider>
          <Router>
            <Logo />
            <Switch>
              <Route path={SIGN_UP_PAGE_PATH} component={SignUp} />
              <Route path={SIGN_IN_PAGE_PATH} component={SignIn} />
              <Layout>
                <Route path={DASHBOARD_PAGE_PATH} component={Dashboard} />
                {/* <Route path={BASE_URL_PATH} component={Welcome} /> */}
              </Layout>
            </Switch>
            <Footer />
          </Router>
        </AuthProvider>
      </Suspense>
    </div>
  )
}

export default App
