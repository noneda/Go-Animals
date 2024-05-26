import axios from "../config"

export const handlelogout = async (onSuccess) => {
    try{
        const res = await axios.post('/Auth/LogOut', {})
        sessionStorage.removeItem('token')
        onSuccess(true)
    }catch(err){
        onSuccess(false)
    }
}