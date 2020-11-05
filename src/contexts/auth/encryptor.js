/* eslint-disable no-console */
import jwt from 'jsonwebtoken'

require('dotenv').config()

const SECRET_KEY = process.env.REACT_APP_SECRET_KEY

/**
 * @description Obfuscate data for safe storage in sessionStorage
 * @param {any} data
 */
export function encrypt(data) {
  try {
    /* The following line is necessary to prevent a certain jwt err */
    data.exp && delete data.exp

    return jwt.sign(data, SECRET_KEY, { expiresIn: '1h' })
  } catch (error) {
    console.log('err when encrypting', error.message)
  }
}

/**
 * @description Extract data from token
 * @param {any} token
 */
export function decrypt(token) {
  try {
    return jwt.verify(token, SECRET_KEY)
  } catch (error) {
    console.log('err when decrypting', error.message)
  }
}
