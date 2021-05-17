import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import BackgroudImg from '../../../img/backgroundImg.jpg'
import Logo from '../../../img/logo.jpg';
import LoginService from '../../../services/login-service';

class SideNavBar extends React.Component {
    constructor(props) {
        super(props)

        this.logout = this.logout.bind(this)
    }
    logout() {
        const login_service = new LoginService()
        login_service.logout()
        window.location.reload()
    }

    render() {
        return (
            <ProSidebar
                breakPoint="md"
                toggled={this.props.toggled}
                collapsed={this.props.collapsed}
                image={BackgroudImg}
                onToggle={this.props.onToggle}>
                <SidebarHeader>
                    <div
                        style={{
                            padding: '0',
                            letterSpacing: '1px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        <img className="logoPainel" src={Logo} alt="emaLog" />
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
                            <a href="/solicitacoes">Solicitações</a>
                        </MenuItem>
                        <hr className='bg-secondary mx-4' />
                        <SubMenu title="Karimem Cavalcante" icon={<FontAwesomeIcon icon="user-tie" />}>
                            <MenuItem><a href="/perfil">Ver perfil</a></MenuItem>
                        </SubMenu>
                    </Menu>
                </SidebarContent>
                <SidebarFooter style={{ textAlign: 'center' }}>
                    <div className="sidebar-btn-wrapper">
                        <Button className="sidebar-btn" onClick={this.logout}>
                            <span>Sair</span>
                            <FontAwesomeIcon icon="sign-out-alt" />
                        </Button>
                    </div>
                </SidebarFooter>
            </ProSidebar>
        )
    }
}

export default SideNavBar