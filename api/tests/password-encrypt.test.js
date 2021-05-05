const { text } = require('express')
const password_hash = require('password-hash')
const test = require('tape')

class SecurePassword {
    encryptPassword(password) {
        let hashed_password = password_hash.generate(password)
        return hashed_password
    }

    verifyEncryptedPassword(password, encrypted_password) {
        return password_hash.verify(password, encrypted_password)
    }
}

let secure_password = new SecurePassword()
const password = 'a&msolutions'
const encrypted_password = secure_password.encryptPassword(password)

console.log(secure_password.verifyEncryptedPassword(password, encrypted_password))
