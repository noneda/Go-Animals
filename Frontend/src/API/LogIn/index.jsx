import axios from "../config"
import {Encrypt} from "../../Utils/Secure"

const send = {
    MAC: "D0:3C:1F:08:79:9C"
}

export const handleLogin = async (onSuccess) => {
    try{
        const get = Encrypt(send)
        const res = await axios.post('/Auth/LogIn', {
            get
        })
        if(res.status === 200){
            const { token } = res.data.set
            sessionStorage.setItem('token', token)
            onSuccess(true)
        }else{ 
            onSuccess(false)
        }
    }catch(err){
        onSuccess(false)
    }
}

export default handleLogin;