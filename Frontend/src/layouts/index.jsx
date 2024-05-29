import { Outlet, useLocation , Navigate} from "react-router-dom";
import { useState, useEffect,  }from "react";

import Header from "./header";
import Overlay from "./overlay";
import Sidebar from "./sidebar";
import Check from "../API/Check";

import PupUp from "../components/PopUp";

const Layout = () => {
    
    const location = useLocation();
    const isLoading = location.state?.loading;

    const [isAuth , setIsAuth] = useState(false)
    const [isShow, setIsShow] = useState(false)

    useEffect(() => {
        const interval = setInterval(async () => {
            await Check((success) => {
                if(success){
                    setIsAuth(success);
                    setIsShow(true)
                }
            });
        },1 * 60  * 1000); 
        return () => clearInterval(interval);
    }, []);

    //isAuth &&!isShow && <Navigate to="/" />
    if (!isShow && isAuth) {
        return <Navigate to="/" />;
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

        <PupUp trigger={isShow} setTrigger = {setIsShow} >
             Secion Expirada
        </PupUp> 
        </>
    );
};

export default Layout;