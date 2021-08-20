import axios from 'axios'

const baseUrl = 'http://localhost:8000/notes'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(`${baseUrl}/create/`, newObject)
    return request.then(response => response.data)
}

const remove = id => {
    const request = axios.delete(`${baseUrl}/${id}/delete`)
    return request.then(response => response.data)
}

export default {getAll, create, remove}