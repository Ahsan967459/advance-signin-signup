import { useContext } from "react";
import { context } from "../contextProvider/ContextProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const Private = ({children}) => {
    const {user,loading}=useContext(context);
    console.log(loading);

    if(loading){
        return <div className="h-screen w-full flex justify-center items-center ">
             <span className="loading loading-spinner text-primary"></span>
             <span className="loading loading-spinner text-secondary"></span>
             <span className="loading loading-spinner  text-error"></span> 
          </div>
    }
    if(user){
        return children;
    }
    //that's <Navigate/> componet of react it's when it's return to go to path location.........
    return <Navigate to="/signin"></Navigate>
};

Private.propTypes={
    children: PropTypes.node.isRequired
}

export default Private;