import { useState } from "react";
import handleLogin from "../../API/LogIn";
import { Navigate } from 'react-router-dom';

const Login = () => {

    const [isAuthenticated, setIsAuthenticated] = useState()

    const Check = async () => {
        await handleLogin((success) => {
            setIsAuthenticated(success);
        });
    }
    return (
        <div className="Login">
            <button className="btn" onClick={Check}> Entrar </button>
            {
                isAuthenticated ? <Navigate to="/home" />: <></>
            }
        </div>
    );
};

export default Login;