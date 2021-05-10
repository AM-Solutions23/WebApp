import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import sidebarBg from '../../../assets/bg1.jpg'

class SideNavBar extends React.Component {

    render() {
        return (
            <ProSidebar
                breakPoint="md"
                toggled={this.props.toggled}
                collapsed={this.props.collapsed}
                image={sidebarBg}
                onToggle={this.props.onToggle}>
                <SidebarHeader>
                    <div
                        style={{
                            padding: '24px',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            fontSize: 14,
                            letterSpacing: '1px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        <h3>EmaLog</h3>
                    </div>
                </SidebarHeader>
                <SidebarContent>
                    <Menu iconShape="circle">
                        <MenuItem icon={<FontAwesomeIcon icon="home" />}>
                            <a href="/dashboard">Home</a>
                        </MenuItem>
                        <SubMenu title="Painel de Controle" icon={<FontAwesomeIcon icon="chart-bar" />}>
                            <MenuItem><a href="/painel-de-controle/solicitados">Solicitados</a></MenuItem>
                            <MenuItem><a href="/painel-de-controle/em-andamento">Em andamento</a></MenuItem>
                            <MenuItem><a href="/painel-de-controle/concluidos">Concluídos</a></MenuItem>
                        </SubMenu>
                        <MenuItem icon={<FontAwesomeIcon icon="list-alt" />}>
                            Solicitações
                        </MenuItem>
                    </Menu>
                </SidebarContent>
                <SidebarFooter style={{ textAlign: 'center' }}>
                    <div className="sidebar-btn-wrapper">
                        <a href="/" className="sidebar-btn">
                            <span>Sair</span>
                            <FontAwesomeIcon icon="sign-out-alt" />
                        </a>
                    </div>
                </SidebarFooter>
            </ProSidebar>
        )
    }
}

export default SideNavBar