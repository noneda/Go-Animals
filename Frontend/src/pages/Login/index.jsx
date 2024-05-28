import { useState } from "react";
import handleLogin from "../../API/LogIn";
import { Navigate } from 'react-router-dom';
import PupUp from "../../components/PopUp"

const Login = () => {

    const [isAuthenticated, setIsAuthenticated] = useState()
    const [isShow, setIsShow] = useState(false)

    const Check = async () => {
        await handleLogin((success) => {
            if(success){
                setIsAuthenticated(success);
            }else{
                setIsShow(true)
            }

        });
    }
    return (
        <div className="Login">
            <button className="btn" onClick={Check}> Entrar </button>
            {
                isAuthenticated ? <Navigate to="/home" />:
                <PupUp trigger={isShow} setTrigger = {setIsShow}>
                Dispositivo Incorrecto
                </PupUp>
            }
        </div>
    );
};

export default Login;
