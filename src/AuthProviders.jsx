import React, { createContext, useEffect, useState } from 'react';
import auth from '../fairebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const AuthContext = createContext(null)

const AuthProviders = ({children}) => {
    const[user, setUser]=useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOutUser = () => {
        return signOut(auth);
    }



    // Observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("currently login user", currentUser)
            setUser(currentUser)
        })
        return() => {
            unsubscribe()
        }


    }, [])


    const authInfo = {
        name: "akash",
        user,
        createUser,
        loginUser,
        logOutUser,

    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;