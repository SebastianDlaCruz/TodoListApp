import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "./appFirebase";

export const registerUserWithEmail = async ({ email, password } = User) =>
    createUserWithEmailAndPassword(FirebaseAuth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            return true;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage, errorCode);
            return false;
        });


export const userOnAuthChanged = () => {

    const user = FirebaseAuth.currentUser;

    return user;

}
