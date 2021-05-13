exports.getCurrentDateTime = () => {
   return new Date().toISOString().replace('T', ' ').split('.')[0] // * yyyy-mm-dd hh:mm:ss
}