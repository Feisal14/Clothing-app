import { useState } from "react";
import FormInput from "../form-input/form-input";

import Button from "../button/button";
import "./sign-up.scss";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../util/utils/firebase";

const defaultFormFeilds = {
  nickname: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFeilds, setFormFeilds] = useState(defaultFormFeilds);
  const { nickName, email, password, confirmPassword } = formFeilds;

  const resetFormFeild = () => {
    setFormFeilds(defaultFormFeilds);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const user = await createAuthUserWithEmailAndPassword(email, password);

      await createUserDocumentFromAuth(user, { nickName });
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

  console.log(formFeilds);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFeilds({ ...formFeilds[name], value });
  };
  return (
    <div className="sign-up-conatiner">
    <h2>Dont Have an account?</h2>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={() => {}}>
        <FormInput
          label="Dispalay Name"
          type="text"
          required
          onChange={handleChange}
          name="nickName"
          value={nickName}
        />

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

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default SignUp;
