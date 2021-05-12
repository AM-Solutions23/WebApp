import React from 'react'
import Dashboard from '../Dashboard'
import SolicitacoesContent from './Solicitacoes-content'

class Solicitacoes extends Dashboard{
    constructor(props){
        super(props)
        this.content = <SolicitacoesContent history={this.props.history}/>
    }
}

export default Solicitacoes