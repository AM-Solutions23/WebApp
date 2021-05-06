import ApiService from "./api-service";

class LoginService extends ApiService{
    async login(data){
        let login_response = await this.postData(data,'login')
        
        return login_response
    }
}

export default LoginService