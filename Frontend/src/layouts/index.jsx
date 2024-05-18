import { Outlet, useLocation } from "react-router-dom";
import React from "react";

import Header from "./header";
import Overlay from "./overlay";
import Sidebar from "./sidebar";

const Layout = () => {
    
    const location = useLocation();
    const isLoading = location.state?.loading;

    return (
        <div className="app-container">
            <Header/>
            <div className="app-content">
                <Sidebar/>
                <main className="Main">
                    {isLoading && <Overlay/>}
                    <Outlet/>
                </main>
            </div>
        </div>
    );
};

export default Layout;