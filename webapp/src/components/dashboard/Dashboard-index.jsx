import React from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import CountUp from 'react-countup'

class DashboardIndex extends React.Component {
    render() {
        return (
            <Container >
                <Row className="status-painel">
                    <Col>
                        <Card className="info-cards">
                            <Card.Header>Solicitados</Card.Header>
                            <Card.Body>
                                <Card.Title>Todas as solicitações</Card.Title>
                                <h4><CountUp end={30} duration={5}/></h4>
                                <Button className="card-button" variant="primary">Ver solicitações</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="info-cards">
                            <Card.Header>Em andamento</Card.Header>
                            <Card.Body>
                                <Card.Title>Solicitações em andamento</Card.Title>
                                <h4><CountUp end={30} duration={5}/></h4>
                                <Button className="card-button" variant="primary">Ver solicitações</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="info-cards">
                            <Card.Header>Concluído</Card.Header>
                            <Card.Body>
                                <Card.Title>Solicitações concluídas</Card.Title>
                                <h4><CountUp end={30} duration={5}/></h4>
                                <Button className="card-button" variant="primary">Ver solicitações</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>

                <Row className="status-painel">
                    <Col>
                        <Card className="info-cards">
                            <Card.Header>Saving Financeiro nos últimos 12 meses</Card.Header>
                            <Card.Body>
                                <Card.Title>Solicitações concluídas</Card.Title>
                                <h4><CountUp end={30} duration={5}/></h4>
                                <Button className="card-button" variant="primary">Ver solicitações</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="info-cards">
                            <Card.Header>Saving em emissão nos últimos 12 meses</Card.Header>
                            <Card.Body>
                                <Card.Title>Solicitações concluídas</Card.Title>
                                <h4><CountUp end={30} duration={5}/></h4>
                                <Button className="card-button" variant="primary">Ver solicitações</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default DashboardIndex