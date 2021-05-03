const app = require('../src/app')
require('dotenv/config')

var port = process.env.PORT

app.listen(port ,function(){
    console.log('[*] Server running in port ' + port )
})