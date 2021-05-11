import React from 'react'
import SolicitacaoTable from './Solicitacao-table'
import Dashboard from '../Dashboard'

class PainelControleConcluido extends Dashboard {
    constructor(props) {
        super(props)
        this.content = <SolicitacaoTable painelName='Concluídos' />
    }
}

export default PainelControleConcluido
