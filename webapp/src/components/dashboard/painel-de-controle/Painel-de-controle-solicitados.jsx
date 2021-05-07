import React from 'react'
import SolicitacaoTable from './Solicitacao-table'
import TopbarNav from '../Topbar-nav'
import SidebarNav from '../Sidebar-nav'
import { Container } from 'react-bootstrap'
import '../../../stylesheet/dashboard.css'

class PainelControleSolicitados extends React.Component {
    render() {
        return (
            <React.Fragment>
                <TopbarNav />
                <SidebarNav pageName='painel-de-controle' />
                <Container className="dashboard-content">
                    <SolicitacaoTable painelName='Solicitados' />
                </Container>
            </React.Fragment>
        )
    }
}

export default PainelControleSolicitados