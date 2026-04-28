import { Route, Switch } from 'wouter'
import Home from './pages/Home'

export default function App() {
  return (
    <Switch>
      {/* Durante a transição: tanto / quanto /brandbook servem o manual atual.
          Fase 4 vai apontar / para o site institucional novo. */}
      <Route path="/" component={Home} />
      <Route path="/brandbook" component={Home} />
      {/* 404 — fallback para o manual */}
      <Route component={Home} />
    </Switch>
  )
}
