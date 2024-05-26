import { Navigate } from 'react-router-dom';

const Private = ({ children }) => {
  const isAuthenticated = localStorage.getItem('token') !== null;
  
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return <>{children}</>;
};

export default Private;