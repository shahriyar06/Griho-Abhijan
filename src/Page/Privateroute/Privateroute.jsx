import { useContext } from "react";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";
import { Navigate, useLocation } from "react-router-dom";


const Privateroute = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
 
    if(loading){
        return <span className="loading loading-spinner text-neutral text-center"></span>;
    }

    if(!user){
        return <Navigate to='/login' state={location?.pathname || '/'}></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default Privateroute;