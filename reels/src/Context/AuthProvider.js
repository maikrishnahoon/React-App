import React, { useState, useContext, useEffect } from 'react'
import { auth } from '../firebase' // direct import

export const AuthContext = React.createContext(); // synatx to create context api 

function AuthProvider({ children }) {     // children prop
    const [currentUser,setCurrentUser] = useState();
    const[loading,setLoading] = useState(true);
    // whenver we signup in the app with email and password
    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email,password);
    }
    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password);
    }
    function logout() {
        return auth.signOut();
    }
    
    useEffect(() => {   
        // act as componentdidMount    
        const unsubscribe = auth.onAuthStateChanged(user => {    // whenever we login,onAuthStateChanged is fired and user state gets logined user as its state and loading get off(false);
                                                              //onAuthStateChanged(user => } user in this argument????... whenever Auth state is changed by the some user...it provied us that user.
            setCurrentUser(user);
            setLoading(false);
        })
        // act as componentdwillUnmount
        return ()=>{
            unsubscribe(); // whenever we logout aut or close tab we remove listner onAuthStateChanged for good practice
        }
    },[])

    const value = {
        currentUser,
        login,
        signup,
        logout
    }

    return (
        <div>
     <AuthContext.Provider value={value}>      {/*  whenever state is changed value is changed*/}
      {!loading&&children}      {/* consuming value .... we can use turnary opertor */}
     </AuthContext.Provider>
        </div>
    )
}
export default AuthProvider



