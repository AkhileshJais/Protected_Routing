import React from 'react'
import {useSelector} from "react-redux"
import {Navigate, useLocation} from "react-router-dom"

const ProtectedRoute = ({children}) => {

    const user = useSelector((state) => state.user);
    console.log("user", user) 
    console.log("user isAuthenticated",user.isAuthenticated)
    console.log("user name ", user.name)
    let location = useLocation();

    if(!user.isAuthenticated) {

        return <Navigate to="/login" state={{ from: location}} replace />
    }
 return children

};

export default ProtectedRoute;
