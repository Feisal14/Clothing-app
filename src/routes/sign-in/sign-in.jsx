import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../util/utils/firebase'

const SignIn = () => {
  const logGoogleUserIn  = async () => {
    const { user } = await signInWithGooglePopup();
   const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Sign in</h1>
      <button onClick={logGoogleUserIn}>Sign in with Google</button>
    </div>
  );
};

export default SignIn;
