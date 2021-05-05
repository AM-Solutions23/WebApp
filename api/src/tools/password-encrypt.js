const password_hash = require('password-hash')

module.exports = class SecurePassword {

    /**
     * 
     * Encrypt password to save hash on database
     * @param password 
     * @returns hash of type sha1 (default algotithm type)
     */
    encryptPassword(password) {
        let hashed_password = password_hash.generate(password)
        return hashed_password
    }

    /**
     * 
     * Verify hash
     * @param  password 
     * @param  encrypted_password 
     * @returns boolean
     */
    verifyEncryptedPassword(password, encrypted_password) {
        return password_hash.verify(password, encrypted_password)
    }
}

