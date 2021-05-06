import axios from 'axios'

const api_hostname = 'http://localhost:4000'

const endpoints = {
    'login': api_hostname + '/login'
}

class ApiService {

    postData(data, endpoint_name) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'POST',
                url: endpoints[endpoint_name],
                data: data
            }).then((response) => {
                resolve(response.data)
            }).catch((err) => reject(err))
            
        })
    }
}

export default ApiService