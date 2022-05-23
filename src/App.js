import {Switch, Route, Redirect} from 'react-router-dom'

import Home from './components/Home'
import NotFound from './components/NotFound'
import About from './components/About'

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/not-found" component={NotFound} />
      <Redirect to="not-found" />
    </Switch>
  </>
)

export default App
