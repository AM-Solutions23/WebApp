import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Table, Container, Modal, Button, Form, Col } from 'react-bootstrap'
import SolicitacaoService from '../../../services/solicitacao-service'

import '../../../stylesheet/dashboard.css'
class SolicitacaoTable extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            showModal: false,
            activeItem: [],
        }

        this.handleModal = this.handleModal.bind(this)
        this.handleCloseModal = this.handleCloseModal.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.editarSubmit = this.editarSubmit.bind(this)
    }

    handleModal(item) {
        this.setState({
            activeItem: item,
            showModal: true
        })
    }
    handleCloseModal() {
        this.setState({
            showModal: false
        })
    }


    handleChange(event) {

        let items = this.state.activeItem;

        let item = items[event.target.name];

        item = event.target.value

        items[event.target.name] = item

        this.setState({ activeItem: items });
    }

    async editarSubmit(event) {
        event.preventDefault()

        const solicitacao_service = new SolicitacaoService()
        const editResult = await solicitacao_service.editarSolicitacao(this.state.activeItem, this.state.activeItem.id)
        if (editResult) {
            window.location.reload()
        }
        // TODO: Error Message
    }

    render() {
        return (
            <React.Fragment>
                <Container className='table-dashboard-solicitacoes'>
                    <Container className="text-center">
                        <h4>{this.props.painelName}</h4>
                    </Container>
                    <hr />
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Data Coleta</th>
                                <th>Data Entrega Prevista</th>
                                <th>Local Coleta</th>
                                <th>Local Entrega</th>
                                <th>Detalhe Pedido</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.dadosTabela.map((solicitacao, index) =>
                                <tr id={index}>
                                    <td>
                                        {solicitacao.id}
                                    </td>
                                    <td>
                                        {solicitacao.data_coleta}
                                    </td>
                                    <td>
                                        {solicitacao.data_entrega_prevista}
                                    </td>
                                    <td>
                                        {solicitacao.local_coleta}
                                    </td>
                                    <td>
                                        {solicitacao.local_entrega}
                                    </td>
                                    <td>
                                        <a href="/">detalhes</a>
                                    </td>
                                    <td>
                                        {(solicitacao.status.charAt(0).toUpperCase() + solicitacao.status.slice(1)).replace('-', ' ')}
                                    </td>
                                    <td>
                                        <FontAwesomeIcon icon='pencil-alt' className='pencil-edit' onClick={() => this.handleModal(solicitacao)} />
                                        <Modal size='lg' show={this.state.showModal} backdropClassName='custom-modal' onHide={this.handleCloseModal}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>
                                                    Solicitação {this.state.activeItem.id}
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <Form onSubmit={this.editarSubmit}>
                                                    <p className='text-muted'><i>Rementente</i></p>
                                                    <Form.Row id="remetente-form-section.1">
                                                        <Col>
                                                            <Form.Label>Nome</Form.Label>
                                                            <Form.Control type="text" placeholder="Nome do remetente" name="nome_remetente" value={this.state.activeItem.nome_remetente} onChange={this.handleChange} />
                                                        </Col>
                                                        <Col>
                                                            <Form.Label>CNPJ</Form.Label>
                                                            <Form.Control type="text" placeholder="CNPJ do remetente" name="CNPJ_remetente" value={this.state.activeItem.CNPJ_remetente} onChange={this.handleChange} />
                                                        </Col>
                                                    </Form.Row>
                                                    <Form.Row id="remetente-form-section.2">
                                                        <Col>
                                                            <Form.Label>Inscr. Estadual</Form.Label>
                                                            <Form.Control type="text" placeholder="Inscrição Estadual do remetente" name="inscricao_estadual_remetente" value={this.state.activeItem.inscricao_estadual_remetente} onChange={this.handleChange} />
                                                        </Col>
                                                    </Form.Row>
                                                    <hr />

                                                    <p className='text-muted'><i>Destinatário</i></p>
                                                    <Form.Row id="destinatario-form-section.1">
                                                        <Col>
                                                            <Form.Label>Nome</Form.Label>
                                                            <Form.Control type="text" placeholder="Nome do destinatario" name="nome_destinatario" value={this.state.activeItem.nome_destinatario} onChange={this.handleChange} />
                                                        </Col>
                                                        <Col>
                                                            <Form.Label>N° de telefone</Form.Label>
                                                            <Form.Control type="text" placeholder="Número de telefone do destinatario" name="n_telefone_destinatario" value={this.n_telefone_destinatario} onChange={this.handleChange} />
                                                        </Col>
                                                    </Form.Row>
                                                    <Form.Row id="destinatario-form-section.2">
                                                        <Col>
                                                            <Form.Label>Endereço</Form.Label>
                                                            <Form.Control type="text" placeholder="Endereço do destinatario" name="endereco_destinatario" value={this.state.activeItem.endereco_destinatario} onChange={this.handleChange} />
                                                        </Col>
                                                        <Col>
                                                            <Form.Label>N° Endereço</Form.Label>
                                                            <Form.Control type="text" placeholder="Número de endereço do destinatario" name="numero_endereco_destinatario" value={this.state.activeItem.numero_endereco_destinatario} onChange={this.handleChange} />
                                                        </Col>
                                                        <Col>
                                                            <Form.Label>Complemento</Form.Label>
                                                            <Form.Control type="text" placeholder="Complemento do destinatario" name="complemento_destinatario" value={this.state.activeItem.complemento_destinatario} onChange={this.handleChange} />
                                                        </Col>
                                                    </Form.Row>
                                                    <Form.Row id="destinatario-form-section.3">
                                                        <Col>
                                                            <Form.Label>Cidade</Form.Label>
                                                            <Form.Control type="text" placeholder="Cidade do destinatario" name="cidade_destinatario" value={this.state.activeItem.cidade_destinatario} onChange={this.handleChange} />
                                                        </Col>
                                                        <Col>
                                                            <Form.Label>CEP</Form.Label>
                                                            <Form.Control type="text" placeholder="CEP do destinatario" name="CEP_destinatario" value={this.state.activeItem.CEP_destinatario} onChange={this.handleChange} />
                                                        </Col>
                                                        <Col>
                                                            <Form.Label>UF</Form.Label>
                                                            <Form.Control type="text" placeholder="UF do destinatario" name="estado_destinatario" value={this.state.activeItem.estado_destinatario} onChange={this.handleChange} />
                                                        </Col>
                                                    </Form.Row>
                                                    <hr />
                                                    <p className='text-muted'><i>Solicitação</i></p>
                                                    <Form.Row id="solicitacao-form-section.1">
                                                        <Col>
                                                            <Form.Label>Local da coleta</Form.Label>
                                                            <Form.Control type="text" placeholder="Ex.: Galpão Linhares" name="local_coleta" value={this.state.activeItem.local_coleta} onChange={this.handleChange} />
                                                        </Col>
                                                        <Col>
                                                            <Form.Label>Data da coleta</Form.Label>
                                                            <Form.Control type='date' name="data_coleta" value={this.state.activeItem.data_coleta} onChange={this.handleChange} />
                                                        </Col>
                                                    </Form.Row>
                                                    <Form.Row id="solicitacao-form-section.2">
                                                        <Col>
                                                            <Form.Label>Local da entrega</Form.Label>
                                                            <Form.Control type="text" placeholder="Ex.: Galpão Linhares" name="local_entrega" value={this.state.activeItem.local_entrega} onChange={this.handleChange} />
                                                        </Col>
                                                        <Col>
                                                            <Form.Label>Data de entrega prevista</Form.Label>
                                                            <Form.Control type='date' name="data_entrega_prevista" value={this.state.activeItem.data_entrega_prevista} onChange={this.handleChange} />
                                                        </Col>
                                                    </Form.Row>
                                                    <hr />

                                                    <p className='text-muted'><i>Transporte</i></p>
                                                    <Form.Row id="transporte-form-section.1">
                                                        <Col>
                                                            <Form.Label>Motorista</Form.Label>
                                                            <Form.Control type="text" placeholder="Nome do motorista" name="nome_motorista" value={this.state.activeItem.nome_motorista} onChange={this.handleChange} />
                                                        </Col>
                                                        <Col>
                                                            <Form.Label>Caminhão</Form.Label>
                                                            <Form.Control type="text" placeholder="Tipo/modelo do caminhão" name="tipo_de_caminhao" value={this.state.activeItem.tipo_de_caminhao} onChange={this.handleChange} />
                                                        </Col>
                                                    </Form.Row>
                                                    <hr />

                                                    <p className='text-muted'><i>Carga</i></p>
                                                    <Form.Row id="carga-form-section.1">
                                                        <Col>
                                                            <Form.Label>Categoria</Form.Label>
                                                            <Form.Control type="text" placeholder="Categoria da carga" name="categoria_da_carga" value={this.state.activeItem.categoria_da_carga} onChange={this.handleChange} />
                                                        </Col>
                                                        <Col>
                                                            <Form.Label>Descrição</Form.Label>
                                                            <Form.Control type="text" placeholder="Descrição da carga" name="descricao_da_carga" value={this.state.activeItem.descricao_da_carga} onChange={this.handleChange} />
                                                        </Col>
                                                        <Col>
                                                            <Form.Label>Valor Nota Fiscal</Form.Label>
                                                            <Form.Control type="text" placeholder="Valor na nota fiscal" name="valor_nota_fiscal" value={this.state.activeItem.valor_nota_fiscal} onChange={this.handleChange} />
                                                        </Col>
                                                    </Form.Row>

                                                    <hr />

                                                    <p className='text-muted'><i>Status</i></p>
                                                    <Form.Group>
                                                        <Form.Control as="select" onChange={this.handleChange} name="status">
                                                            <option>Escolha o status da solicitação</option>
                                                            <option value='solicitado'>Solicitado</option>
                                                            <option value='em-andamento'>Em andamento</option>
                                                            <option value='entregue'>Entregue</option>
                                                        </Form.Control>
                                                    </Form.Group>
                                                    <Button variant="primary" type="submit">Salvar</Button>
                                                </Form>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={() => this.handleCloseModal()}>Fechar</Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>

                </Container>
            </React.Fragment>
        )
    }
}

export default SolicitacaoTable