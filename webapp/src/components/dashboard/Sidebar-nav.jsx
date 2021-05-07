import React from 'react'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import '../../stylesheet/dashboard.css'
class SidebarNav extends React.Component {
    render() {
        return (
            <React.Fragment>
                <SideNav id="sidenav-bar" onSelect={(selected) => {
                    const to = `/${selected}`
                    console.log(to)
                    console.log(window.location.pathname)

                    if (window.location.pathname !== to) {
                        window.location.href = to
                    }
                }}>
                    <SideNav.Toggle />
                    <SideNav.Nav defaultSelected={this.props.pageName}>
                        <NavItem eventKey="dashboard" >
                            <NavIcon>
                                <FontAwesomeIcon icon="home" />
                            </NavIcon>
                            <NavText>
                                Home
                          </NavText>
                        </NavItem>
                        <NavItem eventKey="painel-de-controle" >
                            <NavIcon>
                                <FontAwesomeIcon icon="chart-bar" />
                            </NavIcon>
                            <NavText className="nav-text">
                                Painel de controle
                            </NavText>
                            <NavItem eventKey="painel-de-controle/solicitados">
                                <NavText>Solicitados</NavText>
                            </NavItem>
                            <NavItem eventKey="painel-de-controle/em-andamento">
                                <NavText>Em andamento</NavText>
                            </NavItem>
                            <NavItem eventKey="painel-de-controle/concluido">
                                <NavText>Concluído</NavText>
                            </NavItem>
                        </NavItem>
                        <NavItem eventKey="solicitacoes" >
                            <NavIcon>
                                <FontAwesomeIcon icon="list-alt" />
                            </NavIcon>
                            <NavText>
                                Solicitações
                            </NavText>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>
            </React.Fragment>
        )
    }
}

export default SidebarNav