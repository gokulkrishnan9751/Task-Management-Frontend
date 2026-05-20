import { api } from "../lib/api"

export const fetchAdminTasks = async() => {
    try {
        const res = await api.get('/admin/tasks')
        return res.data
    } catch(error) {
        throw error?.res?.data?.detail
    }
}

export const fetchUserTasks = async() => {
    try{
        const res = await api.gete('/task')
        return res.data
    } catch(error) {
        throw error?.res?.data?.detail
    }
}