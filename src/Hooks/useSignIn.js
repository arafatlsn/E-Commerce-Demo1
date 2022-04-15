import auth from "../Firebase/FireBase.init";
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';

const useSignIn = () => {
  // google signin 
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
  // facebook signin
  const [signInWithFacebook, userFacebook, loadingFacebook, errorFacebook] = useSignInWithFacebook(auth);
  // signin with email password 
  const [
    signInWithEmailAndPassword,
    userSignInWithPass,
    loadingSignInWithPass,
    errorSignInWithPass,
  ] = useSignInWithEmailAndPassword(auth);

  // create account with email password 
  const [
    createUserWithEmailAndPassword,
    userWithEmaiPass,
    loadingWithEmaiPass,
    errorWithEmaiPass,
  ] = useCreateUserWithEmailAndPassword(auth);

  return { signInWithGoogle, userGoogle, signInWithFacebook, userFacebook, createUserWithEmailAndPassword, signInWithEmailAndPassword, userSignInWithPass }
}


export default useSignIn;