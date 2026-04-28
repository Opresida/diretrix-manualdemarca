import { Route, Switch } from 'wouter'
import Brandbook from './pages/Brandbook'

export default function App() {
  return (
    <Switch>
      {/* Durante a transição: tanto / quanto /brandbook servem o manual atual.
          Fase 4 vai apontar / para o site institucional novo. */}
      <Route path="/" component={Brandbook} />
      <Route path="/brandbook" component={Brandbook} />
      {/* 404 — fallback para o manual */}
      <Route component={Brandbook} />
    </Switch>
  )
}
