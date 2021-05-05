import React from 'react'
import { Form, Container, Button } from 'react-bootstrap'
import '../stylesheet/login.css'
class Login extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Container id="parent-container">
                    <Form>
                        <p className="text-center">EmaLog</p>
                        <Form.Group controlId="formCNPJ">
                            <Form.Label>CNPJ</Form.Label>
                            <Form.Control type="text" placeholder="XX. XXX. XXX/0001-XX" />
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button id="submitButton" variant="primary" type="submit"> LOG IN</Button>
                    </Form>
                    <div id="copyright-info" className="text-center">
                        <p> &copy; 2020 - 2021</p>
                    </div>
                    <Container  id="form-footer" className="text-center">
                        <p><a href="#">Forgot Password?</a> | <a href="#">Cadastre-se agora</a></p>
                    </Container>
                </Container>
            </React.Fragment>
        );
    }
}


export default Login