
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyBotXSqiyo0x3Y67YRNc3bJL-vhby3JrOs",
  authDomain: "new-shopping-73d83.firebaseapp.com",
  projectId: "new-shopping-73d83",
  storageBucket: "new-shopping-73d83.appspot.com",
  messagingSenderId: "645027479838",
  appId: "1:645027479838:web:9c8d642fc5ade42a82c90f",
  measurementId: "G-PL8D1V8EG7"
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    'prompt': 'select_account'
  });

export  const auth = getAuth();

export const signInWithGooglePopUp = () => signInWithPopup(auth, provider)

export const db = getFirestore(app);

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = await doc(db, 'users', userAuth.uid);
    console.log(userDocRef)

    const userSnapShot = await getDoc(userDocRef)

    console.log(userSnapShot.exists())

    if(!userSnapShot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })

        }
        catch(error){
            console.log('error creating the user ', error.message)
        }
    }
    return userDocRef
}


