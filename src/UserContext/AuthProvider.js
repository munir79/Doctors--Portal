import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth';
import app from '../Firebase/firebase.init';
const auth=getAuth(app);

export const AuthContex=createContext();

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);
    useEffect( ()=>{
    const unsubscriber=  onAuthStateChanged(auth,currentUser=>{
        console.log('user Observing');
        setUser(currentUser);
      });
      return ()=> unsubscriber();
    },[] )
     
    const SignOut=()=>{
      return signOut(auth);
    }
    const createUser=(email,password)=>{
      return  createUserWithEmailAndPassword(auth,email,password);
    }
    const UpdateUSer=(userInfo)=>{
      return updateProfile(user);
    }
    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    
    }
    const authInfo={
  createUser,signIn,user, SignOut,UpdateUSer
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