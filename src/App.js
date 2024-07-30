import {BrowserRouter, Route, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import SignUp from './components/SignUp'
import Home from './components/Home'
import Products from './components/Products'
import Cart from './components/Cart'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/signup" component={SignUp} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
