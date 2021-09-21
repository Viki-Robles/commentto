import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AuthProvider } from '../providers/AuthProvider'
import {
  DASHBOARD_PAGE_PATH,
  SIGN_IN_PAGE_PATH,
  SIGN_UP_PAGE_PATH,
  HOME_PAGE_PATH,
} from '../config/paths'
import { SignUp } from '../components/SignUp/SignUp'
import { Dashboard } from '../components/Dashboard/Dashboard'
import { SignIn } from '../components/SignIn/SignIn'
import { Logo } from '../components/Logo/Logo'
import { Footer } from '../components/Footer/Footer'
import { NotFound } from '../components/NotFound/NotFound'

function App(): JSX.Element {
  return (
    <div className="App">
      <Suspense fallback={'Loading...'}>
        <AuthProvider>
          <Router>
            <Logo />
            <Switch>
              <Route exact path={SIGN_UP_PAGE_PATH} component={SignUp} />
              <Route exact path={SIGN_IN_PAGE_PATH} component={SignIn} />
              <Route exact path={HOME_PAGE_PATH} component={SignIn} />
              <Route exact path={DASHBOARD_PAGE_PATH} component={Dashboard} />
              <Route exact path="*" component={NotFound} />
            </Switch>
            <Footer />
          </Router>
        </AuthProvider>
      </Suspense>
    </div>
  )
}

export default App
