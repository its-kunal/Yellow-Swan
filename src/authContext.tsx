import { createContext, Dispatch, ReactComponentElement, ReactElement, SetStateAction, useContext, useState } from "react"
import {
    User, onAuthStateChanged, signInWithEmailAndPassword,
    createUserWithEmailAndPassword, signOut, browserLocalPersistence, setPersistence
} from "firebase/auth"

interface AuthContextInter {
    user?: User | null,
    loading?: boolean,
    setLoading?: Dispatch<SetStateAction<boolean>>,
    signInUser?: (email: string, password: string) => void,
    createUser?: (email: string, password: string) => void,
    signOutUser?: () => void
}
import { auth } from "./fb.config"

const AuthContext = createContext<AuthContextInter>({})

export const useAuth = () => {
    return useContext(AuthContext)
}

export default function authContext({ children }: { children: ReactElement }) {
    const [loading, setLoading] = useState<boolean>(true)
    const [user, setUser] = useState<User | null>(null)

    onAuthStateChanged(auth, user => {
        setUser(user)
        setLoading(false)
    })

    const signInUser = (email: string, password: string) => {

    }

    const createUser = (email: string, password: string) => {

    }

    const signOutUser = () => {
        signOut(auth)
    }

    let value: AuthContextInter = {
        user, loading, setLoading, signInUser, createUser, signOutUser
    }
    
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
