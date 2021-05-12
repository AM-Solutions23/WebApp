import React from 'react'

import '../../../stylesheet/dashboard.css'
import Dashboard from '../Dashboard'
import PainelControleContent from './Painel-de-controle-content'

class PainelControleSolicitados extends Dashboard {
    constructor(props) {
        super(props)
        this.content = <PainelControleContent pageType = 'Solicitados' />
    }
}

export default PainelControleSolicitados
