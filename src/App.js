import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as ROUTES from './constants/routes'

const Login = lazy(() => import ('./pages/login'))
const SignUp = lazy(() => import ('./pages/sign-up'))


function App() {
  return (
    <Router>
      <Suspense fallback={ <p>Loading....</p> }>
        <Switch>
          <Route path={ROUTES.LOGIN} component={Login} />
          <Route path={ROUTES.SIGN_UP} component={SignUp} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;


// client side rendered app: react (Cra)
// -> database (firebase)
// -> react-loading-skeleton
// tailwind

// folder structure

// src
  // -> components, 
  // -> constants, 
  // -> context, 
  // -> lib (firebase)
  // -> helpers (firebase)
  // -> services 
  // -> styles
  // -> hooks