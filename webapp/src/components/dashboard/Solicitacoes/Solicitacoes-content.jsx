import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container, Accordion, Card, Button } from 'react-bootstrap'
import styled from 'styled-components'
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
                        <Card.Body style={{width:'500px'}}>
                                <Accordion.Toggle style={{border:'0', }} as={Button} variant="warning" eventKey="0">
                                    <h5 className='text-light'>Nova Solicitação <FontAwesomeIcon icon='plus' /></h5>
                                </Accordion.Toggle> 
                        </Card.Body>
                        <Card>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body><CadastroSolicitacaoForm history={this.props.history} /></Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Container>
                <br /><br />
                <SolicitacaoTable painelName='Solicitações' dadosTabela={this.state.allSolicitacoes} />
            </React.Fragment>
        )
    }
}

export default SolicitacoesContent