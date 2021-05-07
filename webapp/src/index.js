import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Switch } from 'react-router-dom'
import { GuardProvider, GuardedRoute } from 'react-router-guards'

// * Middleware
import Middleware from './middleware/middleware'

// * Style
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

// * Components
import Login from './components/Login'
import Dashboard from './components/dashboard/Dashboard';
import PainelDeControle from './components/dashboard/painel-de-controle/Painel-de-controle'

// * Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHome, faChartBar, faListAlt } from '@fortawesome/free-solid-svg-icons'
import PainelControleSolicitados from './components/dashboard/painel-de-controle/Painel-de-controle-solicitados'

const middleware = new Middleware()


library.add(fab, faHome, faChartBar, faListAlt)

ReactDOM.render(
    <BrowserRouter>
        <GuardProvider guards={[middleware.requireAuth]}>
            <Switch>
                <GuardedRoute path="/" exact component={Login} />
                <GuardedRoute path="/dashboard" exact component={Dashboard} meta={{auth: true}} />
                <GuardedRoute path="/painel-de-controle" exact component={PainelDeControle} meta={{auth: true}} />
                <GuardedRoute path="/painel-de-controle/solicitados" exact component={PainelControleSolicitados} meta={{auth: true}} />
            </Switch>
        </GuardProvider>
    </BrowserRouter>,
    document.getElementById('root')
)