fs = require('fs');
var parser = require('xml2json');

const data = fs.readFileSync( '../../public/1622818161677-solicitacao.xml')

var json = parser.toJson(data)

console.log(JSON.parse(json).cteProc.CTe)