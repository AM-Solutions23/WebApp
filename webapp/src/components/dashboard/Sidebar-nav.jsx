import React from 'react'
import SideNav, { NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../../stylesheet/dashboard.css'
class SidebarNav extends React.Component {
    render() {
        return (
            <React.Fragment>
                <SideNav id="sidenav-bar" onSelect={(selected) => {
                    const to = `/${selected}`
                    console.log(to)
                    if(window.location.pathname !== to){
                        this.props.history.push(to)
                    } 
                }}>
                    <SideNav.Toggle />
                    <SideNav.Nav defaultSelected="dashboard">
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
                            <NavText>
                                Painel de controle
                            </NavText>
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