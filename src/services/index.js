import axios from 'axios'

require('dotenv').config()

const config = {
  BASE_URL: process.env.REACT_APP_API_URL
}
const api = axios.create(config)

const RestClient = {
  // Temporarily intercept login request
  post: (path, params) =>
    path === '/auth' ? loginUserDummy(params) : api.post(path, params)
}

function loginUserDummy (params) {
  const okRes = {
    status: 200,
    data: {
      user: {
        ...params,
        verificationCode: 400200,
        firstname: 'D',
        lastname: 'Bundi'
      }
    }
  }
  // const notOkRes = {
  //   response: { status: 401, message: 'Wrong email or password' },
  // };

  // return params.email === 'admin@e.com' && params.password === 'Admin123'
  //   ? okRes
  //   : notOkRes;

  return okRes
}

export default RestClient
