import axios from "axios"
import { MAC, Encrypt, Decrypt } from "../../Utils/Secure"

const send = {
    MAC: "D0:3C:1F:08:79:9C"
}

export const handleLogin = async (onSuccess) => {
    try{
        console.log("Error Aqui")
        const get = Encrypt(send)
        console.log(get)
        
        const res = await axios.post('http://localhost:1200/API/Auth/LogIn', {
            get
        })
        if(res.status === 200){
            const { token } = res.data.set
            localStorage.setItem('token', token)
            onSuccess(true)
        }else{
            onSuccess(false)
        }

    }catch(err){
        alert("Login Failed \n\tThis Software is not for this Device")
        onSuccess(false)

    }
}

export default handleLogin;