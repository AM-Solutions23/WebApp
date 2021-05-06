import ApiService from "./api-service";

class AuthService extends ApiService{
     async tokenValidation(token){
        const response = await this.postDataWithToken({},'token-validation', token)
        return response.auth
     }
}

export default AuthService