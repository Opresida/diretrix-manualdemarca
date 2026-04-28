import { Route, Switch } from 'wouter'
import Home from './pages/Home'
import Brandbook from './pages/Brandbook'

export default function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/brandbook" component={Brandbook} />
      {/* 404 — fallback para a Home institucional */}
      <Route component={Home} />
    </Switch>
  )
}
