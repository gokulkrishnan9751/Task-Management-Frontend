import { api } from "../lib/api"

export const getStatus = async() => {
    try {
        const res = await api.get('/user/status')
        return res.data
    } catch (error) {
        throw error?.res?.data?.detail
    }
}

export const getPriority = async() => {
    try {
        const res = await api.get('/user/priority')
        return res.data
    } catch (error) {
        throw error?.res?.data?.detail
    }
}

export const getUserRole = async() => {
    try{
        const res = await api.get('/auth')
        return res.data
    } catch(error) {
        throw error?.res?.data?.detail || "oops"
    }
}

export const fetchUsers = async() => {
    try {
        const res = await api.get('/admin/users')
        return res.data
    }
    catch(error) {
        throw error?.res?.data?.detail
    }
}