import React from 'react'
import Dashboard from '../Dashboard'
import PainelControleContent from './Painel-de-controle-content'

class PainelControleConcluido extends Dashboard {
    constructor(props) {
        super(props)
        this.content = <PainelControleContent pageType = 'Concluídos' />
    }
}

export default PainelControleConcluido
