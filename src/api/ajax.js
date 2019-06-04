import axios from 'axios'

export default function ajax(url, data = {}, type = 'GET') {
    if (type === 'GET') {
        let paramsStr = ''
        Object.keys(data).forEach(key => {
            paramsStr += data + '=' + data[key]+'&'
        })
        if (paramsStr) {
            paramsStr = paramsStr.substring(0, paramsStr.length - 1)
        }
        return axios.get(url + '?' + paramsStr)
    } else {
        return axios.post(url, data)
    }
}