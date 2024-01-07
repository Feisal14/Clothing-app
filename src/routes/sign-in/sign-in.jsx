import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../util/utils/firebase";
import SignUp from "../../components/sign-up/sign-up";

const SignIn = () => {
  // useEffect(() => {
  //   const asyncFunctionForGoogleRedirect = async () =>
  //   {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //     const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   };
  //   asyncFunctionForGoogleRedirect();
  // }, []);

  const logGoogleUserIn = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign in</h1>
      <button onClick={logGoogleUserIn}>Sign in with Google</button>
      <SignUp/>
    </div>
  );
};

export default SignIn;
