import React from 'react'
import SolicitacaoService from '../../../services/solicitacao-service'
import SolicitacaoConcluidaTable from '../SolicitacaoTable/SolicitacaoConcluida-table'
import SolicitacaoEmAndamento from '../SolicitacaoTable/SolicitacaoEmAndamento-table'
import SolicitacaoSolicitadaTable from '../SolicitacaoTable/SolicitacaoSolicitada-table'
class PainelControleContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allSolicitacoes: []
        }

        this.pageComponents = {
            'Concluídos': SolicitacaoConcluidaTable,
            'Solicitados': SolicitacaoSolicitadaTable,
            'Em andamento': SolicitacaoEmAndamento
        }
    }
    componentDidMount() {

        const solicitacoes_service = new SolicitacaoService()
        this.pageTypes = {
            'Concluídos': solicitacoes_service.todasSolicitacoesPorStatus('entregue'),
            'Em andamento': solicitacoes_service.todasSolicitacoesPorStatus('em-andamento'),
            'Solicitados': solicitacoes_service.todasSolicitacoesPorStatus('solicitado')
        }


        this.pageTypes[this.props.pageType].then(response => {
            this.setState({
                allSolicitacoes: response
            })
        })
    }

    render() {
        const TableComponent = this.pageComponents[this.props.pageType]

        return (
            <React.Fragment>
                < TableComponent dadosTabela={this.state.allSolicitacoes} />
            </React.Fragment>
        )
    }
}

export default PainelControleContent