import { Outlet, useLocation , Navigate} from "react-router-dom";
import { useState, useEffect,  }from "react";

import Header from "./header";
import Overlay from "./overlay";
import Sidebar from "./sidebar";
import Check from "../API/Check";

const Layout = () => {
    
    const location = useLocation();
    const isLoading = location.state?.loading;

    const [isAuth , setIsAuth] = useState(null)

    useEffect(() => {
        const interval = setInterval(async () => {
            await Check((success) => {
                setIsAuth(success);
            });
        console.log("Hello Word!")
        },1  * 60 * 1000); 
        return () => clearInterval(interval);
    }, []);

    if (isAuth){
        alert("Seccion Expirada");
        return <Navigate to="/" />
    }

    return (
        <>
        <div className="app-container">
            <Header/>
            <div className="app-content">
                <Sidebar/>
                    {isLoading ? <Overlay/> : <Outlet/>}
            </div>
        </div>
        </>
    );
};

export default Layout;