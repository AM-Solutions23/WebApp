import AuthService from "../services/auth-service"

class AuthClient{
    constructor(){
        this.authService = new AuthService()
    }
    async validateToken(token){
        const auth = await this.authService.tokenValidation(token)
        return auth
    }
}

export default AuthClient