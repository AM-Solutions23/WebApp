import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
class TopbarNav extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navbar bg="dark" variant="dark">
                    <Nav className="container-fluid">
                        <Nav.Item className="ml-auto">
                            <Nav.Link>EmaLog</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="ml-auto">
                            <Nav.Link>Usuário: Fillipe Meireles</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default TopbarNav