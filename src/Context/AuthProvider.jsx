/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../Config/firebase.config";


export const AuthContext = createContext(null)
const GoogleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const name = {name:"name",roll:"01"}

    useEffect(()=>{
        const UnSubscribe = onAuthStateChanged(auth,cUser=>{
            setUser(cUser);
            setLoading(false)
        })
        return ()=>{
            UnSubscribe()
        }
    },[])

    const signupWithEmail=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInWithEmail=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signInWithGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth, GoogleProvider)
    }

    const values = {
        signupWithEmail,
        signInWithEmail,
        setUser,
        user,
        signInWithGoogle,
        loading,
        name
    }
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;