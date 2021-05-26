const xml2js = require('xml2js')

exports.xmlToObject = async (xml) => {
    const result = await xml2js.parseStringPromise(xml)
    return result
}