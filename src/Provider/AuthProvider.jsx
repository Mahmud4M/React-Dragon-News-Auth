import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Create User
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Sign In
    const signIn = (email, password) => {
       return signInWithEmailAndPassword(auth, email, password)
    }

    //Log Out
    const logOut = () =>{
        return signOut(auth)
    }

    // Data in User 
    useEffect(() => {
        const unSuscribe = onAuthStateChanged(auth, currentUser => {
            console.log('User in the Auth State Change', currentUser)
            setUser(currentUser)
        });
        return () => {
            unSuscribe();
        }
    }, [])


    const authInfo = {
        user,
        createUser,
        logOut,
        signIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;