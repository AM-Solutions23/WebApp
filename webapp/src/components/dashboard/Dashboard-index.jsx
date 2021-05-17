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
                        width={100} 
                        animation
                        animationDuration={500}
                        animationEasing="ease-out"
                        center={[50, 50]}
                        
                        data={[
                            { title: 'Solicitados', value: 30, color: 'var(--ema-amarelo)' },
                            { title: 'Em andamento', value: 15, color: 'var(--ema-vermelho)' },
                            { title: 'Concluído', value: 15, color: 'white' },
                        ]}
                        rótulo={true}
                        labelPosition={50}
                        lengthAngle={360}
                        lineWidth={60}
                        paddingAngle={0}
                        radius={50}
                        rounded
                        startAngle={150}
                        viewBoxSize={[100, 100]}
                />         
                
            </React.Fragment>
            
        )
    }
}

export default DashboardIndex