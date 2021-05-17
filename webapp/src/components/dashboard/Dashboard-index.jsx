import React from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import CountUp from 'react-countup'
import { PieChart } from 'react-minimal-pie-chart'

class DashboardIndex extends React.Component {
    render() {
        return (
            <React.Fragment>
               <Container id='pie-chart-custom'>                    
                </Container> 
                <Container >
                    <Row className="status-painel">
                        <Col>
                            <Card className="info-cards">
                                <Card.Header  style={{background:'var(--ema-vermelho)', color:'#fff'}}>Solicitados</Card.Header>
                                <Card.Body>
                                    <Card.Title>Solicitações em espera</Card.Title>
                                    <h4><CountUp end={30} duration={5} /></h4>
                                    <Button className="card-button" variant="primary" >Ver solicitações</Button>
                                </Card.Body>
                            </Card><br />
                        </Col><br />
                        <Col>
                            <Card className="info-cards">
                                <Card.Header style={{background:'var(--ema-vermelho)', color:'#fff'}}>Em andamento</Card.Header>
                                <Card.Body>
                                    <Card.Title>Solicitações em andamento</Card.Title>
                                    <h4><CountUp end={15} duration={5} /></h4>
                                    <Button className="card-button" variant="primary" >Ver solicitações</Button>
                                </Card.Body>
                            </Card><br />
                        </Col>
                        <Col>
                            <Card className="info-cards">
                                <Card.Header style={{background:'var(--ema-vermelho)', color:'#fff'}}>Concluído</Card.Header>
                                <Card.Body>
                                    <Card.Title>Solicitações concluídas</Card.Title>
                                    <h4><CountUp end={15} duration={5} /></h4>
                                    <Button className="card-button" variant="primary">Ver solicitações</Button>
                                </Card.Body>
                            </Card><br />
                        </Col>

                    </Row>

                    <Row className="status-painel">
                        <Col>
                            <Card className="info-cards">
                                <Card.Header style={{background:'var(--ema-vermelho)', color:'#fff'}}>Saving Financeiro nos últimos 12 meses</Card.Header>
                                <Card.Body>
                                    <Card.Title>Solicitações concluídas</Card.Title>
                                    <h4><CountUp end={30} duration={5} /></h4>
                                    <Button className="card-button" variant="primary">Ver solicitações</Button>
                                </Card.Body>
                            </Card><br />
                        </Col>
                        <Col>
                            <Card className="info-cards">
                                <Card.Header style={{background:'var(--ema-vermelho)', color:'#fff'}}>Saving em emissão nos últimos 12 meses</Card.Header>
                                <Card.Body>
                                    <Card.Title>Solicitações concluídas</Card.Title>
                                    <h4><CountUp end={30} duration={5} /></h4>
                                    <Button className="card-button" variant="primary">Ver solicitações</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    
                </Container><br />
                <PieChart 
                        data={[
                            { title: 'Solicitados', value: 16, color: 'var(--ema-amarelo)' },
                            { title: 'Em andamento', value: 15, color: 'var(--ema-vermelho)' },
                            { title: 'Concluído', value: 20, color: 'var(--ema-cinsa-escuro)' },
                        ]}
                />               
                
            </React.Fragment>
            
        )
    }
}

export default DashboardIndex