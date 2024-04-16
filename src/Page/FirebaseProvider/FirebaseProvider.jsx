import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from './../../firebase/firebase.config';


export const AuthContext = createContext(null)

// social auth provider
const GoogleProvider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();

const FirebaseProvider = ({children}) => {

    const [ user, setuser ] = useState(null)
    console.log(user);

    // Create User
    const signup = (email, password) =>{
        
       return createUserWithEmailAndPassword(auth, email, password)
    }

    // SignIn User
    const signin = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Google login
    const googlelogin = () =>{
        return signInWithPopup(auth, GoogleProvider)
    }

    // Github login
    const githublogin = () =>{
        return signInWithPopup(auth, GithubProvider)
    }

    // Sign out
    const signout = () =>{
        setuser(null)
        return signOut(auth)
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
        user, 
        signup,
        signin,
        googlelogin,
        githublogin,
        signout
    }
    return (
        <AuthContext.Provider value={allvalue}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;