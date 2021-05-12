import React from 'react'
import {Container, Table, Button, Modal, Col, Form} from 'react-bootstrap'
class SolicitacaoEmAndamento extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            showModal: false,
            activeItem: [],
        }

        this.handleModal = this.handleModal.bind(this)
        this.handleCloseModal = this.handleCloseModal.bind(this)
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
    render() {
        return (
            <React.Fragment>
                <Container className='table-dashboard-solicitacoes'>
                    <Container className="text-center">
                        <h4>Em andamento</h4>
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
                                    <td>{solicitacao.id}</td>
                                    <td>{solicitacao.data_coleta}</td>
                                    <td>{solicitacao.data_entrega_prevista}</td>
                                    <td>{solicitacao.local_coleta}</td>
                                    <td>{solicitacao.local_entrega}</td>
                                    <td>
                                        <Button variant='link' onClick={() => this.handleModal(solicitacao)}>detalhes</Button>
                                        <Modal size='lg' show={this.state.showModal} backdropClassName='custom-modal' onHide={this.handleCloseModal}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>
                                                    Solicitação {this.state.activeItem.id}
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <Container>
                                                    <Form>
                                                        <p className='text-muted'><i>Transporte</i></p>
                                                        <Form.Row>
                                                            <Col>
                                                                <Form.Label>Nome do motorista</Form.Label>
                                                                <Form.Control readOnly type='text' value={this.state.activeItem.nome_motorista} />
                                                            </Col>
                                                            <Col>
                                                                <Form.Label>Tipo/modelo do caminhão</Form.Label>
                                                                <Form.Control readOnly type='text' value={this.state.activeItem.tipo_de_caminhao} />
                                                            </Col>
                                                        </Form.Row>

                                                        < hr />

                                                        <p className='text-muted'><i>Destinatário</i></p>
                                                        <Form.Row>
                                                            <Col>
                                                                <Form.Label>Nome</Form.Label>
                                                                <Form.Control readOnly type='text' value={this.state.activeItem.nome_destinatario} />
                                                            </Col>
                                                            <Col>
                                                                <Form.Label>N° telefone</Form.Label>
                                                                <Form.Control readOnly type='text' value={this.state.activeItem.n_telefone_destinatario} />
                                                            </Col>
                                                        </Form.Row>
                                                        <Form.Row>
                                                            <Col>
                                                                <Form.Label>Complemento</Form.Label>
                                                                <Form.Control readOnly type='text' value={this.state.activeItem.complemento_destinatario} />
                                                            </Col>
                                                            <Col>
                                                                <Form.Label>Endereço</Form.Label>
                                                                <Form.Control readOnly type='text' value={this.state.activeItem.endereco_destinatario} />
                                                            </Col>
                                                            <Col>
                                                                <Form.Label>N°</Form.Label>
                                                                <Form.Control readOnly style={{ width: '50%' }} type='text' value={this.state.activeItem.numero_endereco_destinatario} />
                                                            </Col>
                                                        </Form.Row>
                                                        <Form.Row>
                                                            <Col>
                                                                <Form.Label>Cidade</Form.Label>
                                                                <Form.Control readOnly type='text' value={this.state.activeItem.cidade_destinatario} />
                                                            </Col>
                                                            <Col>
                                                                <Form.Label>CEP</Form.Label>
                                                                <Form.Control readOnly type='text' value={this.state.activeItem.CEP_destinatario} />
                                                            </Col>
                                                            <Col>
                                                                <Form.Label>UF</Form.Label>
                                                                <Form.Control readOnly type='text' value={this.state.activeItem.estado_destinatario} />
                                                            </Col>
                                                        </Form.Row>
                                                        < hr />

                                                        <p className='text-muted'><i>Remetente</i></p>
                                                        <Form.Row>
                                                            <Col>
                                                                <Form.Label>Nome</Form.Label>
                                                                <Form.Control readOnly type='text' value={this.state.activeItem.nome_remetente} />
                                                            </Col>
                                                        </Form.Row>
                                                        <Form.Row>
                                                            <Col>
                                                                <Form.Label>CNPJ</Form.Label>
                                                                <Form.Control readOnly type='text' value={this.state.activeItem.CNPJ_remetente} />
                                                            </Col>
                                                            <Col>
                                                                <Form.Label>Inscrição estadual</Form.Label>
                                                                <Form.Control readOnly type='text' value={this.state.activeItem.inscricao_estadual_remetente} />
                                                            </Col>
                                                        </Form.Row>
                                                        < hr />
                                                        <p className='text-muted'><i>Carga</i></p>
                                                        <Form.Row>
                                                            <Col>
                                                                <Form.Label>Categoria</Form.Label>
                                                                <Form.Control readOnly type='text' value={this.state.activeItem.categoria_da_carga} />
                                                            </Col>
                                                            <Col>
                                                                <Form.Label>Valor na nota fiscal</Form.Label>
                                                                <Form.Control readOnly type='text' value={this.state.activeItem.valor_nota_fiscal} />
                                                            </Col>
                                                        </Form.Row>
                                                        <Form.Row>
                                                            <Col>
                                                                <Form.Label>Descrição</Form.Label>
                                                                <Form.Control readOnly as="textarea" value={this.state.activeItem.descricao_da_carga} />
                                                            </Col>
                                                        </Form.Row>
                                                    </Form>
                                                </Container>
                                            </Modal.Body>
                                        </Modal>
                                    </td>
                                    <td className='text-warning'> {(solicitacao.status.charAt(0).toUpperCase() + solicitacao.status.slice(1)).replace('-', ' ')}</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Container>
            </React.Fragment>
        )
    }
}

export default SolicitacaoEmAndamento