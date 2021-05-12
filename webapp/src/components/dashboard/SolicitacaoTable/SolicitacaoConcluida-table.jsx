import React from 'react'
import { Container, Table, Button, Modal } from 'react-bootstrap'
import SolicitacaoInfoTable from './SolicitacaoInfoModal'

class SolicitacaoConcluidaTable extends React.Component {
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
                        <h4>Concluídos</h4>
                    </Container>
                    <hr />
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Data Coleta</th>
                                <th>Data Entrega</th>
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
                                    <td>{solicitacao.data_entrega}</td>
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
                                               <SolicitacaoInfoTable activeItem={this.state.activeItem} />
                                            </Modal.Body>
                                        </Modal>
                                    </td>
                                    <td className='text-success'>{solicitacao.status.charAt(0).toUpperCase() + solicitacao.status.slice(1)}</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Container>
            </React.Fragment>
        )
    }
}

export default SolicitacaoConcluidaTable