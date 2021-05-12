import React from 'react'
import { Table, Container } from 'react-bootstrap'

class SolicitacaoTable extends React.Component {
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
                                <tr>
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
                                        {solicitacao.status}
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