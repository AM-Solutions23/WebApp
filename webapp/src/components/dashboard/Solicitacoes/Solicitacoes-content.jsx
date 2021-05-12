import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container, Accordion, Card, Button } from 'react-bootstrap'
import SolicitacaoService from '../../../services/solicitacao-service'
import SolicitacaoTable from '../SolicitacaoTable/Solicitacao-table'
import CadastroSolicitacaoForm from './Cadastro-solicitacao-form'

class SolicitacoesContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allSolicitacoes: []
        }
    }
    componentDidMount() {
        const solicitacoes_service = new SolicitacaoService()
        solicitacoes_service.todasSolicitacoes().then(response => {
            this.setState({
                allSolicitacoes: response
            })
        })
    }
    render() {
        return (
            <React.Fragment>
                <Container>
                    <Accordion >
                        <Card>
                            <Card.Header className='text-center bg-primary'>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    <h5 className='text-light'>Nova Solicitação <FontAwesomeIcon icon='plus' /></h5>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body><CadastroSolicitacaoForm /></Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Container>
                <br />
                <SolicitacaoTable painelName='Solicitações' dadosTabela={this.state.allSolicitacoes} />
            </React.Fragment>
        )
    }
}

export default SolicitacoesContent