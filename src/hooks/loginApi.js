import { api } from "../lib/api"

export const useLoginApi = async(user) => {
    try{
        const res = await api.post('/auth/login', user)
        localStorage.setItem('token', res.data.token);
        return res.data 
    } catch (err) {
        throw error?.res?.data?.detail
    }
}

export const useRegisterApi = async(user) => {
    try{
        const res = await api.post('/auth/signup', user)
        localStorage.setItem('token', res.data.token);
        return res.data
    } catch (err) {
        throw error?.res?.data?.detail
    }
}