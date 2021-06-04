fs = require('fs');
var parser = require('xml2json');

exports.xmlHandler = (filename) => {
    const data = fs.readFileSync(__dirname + '/uploads/' + filename)

    var json = parser.toJson(data)

    console.log(JSON.parse(json).cteProc.CTe)
}