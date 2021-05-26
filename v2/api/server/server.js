const app = require('../src/app')
require('dotenv/config')

const port = process.env.PORT

app.listen(port ,function(){
    console.log('[*] Server running in port ' + port )
})