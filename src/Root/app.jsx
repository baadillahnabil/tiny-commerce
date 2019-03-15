import React, { Component, Suspense, lazy } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// Components
import Navbar from '../components/Navbar/navbar'

// Pages
const Home = lazy(() => import('../pages/Products/products'))
const Carts = lazy(() => import('../pages/Carts/carts'))

class App extends Component {
  render() {
    return (
      <>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <Switch>
            <Route path="/" exact render={() => <Home />} />
            <Route path="/carts" render={() => <Carts />} />
            <Route path="*" render={() => <Redirect to="/" />} />
          </Switch>
        </Suspense>
      </>
    )
  }
}

export default App
