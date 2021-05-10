import React from 'react'
import SolicitacaoTable from './Solicitacao-table'

import '../../../stylesheet/dashboard.css'
import Dashboard from '../Dashboard'

class PainelControleEmAndamento extends Dashboard {
    constructor(props) {
        super(props)
        this.content = <SolicitacaoTable painelName='Em andamento' />
    }
}

export default PainelControleEmAndamento
