import axios from 'axios'
import { Toast } from 'vant';

const request = axios.create({
    baseURL: "https://gank.io",
    timeout: 10000
})

request.interceptors.request.use(
    config => {
        return config
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    }
)

request.interceptors.response.use(
    response => {
        const res = response.data
        if (res.status !== 100) {
            Toast(res.message || 'Error')
            return Promise.reject(new Error(res.message || 'Error'))
        } else {
            return res
        }
    },
    error => {
        console.log('Error', error)
        Toast(error)
        return Promise.reject(error)
    }
)

export default request