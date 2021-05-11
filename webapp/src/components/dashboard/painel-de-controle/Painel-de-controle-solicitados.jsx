import React from 'react'
import SolicitacaoTable from '../SolicitacaoTable/Solicitacao-table'

import '../../../stylesheet/dashboard.css'
import Dashboard from '../Dashboard'

class PainelControleSolicitados extends Dashboard {
    constructor(props) {
        super(props)
        this.content = <SolicitacaoTable painelName='Solicitados' />
    }
}

export default PainelControleSolicitados
