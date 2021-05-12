import axios from 'axios'

const api_hostname = 'http://localhost:4000'

const endpoints = {
    'login': api_hostname + '/login',
    'token-validation': api_hostname + '/token-validation',
    'solicitacao': api_hostname + '/solicitacao',
    'solicitacao_por_status': api_hostname + '/solicitacao/status'
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

    postDataWithToken(data, endpoint_name, token) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'POST',
                url: endpoints[endpoint_name],
                data: data,
                headers: {
                    'authorization': `Bearer ${token}`
                }
            }).then((response) => {
                resolve(response.data)
            }).catch((err) => reject(err))

        })
    }

    getDataWithToken(endpoint_name, token, payload = '') {
        let url = endpoints[endpoint_name]
        if (payload !== '') {
            url = `${url}/${payload}`
        }

        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: url,
                headers: {
                    'authorization': `Bearer ${token}`
                }
            }).then((response) => {
                resolve(response.data)
            }).catch((err) => reject(err))
        })
    }

    putDataWithToken(endpoint_name, token, payload = '', data) {
        let url = endpoints[endpoint_name]
        if (payload !== '') {
            url = `${url}/${payload}`
        }

        return new Promise((resolve, reject) => {
            axios({
                method: 'PUT',
                url: url,
                data: data,
                headers: {
                    'authorization': `Bearer ${token}`
                }
            }).then((response) => {
                resolve(response.data)
            }).catch((err) => reject(err))
        })
    }
}

export default ApiService