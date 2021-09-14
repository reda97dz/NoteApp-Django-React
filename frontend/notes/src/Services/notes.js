import axios from 'axios'

const getAll = async () => {
    const request = axios.get('/notes')
    const response = await request
    return response.data
}

const create = async newObject => {
    const request = axios.post('/create/', newObject)
    const response = await request
    return response.data
}

const remove = async id => {
    const request = axios.delete(`/${id}/delete`)
    const response = await request
    return response.data
}

export default {getAll, create, remove}