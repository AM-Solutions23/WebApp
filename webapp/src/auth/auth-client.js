import AuthService from "../services/auth-service"

class AuthClient {
    constructor() {
        this.authService = new AuthService()
    }
    /**
     * Authenticates the token saved in cookies
     * @param  token 
     * @returns 
     */
    async validateToken(token) {
        const auth = await this.authService.tokenValidation(token)
        return auth
    }
}

export default AuthClient