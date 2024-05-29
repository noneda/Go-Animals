import { useEffect, useState } from 'react';
import { handlelogout } from '../../API/LogOut';
import { Navigate } from 'react-router-dom';

import PupUp from '../../components/PopUp';
import ActionsBox from '../../components/Edit';

const Header = () => {
    const [isLogOut, setIsLogOut] = useState()
    const [isShow, setIsShow] = useState(false)
    const [isNew , setIsNew] = useState(false)

    const itemNew = {
        Product : null,
        Section : null,
        Units : null,
        Lote : null,
        Type : null,
        Value : null
    }
    
    const LogOut = async () => {
        await handlelogout((success) => {
            if(success){
                setIsLogOut(success);
                setIsShow(true)
            }
        })
    }
    
    useEffect(() => {
        const modeSwitch = document.querySelector('.mode-switch');

        const handleModeSwitch = () => {
        document.documentElement.classList.toggle('dark');
        modeSwitch.classList.toggle('active');
        };

        modeSwitch.addEventListener('click', handleModeSwitch);

        return () => {
        modeSwitch.removeEventListener('click', handleModeSwitch);
        };
    }, []);

    if (!isShow && isLogOut) {
        return <Navigate to="/" />;
    }
  return (
    <>
  <div className="app-header">
    <div className="app-header-left">
        <span className="app-icon"></span>
        <p className="app-name">Go Animals</p>
        <div className="search-wrapper">
            <input id="search" className="search-input" type="text" placeholder="Search" />
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="feather feather-search" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="M21 21l-4.35-4.35"></path>
            </svg>
        </div>
    </div>
    <div className="app-header-right">
        <button className="mode-switch" title="Switch Theme">
            <svg className="moon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="24" height="24" viewBox="0 0 24 24">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
            </svg>
        </button>
        <button className="add-btn" title="Add New Project" onClick={() => setIsNew(true)}>
            <svg className="btn-icon feather feather-plus"  width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
        </button>
        <button className="notification-btn" onClick={LogOut}>
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4m7 14l5-5l-5-5m5 5H9"></path>
            </svg>
        </button>
    </div>
    <button className="messages-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
    </button>
</div>
<PupUp trigger={isShow} setTrigger = {setIsShow} >
    Cerrar Secion
</PupUp>
<ActionsBox trigger={isNew} setTrigger = {setIsNew} item = {itemNew}>
    Nuevo Producto
</ActionsBox>
</>
  );
};

export default Header;
