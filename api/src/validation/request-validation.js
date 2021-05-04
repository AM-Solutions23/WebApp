/**
 * 
 * Check if all expected fields are filled
 * @param fieldsToCheck 
 * @returns 
 */
exports.validate = (fieldsToCheck) => {
    let valid = true
    fieldsToCheck.forEach(field => {
        if(!field){
            valid = false
        }
    });
    return valid
}