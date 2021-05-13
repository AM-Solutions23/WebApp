import React from 'react'
import { Container, Form, Col } from 'react-bootstrap'
class SolicitacaoInfoTable extends React.Component {
    render() {
        return (
            <Container>
                <Form>
                    <p className='text-muted'><i>Transporte</i></p>
                    <Form.Row>
                        <Col>
                            <Form.Label>Nome do motorista</Form.Label>
                            <Form.Control readOnly type='text' value={this.props.activeItem.nome_motorista} />
                        </Col>
                        <Col>
                            <Form.Label>Tipo/modelo do caminhão</Form.Label>
                            <Form.Control readOnly type='text' value={this.props.activeItem.tipo_de_caminhao} />
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Form.Label>Tempo Total</Form.Label>
                            <Form.Control readOnly type='text' value={this.props.activeItem.tempo_total} />
                        </Col>
                        <Col>
                            <Form.Label>KM percorridos</Form.Label>
                            <Form.Control readOnly type='text' value={this.props.activeItem.kilometragem_percorrida} />
                        </Col>
                    </Form.Row>
                    < hr />

                    <p className='text-muted'><i>Solicitação</i></p>
                    <Form.Row>
                        <Col>
                            <Form.Label>Data de solicitação</Form.Label>
                            <Form.Control readOnly style={{ width: '30%' }} type='text' value={this.props.activeItem.data_solicitacao} />
                        </Col>
                    </Form.Row>

                    < hr />

                    <p className='text-muted'><i>Destinatário</i></p>
                    <Form.Row>
                        <Col>
                            <Form.Label>Nome</Form.Label>
                            <Form.Control readOnly type='text' value={this.props.activeItem.nome_destinatario} />
                        </Col>
                        <Col>
                            <Form.Label>N° telefone</Form.Label>
                            <Form.Control readOnly type='text' value={this.props.activeItem.n_telefone_destinatario} />
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Form.Label>Complemento</Form.Label>
                            <Form.Control readOnly type='text' value={this.props.activeItem.complemento_destinatario} />
                        </Col>
                        <Col>
                            <Form.Label>Endereço</Form.Label>
                            <Form.Control readOnly type='text' value={this.props.activeItem.endereco_destinatario} />
                        </Col>
                        <Col>
                            <Form.Label>N°</Form.Label>
                            <Form.Control readOnly style={{ width: '50%' }} type='text' value={this.props.activeItem.numero_endereco_destinatario} />
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Form.Label>Cidade</Form.Label>
                            <Form.Control readOnly type='text' value={this.props.activeItem.cidade_destinatario} />
                        </Col>
                        <Col>
                            <Form.Label>CEP</Form.Label>
                            <Form.Control readOnly type='text' value={this.props.activeItem.CEP_destinatario} />
                        </Col>
                        <Col>
                            <Form.Label>UF</Form.Label>
                            <Form.Control readOnly type='text' value={this.props.activeItem.estado_destinatario} />
                        </Col>
                    </Form.Row>
                    < hr />

                    <p className='text-muted'><i>Remetente</i></p>
                    <Form.Row>
                        <Col>
                            <Form.Label>Nome</Form.Label>
                            <Form.Control readOnly type='text' value={this.props.activeItem.nome_remetente} />
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Form.Label>CNPJ</Form.Label>
                            <Form.Control readOnly type='text' value={this.props.activeItem.CNPJ_remetente} />
                        </Col>
                        <Col>
                            <Form.Label>Inscrição estadual</Form.Label>
                            <Form.Control readOnly type='text' value={this.props.activeItem.inscricao_estadual_remetente} />
                        </Col>
                    </Form.Row>
                    < hr />
                    <p className='text-muted'><i>Carga</i></p>
                    <Form.Row>
                        <Col>
                            <Form.Label>Categoria</Form.Label>
                            <Form.Control readOnly type='text' value={this.props.activeItem.categoria_da_carga} />
                        </Col>
                        <Col>
                            <Form.Label>Valor na nota fiscal</Form.Label>
                            <Form.Control readOnly type='text' value={this.props.activeItem.valor_nota_fiscal} />
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control readOnly as="textarea" value={this.props.activeItem.descricao_da_carga} />
                        </Col>
                    </Form.Row>
                </Form>
            </Container>
        )
    }
}

export default SolicitacaoInfoTable