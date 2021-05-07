import React from 'react'
import { Table, Container} from 'react-bootstrap'

class SolicitacaoTable extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container className="text-center">
                    <h4>{this.props.painelName}</h4>
                </Container>
                <hr/>
                <Table striped bordered hover>
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
                            <td>10001</td>
                            <td>2011/04/25</td>
                            <td>2011/04/25</td>
                            <td>São Paulo - Sorocaba</td>
                            <td>Pernambuco - Recife</td>
                            <td><a href="/">detalhe</a></td>
                            <td>Em transito</td>
                        </tr>
                        <tr>
                            <td>10001</td>
                            <td>2011/04/25</td>
                            <td>2011/04/25</td>
                            <td>São Paulo - Sorocaba</td>
                            <td>Pernambuco - Recife</td>
                            <td><a href="/">detalhe</a></td>
                            <td>Em transito</td>
                        </tr>
                        <tr>
                            <td>10001</td>
                            <td>2011/04/25</td>
                            <td>2011/04/25</td>
                            <td>São Paulo - Sorocaba</td>
                            <td>Pernambuco - Recife</td>
                            <td><a href="/">detalhe</a></td>
                            <td>Em transito</td>
                        </tr>
                    </tbody>
                </Table>
            </React.Fragment>
        )
    }
}

export default SolicitacaoTable