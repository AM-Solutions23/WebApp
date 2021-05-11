import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Switch } from 'react-router-dom'
import { GuardProvider, GuardedRoute } from 'react-router-guards'

// * Middleware
import Middleware from './middleware/middleware'

// * Style
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import './stylesheet/ProSideBar.scss';

// * Components
import Login from './components/Login'
import Dashboard from './components/dashboard/Dashboard';
import PainelControleSolicitados from './components/dashboard/painel-de-controle/Painel-de-controle-solicitados'
import PainelControleEmAndamento from './components/dashboard/painel-de-controle/Painel-de-controle-em-andamento'
import PainelControleConcluido from './components/dashboard/painel-de-controle/Painel-de-controle-concluido'
import Solicitacoes from './components/dashboard/Solicitacoes/Solicitacoes'


// * Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHome, faChartBar, faListAlt, faSignOutAlt, faBars, faPlus, faUserTie } from '@fortawesome/free-solid-svg-icons'
import PerfilUsuario from './components/dashboard/Perfil-usuario/PerfilUsuario'


const middleware = new Middleware()


library.add(fab, faHome, faChartBar, faListAlt, faSignOutAlt, faBars, faPlus, faUserTie)

ReactDOM.render(
    <BrowserRouter>
        <GuardProvider guards={[middleware.requireAuth]}>
            <Switch>
                <GuardedRoute path="/" exact component={Login} />
                <GuardedRoute path="/dashboard" exact component={Dashboard} meta={{ auth: true }} />
                <GuardedRoute path="/painel-de-controle/solicitados" exact component={PainelControleSolicitados} meta={{ auth: true }} />
                <GuardedRoute path="/painel-de-controle/em-andamento" exact component={PainelControleEmAndamento} meta={{ auth: true }} />
                <GuardedRoute path="/painel-de-controle/concluidos" exact component={PainelControleConcluido} meta={{ auth: true }} />
                <GuardedRoute path="/solicitacoes" exact component={Solicitacoes} meta={{ auth: true }} />
                <GuardedRoute path="/perfil" exact component={PerfilUsuario} meta={{ auth: true }} />
            </Switch>
        </GuardProvider>
    </BrowserRouter>,
    document.getElementById('root')
)