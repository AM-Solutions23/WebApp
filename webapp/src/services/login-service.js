import TokenStorageCookie from "../token/token-storage-cookie";
import ApiService from "./api-service";

class LoginService extends ApiService {
    constructor() {
        super()
        this.cookies_handler = new TokenStorageCookie()
    }
    async login(data) {
        let login_response = await this.postData(data, 'login')
        if (!login_response.data.auth) {
            return false
        }
        this.cookies_handler.storeToken(login_response.data.token)
        return true
    }
    logout() {
        this.cookies_handler.deleteToken()
    }
}

export default LoginService