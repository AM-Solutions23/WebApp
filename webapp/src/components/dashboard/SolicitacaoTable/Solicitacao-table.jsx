import React from 'react'
import { Table, Container } from 'react-bootstrap'

class SolicitacaoTable extends React.Component {
    render() {
        console.log(this.props.dadosTabela)
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
                            <tr>
                                <td>
                                    {Object.keys(this.props.dadosTabela).map((keyName, i) => (
                                        <li className="travelcompany-input" key={i}>
                                            <span className="input-label">key: {i} Name: {this.props.dadosTabela[keyName]}</span>
                                        </li>
                                    ))}
                                </td>
                            </tr>
                        </tbody>
                    </Table>

                </Container>
            </React.Fragment>
        )
    }
}

export default SolicitacaoTable