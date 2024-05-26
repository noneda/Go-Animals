import axios from "../config";


const Check = async (onSuccess) => {

    const Auth = sessionStorage.getItem('token')

    if(!Auth){
        onSuccess(true);
        return;
    }
    try{
        const res = await axios.post('/Auth', {
            token : sessionStorage.getItem("token")
        })
        if(res.status !== 200) {
            localStorage.removeItem("token")
            onSuccess(true)
        }else{
            onSuccess(false)
            console.log("On")
        }
    }catch(err){
        onSuccess(true)
    }
}

export default Check;