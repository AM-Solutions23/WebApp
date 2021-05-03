/**
 * 
 * Check if all expected fields are filled
 * @param fieldsToCheck 
 * @returns 
 */
exports.validate = (fieldsToCheck) => {
    var valid = true
    fieldsToCheck.forEach(field => {
        if(!field){
            valid = false
        }
    });
    return valid
}