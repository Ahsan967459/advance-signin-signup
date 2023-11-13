import { createContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut,signInWithPopup,GoogleAuthProvider  } from "firebase/auth";
import app from '../Components/Firebase/firebase.config';

export const context=createContext(null);

const ContextProvider = ({children}) => {
    const [user,setUser]=useState(null);
    //use for private route loadding..........
    const [loading,setLoading]=useState(true);


    const auth=getAuth(app);
    //User creation function..........
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //user signin function............
    const signinUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    //onAuthStateChanged()......that store user sign in or sign out in page...........
    useEffect(()=>{
        const unSubcribe=onAuthStateChanged(auth,curentUser=>{
           setUser(curentUser);
           setLoading(false);
        });
        return()=>{
            unSubcribe();
           
        }
    },[])


    //Sign out user...........
    const SignOut=()=>{
        return signOut(auth);
    }

    //sign with google.......
    const signWithGoogle=()=>{
        const googleProveder=new GoogleAuthProvider();

        return signInWithPopup(auth,googleProveder);
    }



   const authInf={auth,user,createUser,signinUser,SignOut,signWithGoogle,loading};

    return (
        <context.Provider value={authInf}>
            {
                children
            }
        </context.Provider>
    );
};

ContextProvider.propTypes={
    children: PropTypes.node.isRequired
}

export default ContextProvider;