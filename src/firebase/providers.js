import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "./appFirebase";

export const registerUserWithEmail = async (User) => {

    const { email, password } = User;

    return createUserWithEmailAndPassword(FirebaseAuth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage, errorCode);
            // ..
        });
}

export const userOnAuthChanged = () => {

    const user = FirebaseAuth.currentUser;

    return user;

}
