import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../Firebase/FireBase.init';

const AuthRequire = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();

  if(loading){
    return;
  }

  if(!user){
    return <Navigate to = {'/signin'} state = {{ from: location }} replace />
  }
  return children
};

export default AuthRequire;