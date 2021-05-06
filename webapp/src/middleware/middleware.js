import AuthClient from "../auth/auth-client"
import TokenStorageCookie from "../token/token-storage-cookie"

class Middleware {
    async requireAuth(to, from, next) {
        const auth_client = new AuthClient()
        if (to.meta.auth) {
            const cookie_handler = new TokenStorageCookie()
            const token_cookie = cookie_handler.getCookieToken()
            const auth = await auth_client.validateToken(token_cookie)
            if (auth) {
                next()
            }
            next.redirect('/')
        }
        next()
    }
}

export default Middleware