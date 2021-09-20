import React, { Suspense } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { AuthProvider } from '../providers/AuthProvider'
import { ThemeProvider } from 'theme-ui'
import {
  HOME_PAGE_PATH,
  DASHBOARD_PAGE_PATH,
  SIGN_IN_PAGE_PATH,
  SIGN_UP_PAGE_PATH,
  WELCOME_PAGE_PATH,
} from '../config/paths'
import { SignUp } from '../components/SignUp/SignUp'
import { Dashboard } from '../components/Dashboard/Dashboard'
import { SignIn } from '../components/SignIn/SignIn'
import { Logo } from '../components/Logo/Logo'
import { Layout } from '../components/Layout/Layout'
import { Footer } from '../components/Footer/Footer'
import { Welcome } from '../components/Welcome/Welcome'
import theme from '../../theme'

function App(): JSX.Element {
  return (
    <div className="App">
      <Suspense fallback={'Loading'}>
        <AuthProvider>
          <Router>
            <Logo />
            <Switch>
              <Route exact path={SIGN_UP_PAGE_PATH} component={SignUp} />
              <Route exact path={SIGN_IN_PAGE_PATH} component={SignIn} />
              <Route exact path={HOME_PAGE_PATH} component={Welcome} />
              <Layout>
                <Route exact path={DASHBOARD_PAGE_PATH} component={Dashboard} />
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
