import { useState } from "react";

import FormInput from "../form-input/form-input";
import Button from "../button/button";

import './sign-in.scss'

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthWithEmailAndPassword
} from "../../util/utils/firebase";

const defaultFormFeilds = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFeilds, setFormFeilds] = useState(defaultFormFeilds);
  const { email, password } = formFeilds;

  const resetFormFeild = () => {
    setFormFeilds(defaultFormFeilds);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const repsonse = await signInAuthWithEmailAndPassword(email, password);
      resetFormFeild();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use");
      } else {
        alert("An error occured");
      }
      console.log("Countered an error", error);
    }
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  console.log(formFeilds);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFeilds({ ...formFeilds[name], value });
  };
  return (
    <div className="sign-in-container">
      <h2>Already Have an account?</h2>
      <h1>Sign in with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Sign in with google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
