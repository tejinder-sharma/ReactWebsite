import { signInWithGooglePopUp, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopUp();
        console.log(user)
        createUserDocumentFromAuth(user)
    }
    return(
        <div>
        <h2> I am sign in</h2>
        <button className="bg-green-500 px-4 py-2 text-white" onClick={logGoogleUser}>SignIn</button>
        </div>
    )
} 

export default SignIn