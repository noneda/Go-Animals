import { useEffect, useState } from "react";
import handleLogin from "../../API/Auth";
import { Navigate } from 'react-router-dom';

const Overlay = () => {

    const [isAuthenticated, setIsAuthenticated] = useState()

    useEffect(() => {
        const interval = setInterval(async () => {
            await handleLogin((success) => {
                setIsAuthenticated(success);
            });

        }, 1 * 1 * 1000); 

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="Overlay">
            <div className="loading">Loading...</div>
            {
                isAuthenticated ? <Navigate to="/home" />: <></>
            }
        </div>
    );
};

export default Overlay;