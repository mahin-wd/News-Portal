import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup } from 'firebase/auth'
import app from '../../Firebase/Firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState([]);

    const loginWighGoogle =(provider) => {
        return signInWithPopup(auth, provider)
    }

    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('current user', currentUser);
            setUser(currentUser);
        })
        return () => { 
            unSubscribe();
        }
    }, [])

    const authInfo = {user, loginWighGoogle};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;