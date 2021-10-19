import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initauth from "../Firebase/firebase.init";

initauth();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    //email
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    const auth = getAuth();

    const signInUsingGoole = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
        // .then(result => {
        //     setUser(result.user)
        // })
        // .finally(() => setIsLoading(false))

    }

    //email
    // const handleRegister = e => {
    //     console.log(name, email, password);
    //     e.preventDefault();
    // }
    // const handleNameChange = e => {
    //     setName(e.target.value)
    // }
    // const handleEmailChange = e => {
    //     setEmail(e.target.value)
    // }
    // const handlePasswordChange = e => {
    //     setPassword(e.target.value)
    // }

    //user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        isLoading,
        signInUsingGoole,
        logOut
    }
}


export default useFirebase;