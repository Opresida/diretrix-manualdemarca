import { Route, Switch } from 'wouter'
import Home from './pages/Home'
import Brandbook from './pages/Brandbook'
import ConsultoriaTI from './pages/ConsultoriaTI'
import TreinamentosProfissionais from './pages/TreinamentosProfissionais'

export default function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/brandbook" component={Brandbook} />
      <Route path="/consultoria-ti" component={ConsultoriaTI} />
      <Route path="/treinamentos-profissionais" component={TreinamentosProfissionais} />
      {/* 404 — fallback para a Home institucional */}
      <Route component={Home} />
    </Switch>
  )
}
