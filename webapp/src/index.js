import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Switch } from 'react-router-dom'
import { GuardProvider, GuardedRoute } from 'react-router-guards'

// * Middleware
import Middleware from './middleware/middleware'

// * Style
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

// * Components
import Login from './components/Login'
import Dashboard from './components/Dashboard';

const middleware = new Middleware()

ReactDOM.render(
    <BrowserRouter>
        <GuardProvider guards={[middleware.requireAuth]}>
            <Switch>
                <GuardedRoute path="/" exact component={Login} />
                <GuardedRoute path="/dashboard" exact component={Dashboard} meta={{auth: true}} />
            </Switch>
        </GuardProvider>
    </BrowserRouter>,
    document.getElementById('root')
)