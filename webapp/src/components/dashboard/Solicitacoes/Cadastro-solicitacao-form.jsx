import React from 'react'
import { Col, Container, Form, Button } from 'react-bootstrap'
import SolicitacaoService from '../../../services/solicitacao-service'
import { getCurrentDateTime } from '../../../utils/utils'

class CadastroSolicitacaoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data_solicitacao: getCurrentDateTime(),
            nome_remetente: '',
            CNPJ_remetente: '',
            inscricao_estadual_remetente: '',
            nome_destinatario: '',
            n_telefone_destinatario: '',
            endereco_destinatario: '',
            numero_endereco_destinatario: '',
            complemento_destinatario: '',
            cidade_destinatario: '',
            CEP_destinatario: '',
            estado_destinatario: '',
            local_coleta: '',
            local_entrega: '',
            data_coleta: '',
            data_entrega_prevista: '',
            nome_motorista: '',
            tipo_de_caminhao: '',
            categoria_da_carga: '',
            descricao_da_carga: '',
            valor_nota_fiscal: '',
            status: 'solicitado'
        }

        this.handleChange = this.handleChange.bind(this);
        this.cadastroSubmit = this.cadastroSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    async cadastroSubmit(event) {
        event.preventDefault()
        
        const solicitacao_service = new SolicitacaoService()
        const cadastro_result  = await solicitacao_service.createSolicitacao(this.state)
        console.log(cadastro_result)
        if(cadastro_result){
            window.location.reload()
        }
        // TODO: Error Message


    }
    render() {
        return (
            <Container>
                <Container className="custom-form-section">
                    <Form>
                        <Form.Group>
                            <Form.File id="xml-file" label="Fazer upload de XML" />
                        </Form.Group>
                    </Form>
                </Container>
                <Container className='custom-form-section'>
                    <Form onSubmit={this.cadastroSubmit}>
                        <h4 className='text-muted'><i>Rementente</i></h4>
                        <Form.Row id="remetente-form-section.1">
                            <Col>
                                <Form.Label>Nome</Form.Label>
                                <Form.Control type="text" placeholder="Nome do remetente" name="nome_remetente" value={this.state.nome_remetente} onChange={this.handleChange} />
                            </Col>
                            <Col>
                                <Form.Label>CNPJ</Form.Label>
                                <Form.Control type="text" placeholder="CNPJ do remetente" name="CNPJ_remetente" value={this.state.CNPJ_remetente} onChange={this.handleChange} />
                            </Col>
                        </Form.Row>
                        <Form.Row id="remetente-form-section.2">
                            <Col>
                                <Form.Label>Inscr. Estadual</Form.Label>
                                <Form.Control type="text" placeholder="Inscrição Estadual do remetente" name="inscricao_estadual_remetente" value={this.state.inscricao_estadual_remetente} onChange={this.handleChange} />
                            </Col>
                        </Form.Row>
                        <hr />
                        <h4 className='text-muted'><i>Destinatário</i></h4>
                        <Form.Row id="destinatario-form-section.1">
                            <Col>
                                <Form.Label>Nome</Form.Label>
                                <Form.Control type="text" placeholder="Nome do destinatario" name="nome_destinatario" value={this.state.nome_destinatario} onChange={this.handleChange} />
                            </Col>
                            <Col>
                                <Form.Label>N° de telefone</Form.Label>
                                <Form.Control type="text" placeholder="Número de telefone do destinatario" name="n_telefone_destinatario" value={this.n_telefone_destinatario} onChange={this.handleChange} />
                            </Col>
                        </Form.Row>
                        <Form.Row id="destinatario-form-section.2">
                            <Col>
                                <Form.Label>Endereço</Form.Label>
                                <Form.Control type="text" placeholder="Endereço do destinatario" name="endereco_destinatario" value={this.state.endereco_destinatario} onChange={this.handleChange} />
                            </Col>
                            <Col>
                                <Form.Label>N° Endereço</Form.Label>
                                <Form.Control type="text" placeholder="Número de endereço do destinatario" name="numero_endereco_destinatario" value={this.state.numero_endereco_destinatario} onChange={this.handleChange} />
                            </Col>
                            <Col>
                                <Form.Label>Complemento</Form.Label>
                                <Form.Control type="text" placeholder="Complemento do destinatario" name="complemento_destinatario" value={this.state.complemento_destinatario} onChange={this.handleChange} />
                            </Col>
                        </Form.Row>
                        <Form.Row id="destinatario-form-section.3">
                            <Col>
                                <Form.Label>Cidade</Form.Label>
                                <Form.Control type="text" placeholder="Cidade do destinatario" name="cidade_destinatario" value={this.state.cidade_destinatario} onChange={this.handleChange} />
                            </Col>
                            <Col>
                                <Form.Label>CEP</Form.Label>
                                <Form.Control type="text" placeholder="CEP do destinatario" name="CEP_destinatario" value={this.state.CEP_destinatario} onChange={this.handleChange} />
                            </Col>
                            <Col>
                                <Form.Label>UF</Form.Label>
                                <Form.Control type="text" placeholder="UF do destinatario" name="estado_destinatario" value={this.state.estado_destinatario} onChange={this.handleChange} />
                            </Col>
                        </Form.Row>
                        <hr />
                        <h4 className='text-muted'><i>Solicitação</i></h4>
                        <Form.Row id="solicitacao-form-section.1">
                            <Col>
                                <Form.Label>Local da coleta</Form.Label>
                                <Form.Control type="text" placeholder="Ex.: Galpão Linhares" name="local_coleta" value={this.state.local_coleta} onChange={this.handleChange} />
                            </Col>
                            <Col>
                                <Form.Label>Data da coleta</Form.Label>
                                <Form.Control type='date' name="data_coleta" value={this.state.data_coleta} onChange={this.handleChange} />
                            </Col>
                        </Form.Row>
                        <Form.Row id="solicitacao-form-section.2">
                            <Col>
                                <Form.Label>Local da entrega</Form.Label>
                                <Form.Control type="text" placeholder="Ex.: Galpão Linhares" name="local_entrega" value={this.state.local_entrega} onChange={this.handleChange} />
                            </Col>
                            <Col>
                                <Form.Label>Data de entrega prevista</Form.Label>
                                <Form.Control type='date' name="data_entrega_prevista" value={this.state.data_entrega_prevista} onChange={this.handleChange} />
                            </Col>
                        </Form.Row>
                        <hr />
                        <h4 className='text-muted'><i>Transporte</i></h4>
                        <Form.Row id="transporte-form-section.1">
                            <Col>
                                <Form.Label>Motorista</Form.Label>
                                <Form.Control type="text" placeholder="Nome do motorista" name="nome_motorista" value={this.state.nome_motorista} onChange={this.handleChange} />
                            </Col>
                            <Col>
                                <Form.Label>Caminhão</Form.Label>
                                <Form.Control type="text" placeholder="Tipo/modelo do caminhão" name="tipo_de_caminhao" value={this.state.tipo_de_caminhao} onChange={this.handleChange} />
                            </Col>
                        </Form.Row>
                        <hr />
                        <h4 className='text-muted'><i>Carga</i></h4>
                        <Form.Row id="carga-form-section.1">
                            <Col>
                                <Form.Label>Categoria</Form.Label>
                                <Form.Control type="text" placeholder="Categoria da carga" name="categoria_da_carga" value={this.state.categoria_da_carga} onChange={this.handleChange} />
                            </Col>
                            <Col>
                                <Form.Label>Descrição</Form.Label>
                                <Form.Control type="text" placeholder="Descrição da carga" name="descricao_da_carga" value={this.state.descricao_da_carga} onChange={this.handleChange} />
                            </Col>
                            <Col>
                                <Form.Label>Valor Nota Fiscal</Form.Label>
                                <Form.Control type="text" placeholder="Valor na nota fiscal" name="valor_nota_fiscal" value={this.state.valor_nota_fiscal} onChange={this.handleChange} />
                            </Col>
                        </Form.Row>
                        <Button id='solicitacao-submit-button' variant="primary" type="submit"> Cadastrar solicitação</Button>
                    </Form>
                </Container>
            </Container>
        )
    }
}

export default CadastroSolicitacaoForm