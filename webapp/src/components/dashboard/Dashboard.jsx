import React from 'react'
import SidebarNav from './Sidebar-nav'
import TopbarNav from './Topbar-nav'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'

import '../../stylesheet/dashboard.css'


class Dashboard extends React.Component {
    render() {
        return (
            <React.Fragment>
                <TopbarNav />
                <SidebarNav />
                <Container id="dashboard-content">
                    <Row className="status-painel">
                        <Col>
                            <Card>
                                <Card.Header>Solicitados</Card.Header>
                                <Card.Body>
                                    <Card.Title>Todas as solicitações</Card.Title>
                                        <h4><code>30</code></h4>
                                    <Button className="card-button" variant="primary">Ver solicitações</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Header>Em andamento</Card.Header>
                                <Card.Body>
                                    <Card.Title>Solicitações em andamento</Card.Title>
                                        <h4><code>15</code></h4>
                                    <Button className="card-button" variant="primary">Ver solicitações</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Header>Concluído</Card.Header>
                                <Card.Body>
                                    <Card.Title>Solicitações concluídas</Card.Title>
                                        <h4><code>15</code></h4>
                                    <Button className="card-button" variant="primary">Ver solicitações</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                    
                    <Row className="status-painel">
                        <Col>
                            <Card>
                                <Card.Header>Saving Financeiro nos últimos 12 meses</Card.Header>
                                <Card.Body>
                                    <Card.Title>Solicitações concluídas</Card.Title>
                                        <h4><code>15</code></h4>
                                    <Button className="card-button" variant="primary">Ver solicitações</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Header>Saving em emissão nos últimos 12 meses</Card.Header>
                                <Card.Body>
                                    <Card.Title>Solicitações concluídas</Card.Title>
                                        <h4><code>15</code></h4>
                                    <Button className="card-button" variant="primary">Ver solicitações</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default Dashboard