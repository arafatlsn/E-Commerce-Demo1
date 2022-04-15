import auth from "../Firebase/FireBase.init";
import { useCreateUserWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';

const useSignIn = () => {
  // google login 
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
  // facebook login
  const [signInWithFacebook, userFacebook, loadingFacebook, errorFacebook] = useSignInWithFacebook(auth);
  // create account with email password 
  const [
    createUserWithEmailAndPassword,
    userWithEmaiPass,
    loadingWithEmaiPass,
    errorWithEmaiPass,
  ] = useCreateUserWithEmailAndPassword(auth);

  return { signInWithGoogle, userGoogle, signInWithFacebook, userFacebook, createUserWithEmailAndPassword }
}


export default useSignIn;