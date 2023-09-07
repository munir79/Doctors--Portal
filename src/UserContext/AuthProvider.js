import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth';
import app from '../Firebase/firebase.init';
const auth=getAuth(app);

export const AuthContex=createContext();

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    useEffect( ()=>{
    const unsubscriber=  onAuthStateChanged(auth,currentUser=>{
        console.log('user Observing');
        setUser(currentUser);
        setLoading(false);
      });
      return ()=> unsubscriber();
    },[] )
     
    const SignOut=()=>{
      setLoading(true);
      return signOut(auth);
    }
    const createUser=(email,password)=>{
      setLoading(true);
      return  createUserWithEmailAndPassword(auth,email,password);
    }
    const UpdateUSer=(userInfo)=>{
      return updateProfile(user);
    }
    const signIn=(email,password)=>{
      setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    
    }
    const authInfo={
  createUser,signIn,user, SignOut,UpdateUSer,loading
    }
   

    return (

        <div>
            <AuthContex.Provider value={authInfo} >
             {children}
            </AuthContex.Provider>
        </div>
    );
};

export default AuthProvider;