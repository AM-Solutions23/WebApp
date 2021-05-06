import AuthClient from "../auth/auth-client"

// ! JUST FOR TESTING
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjcsImlhdCI6MTYyMDMxMTY0NCwiZXhwIjoxNjIwMzQ3NjQ0fQ.HYrsoXjqB8RbLCjXf1nWSZdr6h5ymvdvWKY6OVDa504'

class Middleware {
    async requireAuth(to, from, next) {
        const auth_client = new AuthClient()
        const auth = await auth_client.validateToken(token)
        if (to.meta.auth) {
            if (auth) {
                next()
            }
            next.redirect('/')
        }
        next()
    }
}

export default Middleware