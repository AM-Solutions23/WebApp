class Middleware {
    requireAuth(to, from, next) {
        const res = false
        if (to.meta.auth) {
            if (res) {
                next()
            }
            next.redirect('/')

        }
        next()
    }
}

export default Middleware