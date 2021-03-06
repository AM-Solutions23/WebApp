import React from 'react'
import { Form, Container, Button } from 'react-bootstrap'
import LoginService from '../services/login-service'
import LogoImg from '../img/logo.jpg'


import '../stylesheet/login.css'
class Login extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = { user: '', password: '' }

        this.handleChange = this.handleChange.bind(this);
        this.loginSubmit = this.loginSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    async loginSubmit(event) {
       
        event.preventDefault()
        const login_service = new LoginService()
    
        let login_result = await login_service.login(this.state)

        if(login_result){
            this.props.history.push('/dashboard')
        }

        //TODO: login failed message
    }
    

    render() {
        return (
            <React.Fragment>
                <Container id="parent-container">
                    <Form onSubmit={this.loginSubmit}>
                        <div className="containerimg">
                            <img src={LogoImg} alt="logo" />
                        </div>                     
                        <Form.Group controlId="formCNPJ">
                            <Form.Label>CNPJ</Form.Label>
                            <Form.Control name="user" type="text" placeholder="XX. XXX. XXX/0001-XX" value={this.state.user} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                        </Form.Group>
                        <Button id="submitButton" variant="primary" type="submit"> LOG IN</Button>
                    </Form>
                    <div id="copyright-info" className="text-center">
                        <p> &copy; 2020 - 2021</p>
                    </div>
                    <Container id="form-footer" className="text-center">
                        <p><a href="/">Forgot Password?</a> | <a href="/">Cadastre-se agora</a></p>
                    </Container>
                </Container>
            </React.Fragment>
        );
    }
}



export default Login