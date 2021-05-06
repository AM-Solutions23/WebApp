import Cookies from 'universal-cookie'

class TokenStorageCookie {

    constructor(){
        this.cookies = new Cookies()
    }
    storeToken(token) {
        this.cookies.set('token', token, { path: '/' })
    }

    deleteToken() {
        this.cookies.remove('token', { path: '/' })
    }

    getCookieToken(){
        return this.cookies.get('token')
    }
}

export default TokenStorageCookie