import React from 'react'
import { Col, Container, Form, Button } from 'react-bootstrap'

class CadastroSolicitacaoForm extends React.Component {
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
                    <Form>
                        <h4 className='text-muted'><i>Rementente</i></h4>
                        <Form.Row id="remetente-form-section.1">
                            <Col>
                                <Form.Label>Nome</Form.Label>
                                <Form.Control type="text" placeholder="Nome do remetente" />
                            </Col>
                            <Col>
                                <Form.Label>CNPJ</Form.Label>
                                <Form.Control type="text" placeholder="CNPJ do remetente" />
                            </Col>
                        </Form.Row>
                        <Form.Row id="remetente-form-section.2">
                            <Col>
                                <Form.Label>Inscr. Estadual</Form.Label>
                                <Form.Control type="text" placeholder="Inscrição Estadual do remetente" />
                            </Col>
                        </Form.Row>
                        <hr />
                        <h4 className='text-muted'><i>Destinatário</i></h4>
                        <Form.Row id="destinatario-form-section.1">
                            <Col>
                                <Form.Label>Nome</Form.Label>
                                <Form.Control type="text" placeholder="Nome do destinatario" />
                            </Col>
                            <Col>
                                <Form.Label>N° de telefone</Form.Label>
                                <Form.Control type="text" placeholder="Número de telefone do destinatario" />
                            </Col>
                        </Form.Row>
                        <Form.Row id="destinatario-form-section.2">
                            <Col>
                                <Form.Label>Endereço</Form.Label>
                                <Form.Control type="text" placeholder="Endereço do destinatario" />
                            </Col>
                            <Col>
                                <Form.Label>N° Endereço</Form.Label>
                                <Form.Control type="text" placeholder="Múmero de endereço do destinatario" />
                            </Col>
                            <Col>
                                <Form.Label>Complemento</Form.Label>
                                <Form.Control type="text" placeholder="Complemento do destinatario" />
                            </Col>
                        </Form.Row>
                        <Form.Row id="destinatario-form-section.3">
                            <Col>
                                <Form.Label>Cidade</Form.Label>
                                <Form.Control type="text" placeholder="Cidade do destinatario" />
                            </Col>
                            <Col>
                                <Form.Label>CEP</Form.Label>
                                <Form.Control type="text" placeholder="CEP do destinatario" />
                            </Col>
                            <Col>
                                <Form.Label>UF</Form.Label>
                                <Form.Control type="text" placeholder="UF do destinatario" />
                            </Col>
                        </Form.Row>
                        <hr />
                        <h4 className='text-muted'><i>Solicitação</i></h4>
                        <Form.Row id="solicitacao-form-section.1">
                            <Col>
                                <Form.Label>Local da coleta</Form.Label>
                                <Form.Control type="text" placeholder="Ex.: Galpão Linhares" />
                            </Col>
                            <Col>
                                <Form.Label>Data da coleta</Form.Label>
                                <Form.Control type='date' />
                            </Col>
                        </Form.Row>
                        <Form.Row id="solicitacao-form-section.2">
                            <Col>
                                <Form.Label>Local da entrega</Form.Label>
                                <Form.Control type="text" placeholder="Ex.: Galpão Linhares" />
                            </Col>
                            <Col>
                                <Form.Label>Data da entrega</Form.Label>
                                <Form.Control type='date' />
                            </Col>
                        </Form.Row>
                        <hr />
                        <h4 className='text-muted'><i>Transporte</i></h4>
                        <Form.Row id="transporte-form-section.1">
                            <Col>
                                <Form.Label>Motorista</Form.Label>
                                <Form.Control type="text" placeholder="Nome do motorista" />
                            </Col>
                            <Col>
                                <Form.Label>Caminhão</Form.Label>
                                <Form.Control type="text" placeholder="Tipo/modelo do caminhão" />
                            </Col>
                        </Form.Row>
                        <hr />
                        <h4 className='text-muted'><i>Carga</i></h4>
                        <Form.Row id="carga-form-section.1">
                            <Col>
                                <Form.Label>Categoria</Form.Label>
                                <Form.Control type="text" placeholder="Categoria da carga" />
                            </Col>
                            <Col>
                                <Form.Label>Descrição</Form.Label>
                                <Form.Control type="text" placeholder="Descrição da carga" />
                            </Col>
                            <Col>
                                <Form.Label>Valor Nota Fiscal</Form.Label>
                                <Form.Control type="text" placeholder="Valor na nota fiscal" />
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