import axios from 'axios'

const api_hostname = 'http://localhost:4000'

const endpoints = {
    'login': api_hostname + '/login',
    'token-validation': api_hostname + '/token-validation'
}

class ApiService {
    // * Without token
    postData(data, endpoint_name) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'POST',
                url: endpoints[endpoint_name],
                data: data
            }).then((response) => {
                resolve(response)
            }).catch((err) => reject(err))
            
        })
    }

    postDataWithToken(data, endpoint_name, token){
        return new Promise((resolve, reject) => {
            axios({
                method: 'POST',
                url: endpoints[endpoint_name],
                data: data,
                headers: {
                    'authorization' : `Bearer ${token}`
                }
            }).then((response) => {
                resolve(response.data)
            }).catch((err) => reject(err))
            
        })
    }
}

export default ApiService