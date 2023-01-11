import React , { createContext, useEffect, useContext, useState } from "react";
import {auth, db} from '../Firebase'
import { createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut,
        onAuthStateChanged
} from 'firebase/auth'
// firestore
import {setDoc, doc} from 'firebase/firestore'

const AuthContext = createContext()
export const AuthContextProvider = ({children}) => {
    const [user, setUser] =useState({})

    const signUp = (email, password) =>{
        createUserWithEmailAndPassword(auth, email, password)
        setDoc(doc(db, 'user', email), {
            savedMovies: []
        })
    }
    
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut =() =>{
        return signOut(auth)
    }

    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
        setUser(currentUser)
      })  
      return () =>{
        unsubscribe()
      }
    })
  return (
    <AuthContext.Provider value={{user, signUp, signIn, logOut}} >
        {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext =()=>{
    return useContext(AuthContext)
}



