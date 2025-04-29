import React, { createContext } from 'react';

const AuthContext = createContext(null)

const Providers = () => {


    const authInfo = {
        name: "akash"
    }



    return (
        <AuthContext.Provider value={authInfo}>
            
        </AuthContext.Provider>
    );
};

export default Providers;