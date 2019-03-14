import React, { Component, Suspense, lazy } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// Pages
const Home = lazy(() => import('../pages/Products/products'))

class App extends Component {
  render() {
    return (
      <>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" exact render={() => <Home />} />
            <Route path="*" render={() => <Redirect to="/" />} />
          </Switch>
        </Suspense>
      </>
    )
  }
}

export default App
