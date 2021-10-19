import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initauth from "../Firebase/firebase.init";

initauth();
const useFirebase = () => {
    const [user, setUser] = useState({});


    const auth = getAuth();

    const signInUsingGoole = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
    }

    //user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        signOut(auth)
            .then(() => { });
    }

    return {
        user,
        signInUsingGoole,
        logOut
    }
}


export default useFirebase;