import './auth.scss'

import SignUp from "../../components/sign-up/sign-up";
import SignIn from "../../components/sign-in/sign-in"

const Authintication = () => {



  return (
    <div className="auth-container">
      
      <SignIn />
      <SignUp /> 
      
    </div>
  );
};

export default Authintication;
