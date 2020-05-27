import request from '../utils/http'


export function banners() {
    return request({
        url: '/api/v2/banners',
        method: 'GET'
    })
}

