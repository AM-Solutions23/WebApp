const empresa_repo = require('../src/repository/empresa-repository')
const test = require('tape')

// ToDo UnhandledPromiseRejectionWarning:
test('Login Test', (t) => {
    t.assert(empresa_repo.searchLogin('X. XXX. XXX/0001-XX','1234') === null, "[*]PASS")
    t.end()
})