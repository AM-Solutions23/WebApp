import TokenStorageCookie from "../token/token-storage-cookie";
import ApiService from "./api-service";

class LoginService extends ApiService {
    async login(data) {
        const cookies_handler = new TokenStorageCookie()
        let login_response = await this.postData(data, 'login')

        if (!login_response.data.auth) {
            return false
        }
        cookies_handler.storeToken(login_response.data.token)
        return true
    }
}

export default LoginService