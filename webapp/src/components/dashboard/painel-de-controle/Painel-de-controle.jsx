import React from 'react'
import SidebarNav from '../Sidebar-nav'
import TopbarNav from '../Topbar-nav'

class PainelDeControle extends React.Component{
    render(){
        return(
            <React.Fragment>
                <TopbarNav />
                <SidebarNav pageName='painel-de-controle' />
            </React.Fragment>
        )
    }
}

export default PainelDeControle