import React from 'react'
import SolicitacaoService from '../../../services/solicitacao-service'
import SolicitacaoTable from '../SolicitacaoTable/Solicitacao-table'

class PainelControleContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allSolicitacoes: []
        }

    }
    componentDidMount() {

        const solicitacoes_service = new SolicitacaoService()
        this.pageTypes = {
            'Concluídos': solicitacoes_service.todasSolicitacoesPorStatus('entregue'),
            'Em andamento': solicitacoes_service.todasSolicitacoesPorStatus('em-andamento'),
            'Solicitados': solicitacoes_service.todasSolicitacoesPorStatus('solicitados')
        }

        this.pageTypes[this.props.pageType].then(response => {
            this.setState({
                allSolicitacoes: response
            })
        })
    }

    render() {
        return (
            <SolicitacaoTable painelName={this.props.pageType} dadosTabela={this.state.allSolicitacoes} />
        )
    }
}

export default PainelControleContent