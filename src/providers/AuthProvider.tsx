import React, { ReactNode, useEffect, useState, useContext } from 'react'
import { auth } from '../config/firebase'
import {
  UserCredential,
  User,
  sendPasswordResetEmail as resetPassword,
  createUserWithEmailAndPassword as signUp,
  signInWithEmailAndPassword as signIn,
} from 'firebase/auth'

export interface AuthProviderProps {
  children?: ReactNode
}

export interface AuthContextModel {
  user: User | null
  signIn: (email: string, password: string) => Promise<UserCredential>
  resetPassword: (email: string) => Promise<void>
  signUp: (email: string, password: string) => Promise<UserCredential>
  // signOut: () => void;
}

export const AuthContext = React.createContext<AuthContextModel>(
  {} as AuthContextModel,
)

export function useAuth(): AuthContextModel {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [user, setUser] = useState<User | null>(null)

  function signUp(email: string, password: string): Promise<UserCredential> {
    return signUp(email.trim(), password)
  }

  function signIn(email: string, password: string): Promise<UserCredential> {
    return signIn(email.trim(), password)
  }

  function resetPassword(email: string): Promise<void> {
    return resetPassword(email)
  }
  useEffect(() => {
    //function that firebase notifies you if a user is set
    const unsubsrcibe = auth.onAuthStateChanged((user) => {
      setUser(user)
    })
    return unsubsrcibe
  }, [])

  const values = {
    signUp,
    resetPassword,
    user,
    signIn,
  }
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}
