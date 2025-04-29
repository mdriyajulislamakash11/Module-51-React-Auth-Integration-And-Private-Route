import React, { createContext } from 'react';
import auth from '../fairebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

export const AuthContext = createContext(null)

const AuthProviders = ({children}) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    onAuthStateChanged(auth, currentUser => {
        if(currentUser) {
            console.log("currently login user", currentUser)
        }else{
            console.log("no user login")
        }
    } )

    const authInfo = {
        name: "akash",
        createUser,
        loginUser,

    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;