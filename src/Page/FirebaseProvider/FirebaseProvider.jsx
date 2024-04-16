import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from './../../firebase/firebase.config';


export const AuthContext = createContext(null)

const FirebaseProvider = ({children}) => {

    const [ user, setuser ] = useState(null)

    // Create User
    const signup = (email, password) =>{
        
       return createUserWithEmailAndPassword(auth, email, password)
    }

    // Obserber
    useEffect(() =>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setuser(user)
            } 
          });
    },[])


    const allvalue = { 
        signup
    }
    return (
        <AuthContext.Provider value={allvalue}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;